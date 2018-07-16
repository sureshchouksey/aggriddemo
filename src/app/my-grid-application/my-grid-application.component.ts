import { Component, OnInit } from '@angular/core';
import { GridOptions} from "ag-grid";
import { RedComponentComponent} from "../red-component/red-component.component";
import { PushNotificationService} from "../services/push-notification.service";

@Component({
  selector: 'app-my-grid-application',
  templateUrl: './my-grid-application.component.html',
  styleUrls: ['./my-grid-application.component.css']
})
export class MyGridApplicationComponent implements OnInit {
    jobPostingId: number;
    isDeleteClick: boolean;
  // Paggination Options
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private gridOptions;
  private defaultColDef;
  private rowData;
  private rowGroupPanelShow;
  private pivotPanelShow;
  private domLayout;
  private rowSelection;
  private rowModelType;
  private paginationPageSize;
  private cacheOverflowSize;
  private maxConcurrentDatasourceRequests;
  private infiniteInitialRowCount;
  private maxBlocksInCache;
  private getRowNodeId;
  private datasource;
  private cacheBlockSize;
  private currentPage: number;
  private totalPages: number;
  private totalRecords: number = 0;
  private grdPageSize: number;
  private sortBy = "";
  private sortOrder = "";
  private namefiltertext = "";
  private valuefiltertext = "";
  private gridreadydone: boolean;
  isParentDataReady: boolean = false;
  selectedValue: number = 10;
  parentPaginationData = {
    totalRecords: this.totalRecords,
    pagesize: this.grdPageSize,
    currentPage: this.currentPage
  };
  constructor(private pushNotificationService:PushNotificationService) {
    this.columnDefs = [
      {
        width: 80,
        checkboxSelection: true,
        suppressSorting: true,
        suppressFilter: true,
        headerCheckboxSelection: true,
        headerCellRenderer: headerCellRenderer
      },
      {
        headerName: "ID",
        field: "deviceId",
        width: 100,
        filter: "text",
        filterParams: {
          filterOptions: ["contains"],
          applyButton: true, cellClass: 'cellpadd',
          clearButton: true
        }
      },
      {
        headerName: "User Name",
        field: "username",
        cellClass: 'cellpadd',
        filter: "text",
        filterParams: {
          filterOptions: ["contains"],
          applyButton: true, cellClass: 'cellpadd',
          clearButton: true
        },
      },
      {
        headerName: "RegistrationToken",
        field: "registrationToken",
        cellClass: 'cellpadd',
        filter: "text",
        filterParams: {
          filterOptions: ["contains"],
          applyButton: true, cellClass: 'cellpadd',
          clearButton: true
        },
      },
      {
        headerName: "packageName",
        field: "packageName",
        cellClass: 'cellpadd',
        filter: "text",
        filterParams: {
          filterOptions: ["contains"],
          applyButton: true, cellClass: 'cellpadd',
          clearButton: true
        }//,
       // valueFormatter: this.dateFormatter,
      },
      {
        headerName: "ApiKey",
        field: "apiKey",
        cellClass: 'cellpadd',
        filter: "text",
        filterParams: {
          filterOptions: ["contains"],
          applyButton: true, cellClass: 'cellpadd',
          clearButton: true
        }//,
        //valueFormatter: this.dateFormatter,
      }
    ];

    this.rowData = getData(5);
    this.rowGroupPanelShow = "always";
    this.pivotPanelShow = "always";
    this.domLayout = "autoHeight";
    this.rowSelection = "multiple";
    this.rowModelType = "infinite";
    this.paginationPageSize = 10;
    this.cacheOverflowSize = 2;
    this.maxConcurrentDatasourceRequests = 2;
    this.infiniteInitialRowCount = 1;
    this.maxBlocksInCache = 1;
    this.cacheBlockSize = 10;

    this.gridOptions = <GridOptions>{};

   }

  ngOnInit() {
      this.ConstructDynamicColumns();
  }

  ConstructDynamicColumns() {
    this.columnDefs.push({
      headerName: "Action",
      width: 150,
      cellClass: 'cellpadd',
      cellRenderer: cellRenderer,
      suppressSorting: true,
      suppressMenu: true,
      suppressFilter: true,
      pinned: 'right'
    });
  }

  public onRowClicked(e) {
    if (e.event.target !== undefined) {
      let data = e.data;
      let actionType = e.event.target.getAttribute("data-action-type");
    //   switch (actionType) {
    //     case "edit":
    //       this.router.navigate(['../../../editjobpost/' + data.jobPostingId], { relativeTo: this.route });
    //     case "remove":
    //       return this.DeleteUser(data);
    //     case "view":
    //       this.router.navigate(['../../../viewjobpost/' + data.jobPostingId, 'view'], { relativeTo: this.route });
    //     case "activeDeactive":
    //       return this.ActiveDeactiveUser(data);
    //   }
    }
  }

  onPageSizeChanged(newPageSize) {
    this.isParentDataReady = false;
    var value = (document.getElementById("page-size") as HTMLSelectElement).value;
    console.log(value);
    this.gridApi.paginationSetPageSize(Number(value));
    this.grdPageSize = Number(value);
    this.currentPage = 1;
    var sortModel = this.gridApi.getSortModel();
    this.sortBy = "";
    this.sortOrder = "";
    if (sortModel[0] != null) {
      this.sortBy = sortModel[0].colId;
      this.sortOrder = sortModel[0].sort;
    }
   // this.jobPostingInput = new JobPostingInput(0, "", "","",0, "",0, this.sortBy, this.sortOrder, 1, this.grdPageSize);
    this.pageReload();
  }

  onSortChanged(params) {
    var sortModel = this.gridApi.getSortModel();
    if (sortModel[0] != null) {
      this.sortBy = sortModel[0].colId;
      this.sortOrder = sortModel[0].sort;
    }
    //this.jobPostingInput = new JobPostingInput(0, "", "","",0,"",0, this.sortBy, this.sortOrder, 1, this.grdPageSize);
    this.pageReload();
  }

  onFilterChanged(params) {
    this.isParentDataReady = false;
    this.currentPage = 1;
    var sortModel = this.gridApi.getSortModel();
    this.sortBy = "";
    this.sortOrder = "";
    if (sortModel[0] != null) {
      this.sortBy = sortModel[0].colId;
      this.sortOrder = sortModel[0].sort;
    }
    this.Getfilteredrecords();
  }

  private Getfilteredrecords() {
    var jobPostingIdFilterInstance = this.gridApi.getFilterInstance('jobPostingId');
    var companyNameFilterInstance = this.gridApi.getFilterInstance('companyName');
    var jobPostingNameFilterInstance = this.gridApi.getFilterInstance('jobPostingName');
    var statusNameFilterInstance = this.gridApi.getFilterInstance('statusName');    
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    console.log(params);
    this.currentPage = 1;
    this.grdPageSize = 10
   // this.jobPostingInput = new JobPostingInput(0, "", "", "",0, this.p_StatusName, 0, this.sortBy, this.sortOrder, 1, this.grdPageSize);
    this.pageReload();
    //params.api.sizeColumnsToFit();
  }

  clearFilters() {
    this.gridApi.setFilterModel(null);
    this.gridApi.onFilterChanged();
  }

  pageReload() {

    this.pushNotificationService.getAllDevices()
        .subscribe(data=>{
            console.log(data);
            var dataSource = {
            rowCount: null,
            getRows: function (params) {
                var rowsThisPage = data.slice(params.startRow, params.endRow);
                var lastRow = -1;
                if (rowsThisPage && rowsThisPage.length > 0) {
                if (1000 >= data.length)
                    lastRow = data.length;
                }
                else
                lastRow = 0;
                params.successCallback(rowsThisPage, lastRow);
            }
            };
            if (data.length > 0) {
            this.totalRecords = data.length;
            data.forEach((data) => {
                //this.totalRecords = 1;
                //this.totalPages =1;
                return;
            });
            //this.alertService.stopLoadingMessage();
            this.isParentDataReady = true;
            this.parentPaginationData.totalRecords = this.totalRecords;
            this.parentPaginationData.pagesize = this.grdPageSize;
            this.parentPaginationData.currentPage = this.currentPage;
            this.totalPages = Math.ceil(this.totalRecords / this.grdPageSize);
            var recordsPerpage = this.grdPageSize;
            if (this.currentPage * this.grdPageSize > this.totalRecords)
                var recordsPerpage = this.totalRecords % this.grdPageSize;
            this.gridreadydone = true;
            this.paginationPageSize = this.grdPageSize;
            this.cacheBlockSize = this.grdPageSize;
            if (recordsPerpage < this.grdPageSize)
                this.paginationPageSize = recordsPerpage;
            this.gridApi.hideOverlay();
            this.gridApi.setDatasource(dataSource);
            }
            else {
            this.totalRecords = 0;
            this.totalPages = 0;
            this.isParentDataReady = false;
            this.paginationPageSize = 0;
            this.cacheBlockSize = 0;
            this.gridApi.setDatasource([]);
            this.gridApi.showNoRowsOverlay();           
            }
        })
    this.gridreadydone = true;
  }

  setRowData(rowCount) {
    this.gridApi.setRowData(getData(rowCount));
    document.querySelector("#currentRowCount").innerHTML = rowCount;
  }

  onModelUpdated() {
    if (this.gridreadydone === true) {
      this.gridreadydone = false;
    }
  }

  DeleteUser(row: any) {
    this.isDeleteClick = true;
   
  }


  bulkOperationHelperDummy(deletedRow) {
    this.bulkOperationHelper(deletedRow);
  }

  disableDelete() {
    this.isDeleteClick = false;
    this.unSelectRows();
  }

  private getSelectedjobProductIds() {
    var jobPostingId = "";
    var selectedRows = this.gridApi.getSelectedRows();
    if (selectedRows && selectedRows.length > 0) {
      jobPostingId = selectedRows.map(function (obj) {
        return "" + obj["jobPostingId"] + "";
      }).join(',');
    }
    return jobPostingId;
  }

  private unSelectRows() {
    this.gridApi.forEachNode(function (node) {
      node.setSelected(false);
    });
    if (document.getElementById("headerCheckBox") != undefined && document.getElementById("headerCheckBox") != null) {
      document.getElementById("headerCheckBox")["checked"] = false;
    }
  }

  private isValidateGridSelection() {
    var result = false;
    if (this.gridApi && this.gridApi.getSelectedRows() && this.gridApi.getSelectedRows().length > 1) {
      result = true;
    }
    return result;
  }

   bulkOperationHelper(deletedRow: any) {

    // this.bulkActionCareer.ids = deletedRow.row.jobPostingId;
    // this.bulkActionCareer.operationKey = deletedRow.row.oprationType;
   
    // if (deletedRow.row.jobPostingId) {
    //   this.careerService.jobPostingBulkAction(this.bulkActionCareer)
    //     .subscribe(results => {
    //       this.currentPage = 1;
    //       this.isParentDataReady = false;
    //       this.closeModal({ isCancelClick: true });
    //       this.alertService.stopLoadingMessage();
    //       //#region
    //       switch (deletedRow.row.oprationType) {
    //         case 0:
    //           this.alertService.showMessage("Success", `Job post(s) deactivated successfully`, MessageSeverity.success);
    //           break
    //         case 1:
    //           this.alertService.showMessage("Success", `Job post(s) activated successfully`, MessageSeverity.success);
    //           break
    //         case 2:
    //           this.alertService.showMessage("Success", `Job post(s) deleted successfully`, MessageSeverity.success);
    //           break
    //       }
    //       //#endregion
    //       deletedRow.deleteEditor.hide();
    //       this.isDeleteClick = false;
    //     },
    //     error => {
    //       //this.alertService.stopLoadingMessage();          
    //     });
    // }
  }

  closeModal(params) {
    if (params.isCancelClick) {
      this.pageReload();
    }
  }

}

// Functions go here..
function cellRenderer(params) {
  var html = ' <div> <button  data-action-type="view" title="View" class="btn gridbtn viewgridicon"> </button> <button  data-action-type="edit" title="Edit" class="btn gridbtn editgridicon"> </button> <button data-action-type="remove" title="Delete" class="btn gridbtn trash">  </button></div>';
  return html;
}

function cellRendererIsActive(params) {
  var display = 'none';
  var activeDeactiveClass = "";

  if (params.data != null) {
    if (params.data.jobPostingId > 0) {
      activeDeactiveClass = params.data.isActive == 1 ? "activegridicon" : "inactive";
      display = 'block';
    }
  }

  var html = ' <div style="display: ' + display + '">' +
    '<button data-action-type="activeDeactive"  title="Active/Deactive" class="btn gridbtn ' + activeDeactiveClass + '"></button>';

  return html;
}

function createRow(index) {
  var makes = ["Toyota", "Ford", "BMW", "Phantom", "Porsche"];
  return {
    id: "D" + (1000 + index),
    make: makes[Math.floor(Math.random() * makes.length)],
    price: Math.floor(Math.random() * 100000),
    val1: Math.floor(Math.random() * 1000),
    val2: Math.floor(Math.random() * 1000),
    val3: Math.floor(Math.random() * 1000),
    val4: Math.floor(Math.random() * 1000),
    val5: Math.floor(Math.random() * 1000),
    val6: Math.floor(Math.random() * 1000),
    val7: Math.floor(Math.random() * 1000),
    val8: Math.floor(Math.random() * 1000),
    val9: Math.floor(Math.random() * 1000),
    val10: Math.floor(Math.random() * 1000)
  };
}

function getData(count) {
  var rowData = [];
  for (var i = 0; i < count; i++) {
    rowData.push(createRow(i));
  }
  return rowData;
}

function headerCellRenderer(params) {
  var chkboxDiv = document.createElement('div');
  var cb = document.createElement('input');
  cb.setAttribute('type', 'checkbox');
  cb.id = "headerCheckBox";
  cb.className = "styled-checkbox"
  cb.checked = false;
  var eHeader = document.createElement('label');
  eHeader.setAttribute('for', 'headerCheckBox');
  chkboxDiv.appendChild(cb);
  chkboxDiv.appendChild(eHeader);

  cb.addEventListener('change', function (e) {
    if (document.getElementById("headerCheckBox")["checked"]) {
      params.api.forEachNode(function (node) {
        node.setSelected(true);
      });
    } else {
      params.api.forEachNode(function (node) {
        node.setSelected(false);
      });
    }
  });
  return chkboxDiv;
}
