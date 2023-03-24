import { Component } from '@angular/core';
import { Alumno } from 'src/app/models';

@Component({
  selector: 'app-lista-vitulano',
  templateUrl: './lista-vitulano.component.html',
  styleUrls: ['./lista-vitulano.component.css']
})
export class ListaVitulanoComponent {
   public alumnos: Alumno[] = [
     new Alumno(1, 'Naruto', 'Uzumaki', 'naruto@mail.com',new Date('1994-01-03'),'Angular',8, true),
    new Alumno(3, 'Sasuke', 'Uchiha', 'sasuke@mail.com',new Date('1992-05-14'),'Angular',4,false),
     new Alumno(4, 'Kakashi', 'Hatake', 'kakashi@mail.com',new Date('1980-02-24'),'Angular',6,true),
     new Alumno(5, 'Sakura', 'Haruno', 'sakura@mail.com',new Date('1995-08-12'),'Angular',7,true),
    new Alumno(6, 'Itachi', 'Uchiha', 'itachi@mail.com',new Date('2002-07-24'),'Angular',2,false),
   ]
};
