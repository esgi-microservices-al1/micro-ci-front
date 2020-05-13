import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

const sample: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

@Injectable()
export class ProjectService {
    constructor(private httpService: HttpClient) {}

    get(): Observable<Project[]> {
        return new Observable<Project[]>(subscriber => {
            subscriber.next(Array.from<number, Project>(sample, (x: number) => ({id: x, name: `Project n°${x}`} as Project)));
            subscriber.complete();
        });
    }
}
