//-----------------------------------------------------------------------
// <copyright file="FileName" company="Fulcrum World Wide.">
//     Copyright 2017 Fulcrum World Wide. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

export enum AccessPermissionsEnum {
    GENERAL_PERMISSIONS	=	1	,
    CREATE_USER	=	2	,
    EDIT_USER	=	3	,
    VIEW_USER	=	4	,
    CHANGE_USER_PASSWORD	=	5	,
    CHANNGE_USER_TYPE	=	6	,
    DELETEUSER	=	7	,
    EMPLOYER_PERMISSIONS	=	8	,
    CREATE_EMPLOYERS	=	9	,
    EDIT_EMPLOYERS	=	10	,
    VIEW_EMPLOYERS	=	11	,
    UNIVERSITY_PERMISSIONS	=	12	,
    CREATE_UNIVERSITIES	=	13	,
    EDIT_UNIVERSITIES	=	14	,
    VIEW_UNIVERSITIES	=	15	,
    FELLOWSHIP_APPLICATION_PERMISSIONS	=	16	,
    EDIT_APPLICATIONS	=	17	,
    CHANGE_APPLICATION_STATUS	=	18	,
    UPLOAD_OFFICIAL_TRANSCRIPTS	=	19	,
    ACCOUNTING_PERMISSIONS	=	20	,
    CREATE_INVOICES	=	21	,
    EDIT_INVOICES	=	22	,
    RECEIVE_PAYMENTS	=	23	,
    MANAGE_ORDERS	=	24	,
    MEMBERSHIP_PERMISSIONS	=	25	,
    CREATE_MEMBERSHIPS	=	26	,
    EDIT_MEMBERSHIPS	=	27	,
    JUDGING_PERMISSIONS	=	28	,
    OVERRIDE_APPLICATION_SCORES	=	29	,
    MANAGE_JUDGING_TEAMS	=	30	,
    DISCUSSION_BOARD_PERMISSIONS	=	31	,
    CREATE_BOARD_FORUMS	=	32	,
    EDIT_BOARD_FORUMS	=	33	,
    MANAGE_BOARD_FORUMS	=	34	,
    EMAIL_BLAST_PERMISSIONS	=	35	,
    RUN_EMAIL_BLASTS	=	36	,
    MANAGE_EMAIL_BLASTS	=	37	,
    EVENT_PERMISSIONS	=	38	,
    CREATE_EVENTS	=	39	,
    EDIT_EVENTS	=	40	,
    MANAGE_EVENTS	=	41	,
    CAREER_CENTER_PERMISSIONS	=	42	,
    MANAGE_RESUME	=	43	,
    JOB_POSTING_ACCESS	=	44	,
    CAREER_CENTER_ACCESS	=	45	,
}

export enum OrganizationTypeEnum{
    ORGANZATIONTYPE_EMPLOYER = 18,
    ORGANZATIONTYPE_UNIVERSITY = 19
}
export enum OrganizationTypeNameEnum {
  ORGANZATIONTYPE_EMPLOYER = "Employer",
  ORGANZATIONTYPE_UNIVERSITY = "University"
}

export enum UserType {
  EMPLOYEE_REP = 23,
  UNIVERSITY_REP = 33,
  GEM_STAFF= 1
}

export enum RepresentativeContactType {
  NA = 1,
  PRIMARY = 2,
  SECONDARY = 3,
  EXECUTIVE = 4,
}


export enum GridActionsEnum{
    DELETE = "delete",
    VIEW = "view",
    UPDATE = "update",
    CHANGESTATUS = "changeStatus",
    MANAGEPERMISSION ="managepermission",
    RESETPASSWORD ="resetpassword",
    ACTIVEDEACTIVATE="activeDeactive"
}

export enum StatusEnum {
  ACTIVE = 20,
  DEACTIVE = 21,
  NONMEMBER = 22,
}
export enum ComponentsEnum {
  UserInformationComponent = "UserInformationComponent",
  ContactInformationComponent = "ContactInformationComponent",
  EductionalInformationComponent = "EductionalInformationComponent",
  GraduateInformataionComponent = "GraduateInformataionComponent",
  AcademicInterestsComponent = "AcademicInterestsComponent",
  AdministrativeAssistanceInformationComponent = "AdministrativeAssistanceInformationComponent",
  BasicInformationComponent = "BasicInformationComponent",
  EmployeeRepresentativeInformationComponent = "EmployeeRepresentativeInformationComponent",
  AdministrativeComponent = "AdministrativeComponent"
}

export enum DashboardEnum {
  DashboardPersonalInfo = "DashboardPersonalInfo",
  DashboardGraph = "DashboardGraph",
  DashboardApplicationStatus = "DashboardApplicationStatus",
  DashboardTaskList = "DashboardTaskList"   
}

export enum MetaDataEnum {
  ProgramType = 9,
  Terms = 10,
  
}

export enum ModeEnum{
  Edit = 1,
  View = 2,
  Submit = 3
}

export enum EvaluationTypeEnum{
  Supervisor = 35,
  Student = 34
}
export enum MajorEnum {
  All = 0,
  MS = 1,
  PHD=2
}

export enum Season{
  Winter = "Winter",//0
  Spring = "Spring",//1
  Summer = "Summer",//2
  Fall = "Fall"//3
}
export enum Degrees {
  "BSUndergraduate" = "B.S. - Undergraduate",
  "BSOrMS" = "B.S./M.S.",
  "MSGraduate" = "M.S. - Graduate",
  "MSPhDGraduate" = "M.S./Ph.D - Graduate",
  "PhD" = "Ph.D.",
  "NotCurrentlyMatriculating" ="Not Currently Matriculating"
  
}



export enum AttainedDegree{
  BS = "B.S.",
  BA = "B.A.",
  Others = "Others",
  MS = "M.S",
  PHD = "Ph.D"
}


export enum JobPostingStatus {
  NoAction = 0,
  Approved = 1,
  Rejected = 2,  
}

export enum SocialMedia {
  about = "http://www.gemfellowship.org/about-gem/overview/",
  fellowships = "http://www.gemfellowship.org/students/gem-fellowship-program/",
  events = "http://www.gemfellowship.org/events-calendar/",

  facebook = "https://www.facebook.com/gem.consortium?fref=ts",
  google = "https://plus.google.com/u/0/100196433273788963323/posts",
  twitter = "https://twitter.com/gemfellowship",
  linkedIn = "https://www.linkedin.com/company/the-national-gem-consortium",
  youtTube ="https://www.youtube.com/channel/UCsklM7CmIThdEwy-DCkjnUQ"


}

export enum Actions {
  NoAction = 124,
  Approved = 125,
  Rejected = 126,
}

export enum IsAvailableFor {
  Employer = 106,
  University = 107,
  Both = 108,
}

export enum FellowshipSteps {
  BasicInformation = 1,
  GemRequirement = 2,
  SecurityClearance = 3,
  EducationHistory = 4,
  EmploymentHistory = 5,
  ResearchHistory = 6,
  ChoicePrograms = 7,
  InternshipInfo = 8,
  GREInformaiton = 9,
  Transcript = 10,
  ReviewConfirmationPartOne = 11,
  StatementOfPurpose=12,
  Recommendation = 13,
  ReviewConfirmation = 14,
  ReviewAndSubmit=15
}
export enum ManagementEnum {
    UserManagement = "USERMANAGEMENET",
    organizationManagement = "ORGANIZATIONMANAGEMENT",

}

export enum PaymentClassType{
  ORGAN = 119,
  ELECT = 120,
  CHECK = 121
}

export enum PaymentType{
  Cash = 122,
  CreditCard = 123
}
export enum FellowshipRoute {
  BasicInformation = "fellowshipbasicinformation",
  GemRequirement = "fellowshipgemrequirements",
  SecurityClearance = "securityclearance",
  EducationHistory = "educationhistory",
  EmploymentHistory = "employmenthistory",
  ResearchHistory = "researchhistory",
  ChoicePrograms = "choiceprograms",
  InternshipInfo = "internshipinfo",
  GREInformaiton = "greinformation",
  Transcript = "transcript",
  StatementOfPurpose = "statementofpurpose",
  Recommendation = "recommendation",
  ReviewConfirmation = "reviewconfirmation",
  ReviewAndSubmit = "reviewandsubmit",
  Partonesaved ="partonesaved"

}
