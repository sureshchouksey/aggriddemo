export class Constants {

  public static get userType(): number { return 2; };
  //GEM Employee Representative
  public static get EmployeeRepresentative(): string { return 'GEM Employee Representative'; };
  //GEM University Representative
  public static get universityRepresentative(): string { return 'GEM University Representative'; };
  // user types JSON file path
  public static get userTypeJsonPath(): string { return '.../../assets/userData/usertype.json'; };
  //en JSON file path
  public static get enJsonPath(): string { return '../../../assets/locale/en.json'; };

  //userplaceholder image path
  public static get defaultImage(): string { return '../../../../assets/images/user/userplaceholder.PNG'; };
  
  //en organization file path
  public static get organizationPath(): string { return '.../../assets/userData/organization.json'; };

  public static get userTypeDashboardJsonPath(): string { return '.../../assets/userData/userTypeDashboard.json'; };

//get  fellowshipSteps
  public static get fellowshipSteps(): string { return '.../../assets/userData/fellowship-steps.json'; };
  //GEM Registered
  public static get gemRegistered(): string { return 'GEM Registered'; };
  //GEM Registered ID
  public static get gemRegisteredId(): number { return 11; };

  public static get EmployeeRepresentativeId(): number { return 23; };
  //GEM University Representative
  public static get universityRepresentativeId(): number { return 33; };

  public static get getMaxFileSize(): number { return 1048576; };

  public static get expires_in(): number { return 3600; };

  public static get GeneralComponent(): string { return 'GeneralComponent'; };
  public static get OtherEGEMActivities(): string { return 'OtherEGEMActivities'; };
  public static get CareerCenter(): string { return 'CareerCenter'; };
  public static get Recommendations(): string { return 'Recommendations'; };
  public static get FellowshipApplicationStatus(): string { return 'FellowshipApplicationStatus'; };
  public static get GraduateSchools(): string { return 'GraduateSchools'; };
  public static get GREInformation(): string { return 'GREInformation'; };
  public static get OtherInformation(): string { return 'OtherInformation'; };


  //en Degree file path
  public static get getDegree(): string { return '.../../assets/userData/degree.json'; };
  //en programs file path
  public static get getPrograms(): string { return '.../../assets/userData/programs.json'; };

  //GEM REP
  public static get gemRep(): string { return 'Gem Rep'; };
  public static get Other(): string { return 'Other'; };
  
  //getStep12
  public static get getStep12(): string { return '12'; };
  //getOther
  public static get getOther(): string { return 'Other'; };

  public static get ScoreStatusNotSubmitted(): string {return 'Not Submitted'};

  public static get getScoreCardDetails(): string { return '.../../assets/userData/scorecard.json'; };

  //getStep1
  public static get getStepFirst(): string { return '1'; };
   //for yes no values
  public static get getOneValue(): number { return 1; };
  //for yes no values
  public static get getZeroValue(): number { return 0; };

  //GEM Staff
  public static get getGemStaffType(): number { return 1; };

  //Active reacord id in Organization
  public static get getActive(): number { return 20; };

  public static get calledFromViewApplication() : string {return "viewfellowshipapplication";}

  public static get getEmailPattern() : string {return "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";}

  public static get getDateFormat() : string {return "MM/dd/yyyy";}
}
