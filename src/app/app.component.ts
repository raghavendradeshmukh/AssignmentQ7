import { Component,ViewChild, OnInit } from '@angular/core';
import {MatTableDataSource,MatSort,MatPaginator} from '@angular/material';
import { StudentDataService } from './student-data.service';
import { Student } from './student.model';
export interface PeriodicElement {
  firstName: string;
  LastName: string;
  Class: string;
  RollNo: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {RollNo: 1, firstName: 'Raghavendra', LastName:'Deshmukh', Class: 'First'},
  {RollNo: 2,firstName: 'Sarang', LastName:'Dahiwale', Class: 'Second'},
  {RollNo: 3, firstName: 'Pratik', LastName:'Bilonikar', Class: 'Third'},
  {RollNo: 4,firstName: 'Madhuri', LastName:'Chaudhay', Class: 'Second'},
  {RollNo: 5, firstName: 'Piyush', LastName:'Dawkar', Class: 'Fourth'},
  {RollNo: 6,firstName: 'Vishal', LastName:'Jadhav', Class: 'Sixth'},
  {RollNo: 7, firstName: 'Rahul', LastName:'Jaiswal', Class: 'Seven'},
  {RollNo: 8, firstName: 'Sayeesh', LastName:'kanala', Class: 'Eight'},
  {RollNo: 9, firstName: 'Sanket', LastName:'Kangle', Class: 'Ninth'},
  {RollNo: 10, firstName: 'Rohit', LastName:'Joshi', Class: 'Fifth'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Assignment-Q5';
  studentList:Student[]=[];

  @ViewChild(MatSort,{static:true}) sort:MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator:MatPaginator;

  displayedColumns: string[] = ['RollNo','firstName', 'LastName', 'Class'];

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  ngOnInit(){

    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }

  applyFilter(filter:string)
  {
    this.dataSource.filter=filter.trim().toLowerCase();
  }

}
