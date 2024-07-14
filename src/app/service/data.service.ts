import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PostsArray} from "../../models/posts.interface";
import {UsersArray} from "../../models/users.interface";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UsersArray> {
    return this.http.get<UsersArray>(this.usersUrl);
  }

  getPosts(): Observable<PostsArray> {
    return this.http.get<PostsArray>(this.postsUrl);
  }
  getUserPosts(userId: number): Observable<PostsArray> {
    const url = `${this.postsUrl}?userId=${userId}`;
    return this.http.get<PostsArray>(url);
  }
}
