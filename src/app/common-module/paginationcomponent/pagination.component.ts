import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import { CommonModule } from '@angular/common';
import { PagerService } from '../../services/pagination.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'pagination-component',
  templateUrl: 'pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PaginationComponent implements OnInit {
  // array of all items to be paged
  private allItems: any[];
  public pageSizes = [];
  private pageSize;
  private currentPage;
  private shouldReload = false;
  @Input() paginationData: { totalRecords: number, pagesize: number, currentPage: number };
  @Output() updatePage: EventEmitter<any> = new EventEmitter();
  // pager object
  pager: any = {};
  Math: any;
  // paged items
  pagedItems: any[];

  constructor(private pagerService: PagerService) {
    this.Math = Math;
  }

  ngOnInit() {
    this.pager.totalRecords = this.paginationData.totalRecords;
    this.pager.pageSize = this.paginationData.pagesize;
    this.pager.currentPage = this.paginationData.currentPage;
    this.setPage(this.pager.currentPage);
    this.pageSizes = [5, 10, 100, 500, 1000];
    if (this.paginationData.pagesize != null) {
      this.pageSize = this.paginationData.pagesize;
    } else {
      this.pageSize = this.pageSizes[1];
    }
    this.shouldReload = true;
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.pagerService.getPager(this.paginationData.totalRecords, page, this.paginationData.pagesize);
    if (page >= 1) {
      this.currentPage = page;
      if (this.shouldReload) {
        this.updatePage.emit({ currentPage: page });
      }
    }
  }

  onPageSizeChanged(pageSize) {
    this.pager.pageSize = pageSize;
    this.updatePage.emit({ pageSize: pageSize, currentPage:this.currentPage});
  }

  getEndDataIndex() {
    return Math.min((+(((this.currentPage - 1) * this.pager.pageSize) + 1) + (this.pager.pageSize - 1)), this.pager.totalRecords);
  }

  getStartDataIndex() {
    return ((this.currentPage - 1) * this.pager.pageSize) + 1;
  }
}
