export interface Project {
    _id: string;
    label: string;
    git_url: string;
    access_token: string;
    git_host: string;
    enable: boolean;
    branches: [string];
}
