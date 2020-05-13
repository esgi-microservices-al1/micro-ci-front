import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable()
export class ProjectService {
    constructor(private httpService: HttpClient) {}

    get(): Observable<Project[]> {
        return new Observable<Project[]>(subscriber => {
            subscriber.next(Array.from<number, Project>([1, 2, 3], (x: number) => ({id: x, name: `Project n°${x}`} as Project)));
            subscriber.complete();
        });
    }
}
