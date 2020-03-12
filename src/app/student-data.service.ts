import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  private mockUrl="http://localhost:3000/students";
  constructor(private http:HttpClient) { }

  getStudentData(): Observable<Student[]> {
    return this.http.get<Student[]>(this.mockUrl);
  }
}
