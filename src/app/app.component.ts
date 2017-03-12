import { Component } from '@angular/core';
import {CartoonCharacter} from './cartoon-character';
import {DUMMY_DATA} from './data/dummy-data'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  characters = DUMMY_DATA; 
  // character: CartoonCharacter = {
  //   PersonId: 1,
  //   FirstName: "Fred",
  //   LastName: "Flintstone",
  //   Occupation: "Mining Manager",
  //   Gender: "M",
  //   Picture:  "http://flintstones.zift.ca/images/flintstone/fred.png",
  // };
  selected: CartoonCharacter;
  onSelect(character: CartoonCharacter): void {
    this.selected= character;
}
}