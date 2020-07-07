
export interface Project {
  id?: string;
  name: string;
  branches: string[];
}

export class ProjectModelDto {

  constructor(projectName, branches) {
    this.name = projectName;
    this.branches = branches ;
  }
  name: string;
  branches: string[];

  toString() {
    return JSON.stringify(this) ;
  }


}
