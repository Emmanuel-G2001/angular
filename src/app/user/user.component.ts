import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
     alerta(){
      alert('Hola')
     }
  

  users =[
    {
      id:1,
      name:'Emmanuel',
      puesto:'Co-Founder / CEO',
      estado: false

    },
    {
      id:2,
      name:'Jeisson',
      puesto: 'Co-Founder / CEO',
      estado: true
    }

  ]
}
