import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Comment {
  postId: number;
  id: number; // Comment Id
  name: string;
  email: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getAllComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }

  getComments(postId: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
  }
}
