import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { Project } from '../models/project.model';
import { UserNotification } from '../models/userNotification.model';

const projectSamples: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const userSamples: UserNotification[] = [
    {id: 1, name: "User n°1", username: "Patrick-J-1", email: "patrick.user1@myges.fr"},
    {id: 2, name: "User n°2", username: "Patrick-J-2", email: "patrick.user2@myges.fr"},
    {id: 3, name: "User n°3", username: "Patrick-J-3", email: "patrick.user3@myges.fr"},
    {id: 4, name: "User n°4", username: "Patrick-J-4", email: "patrick.user4@myges.fr"},
    {id: 5, name: "User n°5", username: "Patrick-J-5", email: "patrick.user5@myges.fr"},
    {id: 6, name: "User n°6", username: "Patrick-J-6", email: "patrick.user6@myges.fr"},
    {id: 7, name: "User n°7", username: "Patrick-J-7", email: "patrick.user7@myges.fr"},
    {id: 8, name: "User n°8", username: "Patrick-J-8", email: "patrick.user8@myges.fr"},
    {id: 9, name: "User n°9", username: "Patrick-J-9", email: "patrick.user9@myges.fr"},
    {id: 10, name: "User n°10", username: "Patrick-J-10", email: "patrick.user10@myges.fr"},
    {id: 11, name: "User n°11", username: "Patrick-J-11", email: "patrick.user11@myges.fr"},
    {id: 12, name: "User n°12", username: "Patrick-J-12", email: "patrick.user12@myges.fr"},
    {id: 13, name: "User n°13", username: "Patrick-J-13", email: "patrick.user13@myges.fr"},
    {id: 14, name: "User n°14", username: "Patrick-J-14", email: "patrick.user14@myges.fr"},
    {id: 15, name: "User n°15", username: "Patrick-J-15", email: "patrick.user15@myges.fr"},
    {id: 16, name: "User n°16", username: "Patrick-J-16", email: "patrick.user16@myges.fr"},
    {id: 17, name: "User n°17", username: "Patrick-J-17", email: "patrick.user17@myges.fr"},
    {id: 18, name: "User n°18", username: "Patrick-J-18", email: "patrick.user18@myges.fr"},
    {id: 19, name: "User n°19", username: "Patrick-J-19", email: "patrick.user19@myges.fr"}
]

@Injectable()
export class ProjectService {
    constructor(private httpService: HttpClient) {}

    get(): Observable<Project[]> {
        return new Observable<Project[]>(subscriber => {
            subscriber.next(
                Array.from<number, Project>(projectSamples, (x: number) =>
                    ({
                        id: x, 
                        name: `Project n°${x}`,
                        notifiedUsers: userSamples.slice(x)
                    } as Project)
                )
            );
            subscriber.complete();
        });
    }

    getAllUsers(): Observable<UserNotification[]> {
        return new Observable<UserNotification[]>(subscriber => subscriber.next(userSamples));
    }
}
