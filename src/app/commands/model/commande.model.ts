
export interface Project {
    project_id:number;
    projectName?:string;
    projectPath?:string;
    created_time?:string;
}

export interface Status{
    status:boolean;
    error:string;
}

export interface Command{
    id?:number;
    command:string;
    stdout:boolean;
    created_time?:string;
}

export interface Commands{
    process_id?:number;
    commands:Array<Command>;
    project:Project;
}

/*class CommandsClass {
    private commands:Commands;
    constructor(Command, project) {
        commands = 
    }

}*/

/*class CommandsClass{
    cmds:cmds:Dictionary.<Array<Command>, number>;
    addCommands(commands:Array<Command>){
        for(i = 0; i< commands.lenght(); i++){
            cmds[i] = commands[i]
        }
    }
}*/


