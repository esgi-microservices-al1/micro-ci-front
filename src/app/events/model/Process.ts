import {Output} from './Output';

export class Process {
  id: number;
  command: string;
  output: Output;
  status: string;


  constructor(id: number, command: string, output: Output, status: string) {
    this.id = id;
    this.command = command;
    this.output = output;
    this.status = status;
  }
}
