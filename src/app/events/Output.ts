export class Output{
  _stdout : string | null;
  _stderr : string | null;
  _status : string;


  constructor(stdout: string, stderr: string, status: string) {
    this._stdout = stdout;
    this._stderr = stderr;
    this._status = status;
  }


  get stdout(): string {
    return this._stdout;
  }

  set stdout(value: string) {
    this._stdout = value;
  }

  get stderr(): string {
    return this._stderr;
  }

  set stderr(value: string) {
    this._stderr = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }
}
