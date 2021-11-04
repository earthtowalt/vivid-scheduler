export class Project {

    constructor(
      public id: number,
      public title: string,
      public owner: string,
      public type: string,
      public startDate: Date,
      public checkPoints: Array<Date>,
      public description: string
    ) {  }
  
  }