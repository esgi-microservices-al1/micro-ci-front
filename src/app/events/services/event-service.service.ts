import { Injectable } from '@angular/core';
import {Process} from "../Process";
import {Output} from "../Output";


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAllBuils(){
    return [
      new Process(3315, "test cmd1", new Output("test", null, "Ok"), "success"),
      new Process(3316, "test cmd2", new Output("test2", null, "Ok"), "success"),
      new Process(3317, "test cmd3", new Output(null, "test3", "error"), "failed"),
      new Process(3318, "test cmd4", new Output(null, "test4", "error"), "failed"),
    ];
  }

}
