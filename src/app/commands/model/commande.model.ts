
export interface Project {
    id:number;
    name:string;
    path:string
    datecreated?:string;
}

export interface Status{
    status:boolean;
    error:string;
}

export interface Command{
    cmdid?:number;
    command:string;
    affichable:boolean;
    datecreated?:string;
    projectid:number;
}