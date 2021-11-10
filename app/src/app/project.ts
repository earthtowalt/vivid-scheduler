export class Project {

    constructor(
      public _id: number,
      public title: string,
      public owner: string,
      public type: string,
      public startDate: Date,
      public checkPoints: Array<Date>,
      public description: string,
      public completed: string,
      public url: string
    ) {  }
  
  }