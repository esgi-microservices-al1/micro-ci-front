export interface Project {
    _id: string;
    label: string;
    git_url: string;
    access_token: String;
    git_host: string;
    enable: boolean;
    branches: [string];
}
