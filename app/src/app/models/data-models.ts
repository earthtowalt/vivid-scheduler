// TODO fix this
export class MyProject {
  constructor(
    public _id: number,
    public pname: string,
    public powner: string,
    public ptype: string,
    public pstartDate: Date,
    public checkPoints: Array<Checkpoint>,
    public pdescription: string
  ) {  }
}

export class Project {

  constructor(
    public _id: number,
    public pname: string,
    public powner: string,
    public ptype: string,
    public pstartDate: Date,
    public checkPoints: Array<Checkpoint>,
    public pdescription: string
  ) {  }

}

export class Checkpoint {

  constructor (
    public pname: string,
    public cname: string,
    public cdate: Date
  ) { }
}
