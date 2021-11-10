export class Project {

    constructor(
      public _id: number,
      public pname: string,
      public powner: string,
      public ptype: string,
      public startDate: Date,
      public checkpoints: Array<Date>,
      public description: string,
      public completed: string,
      public url: string
    ) {  }
  
  }