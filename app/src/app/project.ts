export class Project {

    constructor(
<<<<<<< HEAD
      public _id: number,
      public pname: string,
      public powner: string,
      public ptype: string,
      public pstartDate: Date,
=======
      public id: number,
      public title: string,
      public owner: string,
      public type: string,
      public startDate: Date,
>>>>>>> main
      public checkPoints: Array<Date>,
      public pdescription: string
    ) {  }
  
  }