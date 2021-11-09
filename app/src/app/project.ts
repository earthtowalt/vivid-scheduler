export class Project {

    constructor(
      public _id: number,
      public pname: string,
      public powner: string,
      public ptype: string,
      public pstartDate: Date,
      public checkPoints: Array<Date>,
      public pdescription: string
    ) {  }
  
  }