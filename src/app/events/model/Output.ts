export class Output {
  stdout: string | null;
  stderr: string | null;
  status: string;


  constructor(stdout: string, stderr: string, status: string) {
    this.stdout = stdout;
    this.stderr = stderr;
    this.status = status;
  }
}
