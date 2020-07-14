
export interface Project {
    project_id: number;
    projectName?: string;
    projectPath?: string;
    created_time?: string;
}

export interface Command {
    id?: number;
    command: string;
    stdout: boolean;
    created_time?: string;
}

export interface Commands {
    process_id?: number;
    commands: Array<Command>;
    project: Project;
}


