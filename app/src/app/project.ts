export class Project {

    constructor(
      public id: number,
      public name: string,
      public owner: string,
      public type: string,
      public startDate: Date,
      public description: string
    ) {  }
  
  }