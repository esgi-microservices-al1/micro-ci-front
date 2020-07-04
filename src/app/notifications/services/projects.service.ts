import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscriber} from 'rxjs';
import {Project} from '../models/project.model';
import {UserNotification} from '../models/userNotification.model';
import { environment } from 'src/environments/environment';

const userSamples: UserNotification[] = [
  {id: 1, emailAddress: 'patrick.user1@myges.fr'},
  {id: 2, emailAddress: 'patrick.user2@myges.fr'},
  {id: 3, emailAddress: 'patrick.user3@myges.fr'},
  {id: 4, emailAddress: 'patrick.user4@myges.fr'},
  {id: 5, emailAddress: 'patrick.user5@myges.fr'},
  {id: 6, emailAddress: 'patrick.user6@myges.fr'},
  {id: 7, emailAddress: 'patrick.user7@myges.fr'},
  {id: 8, emailAddress: 'patrick.user8@myges.fr'},
  {id: 9, emailAddress: 'patrick.user9@myges.fr'},
  {id: 10, emailAddress: 'patrick.user10@myges.fr'},
  {id: 11, emailAddress: 'patrick.user11@myges.fr'},
  {id: 12, emailAddress: 'patrick.user12@myges.fr'},
  {id: 13, emailAddress: 'patrick.user13@myges.fr'},
  {id: 14, emailAddress: 'patrick.user14@myges.fr'},
  {id: 15, emailAddress: 'patrick.user15@myges.fr'},
  {id: 16, emailAddress: 'patrick.user16@myges.fr'},
  {id: 17, emailAddress: 'patrick.user17@myges.fr'},
  {id: 18, emailAddress: 'patrick.user18@myges.fr'},
  {id: 19, emailAddress: 'patrick.user19@myges.fr'}
];

const projectSamples: Project[] = [
  {id: "1", name: 'Project n°1', notifiedUsers: userSamples.slice(1)},
  {id: "2", name: 'Project n°2', notifiedUsers: userSamples.slice(2)},
  {id: "3", name: 'Project n°3', notifiedUsers: userSamples.slice(3)},
  {id: "4", name: 'Project n°4', notifiedUsers: userSamples.slice(4)},
  {id: "5", name: 'Project n°5', notifiedUsers: userSamples.slice(5)},
  {id: "6", name: 'Project n°6', notifiedUsers: userSamples.slice(6)},
  {id: "7", name: 'Project n°7', notifiedUsers: userSamples.slice(7)},
  {id: "8", name: 'Project n°8', notifiedUsers: userSamples.slice(8)},
  {id: "9", name: 'Project n°9', notifiedUsers: userSamples.slice(9)},
  {id: "10", name: 'Project n°10', notifiedUsers: userSamples.slice(10)},
  {id: "11", name: 'Project n°11', notifiedUsers: userSamples.slice(11)},
  {id: "12", name: 'Project n°12', notifiedUsers: userSamples.slice(12)},
  {id: "13", name: 'Project n°13', notifiedUsers: userSamples.slice(13)},
  {id: "14", name: 'Project n°14', notifiedUsers: userSamples.slice(14)},
  {id: "15", name: 'Project n°15', notifiedUsers: userSamples.slice(15)}
];

@Injectable()
export class ProjectService {
  apiUrl: string;
  constructor(private httpService: HttpClient) {
    this.apiUrl = environment.NOTIFICATION_SERVICE_URL;
  }

  get(): Observable<Project[]> {
    return this.httpService.get<Project[]>(this.apiUrl);
  }

  getAllUsers(): Observable<UserNotification[]> {
    return this.httpService.get<UserNotification[]>(`${this.apiUrl}/users`);
  }

  update(project: Project): Observable<Project> {
    return this.httpService.post<Project>(this.apiUrl, project);
  }
}
