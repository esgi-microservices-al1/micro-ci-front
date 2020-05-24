import {Output} from "./Output";

export class Process {
  _id : number;
  _command : string;
  _output : Output;
  _status : string;


  constructor(id: number, command: string, output: Output, status: string) {
    this._id = id;
    this._command = command;
    this._output = output;
    this._status = status;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get command(): string {
    return this._command;
  }

  set command(value: string) {
    this._command = value;
  }

  get output(): Output {
    return this._output;
  }

  set output(value: Output) {
    this._output = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }
}
