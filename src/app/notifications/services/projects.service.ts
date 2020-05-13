import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { Project } from '../models/project.model';
import { UserNotification } from '../models/userNotification.model';

const userSamples: UserNotification[] = [
    {id: 1, name: 'User n°1', username: 'Patrick-J-1', email: 'patrick.user1@myges.fr'},
    {id: 2, name: 'User n°2', username: 'Patrick-J-2', email: 'patrick.user2@myges.fr'},
    {id: 3, name: 'User n°3', username: 'Patrick-J-3', email: 'patrick.user3@myges.fr'},
    {id: 4, name: 'User n°4', username: 'Patrick-J-4', email: 'patrick.user4@myges.fr'},
    {id: 5, name: 'User n°5', username: 'Patrick-J-5', email: 'patrick.user5@myges.fr'},
    {id: 6, name: 'User n°6', username: 'Patrick-J-6', email: 'patrick.user6@myges.fr'},
    {id: 7, name: 'User n°7', username: 'Patrick-J-7', email: 'patrick.user7@myges.fr'},
    {id: 8, name: 'User n°8', username: 'Patrick-J-8', email: 'patrick.user8@myges.fr'},
    {id: 9, name: 'User n°9', username: 'Patrick-J-9', email: 'patrick.user9@myges.fr'},
    {id: 10, name: 'User n°10', username: 'Patrick-J-10', email: 'patrick.user10@myges.fr'},
    {id: 11, name: 'User n°11', username: 'Patrick-J-11', email: 'patrick.user11@myges.fr'},
    {id: 12, name: 'User n°12', username: 'Patrick-J-12', email: 'patrick.user12@myges.fr'},
    {id: 13, name: 'User n°13', username: 'Patrick-J-13', email: 'patrick.user13@myges.fr'},
    {id: 14, name: 'User n°14', username: 'Patrick-J-14', email: 'patrick.user14@myges.fr'},
    {id: 15, name: 'User n°15', username: 'Patrick-J-15', email: 'patrick.user15@myges.fr'},
    {id: 16, name: 'User n°16', username: 'Patrick-J-16', email: 'patrick.user16@myges.fr'},
    {id: 17, name: 'User n°17', username: 'Patrick-J-17', email: 'patrick.user17@myges.fr'},
    {id: 18, name: 'User n°18', username: 'Patrick-J-18', email: 'patrick.user18@myges.fr'},
    {id: 19, name: 'User n°19', username: 'Patrick-J-19', email: 'patrick.user19@myges.fr'}
];

const projectSamples: Project[] = [
    {id: 1, name: 'Project n°1', notifiedUsers: userSamples.slice(1)},
    {id: 2, name: 'Project n°2', notifiedUsers: userSamples.slice(2)},
    {id: 3, name: 'Project n°3', notifiedUsers: userSamples.slice(3)},
    {id: 4, name: 'Project n°4', notifiedUsers: userSamples.slice(4)},
    {id: 5, name: 'Project n°5', notifiedUsers: userSamples.slice(5)},
    {id: 6, name: 'Project n°6', notifiedUsers: userSamples.slice(6)},
    {id: 7, name: 'Project n°7', notifiedUsers: userSamples.slice(7)},
    {id: 8, name: 'Project n°8', notifiedUsers: userSamples.slice(8)},
    {id: 9, name: 'Project n°9', notifiedUsers: userSamples.slice(9)},
    {id: 10, name: 'Project n°10', notifiedUsers: userSamples.slice(10)},
    {id: 11, name: 'Project n°11', notifiedUsers: userSamples.slice(11)},
    {id: 12, name: 'Project n°12', notifiedUsers: userSamples.slice(12)},
    {id: 13, name: 'Project n°13', notifiedUsers: userSamples.slice(13)},
    {id: 14, name: 'Project n°14', notifiedUsers: userSamples.slice(14)},
    {id: 15, name: 'Project n°15', notifiedUsers: userSamples.slice(15)}
];

@Injectable()
export class ProjectService {
    constructor(private httpService: HttpClient) {}

    get(): Observable<Project[]> {
        return new Observable<Project[]>(subscriber => {
            subscriber.next(projectSamples);
            subscriber.complete();
        });
    }

    getAllUsers(): Observable<UserNotification[]> {
        return new Observable<UserNotification[]>(subscriber => subscriber.next(userSamples));
    }

    update(project: Project): Observable<number> {
        return new Observable<number>(subscriber => {
            projectSamples.slice(projectSamples.findIndex(p => p.id === project.id), 1);
            projectSamples.push(project);
            subscriber.next(1);
            subscriber.complete();
        });
    }
}
