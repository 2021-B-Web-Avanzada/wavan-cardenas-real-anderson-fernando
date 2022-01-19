import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input('nombre') nombre = "Nombre Curso";
  @Input('srcimg') srcimg = "/assets/img/curso1.PNG";
  @Input('instructores') instructores = "Instructor 1, Instructor 2";
  @Input('calificación') calificacion = 4.5;
  public precio: number = 9.99;

  constructor() { }

  ngOnInit(): void {
  }

}
