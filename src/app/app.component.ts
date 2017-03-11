import { Component } from '@angular/core';
import {CartoonCharacter} from './cartoon-character';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  character: CartoonCharacter = {
    PersonId: 1,
    FirstName: "Fred",
    LastName: "Flintstone",
    Occupation: "Mining Manager",
    Gender: "M",
    Picture:  "http://flintstones.zift.ca/images/flintstone/fred.png",
  };
}