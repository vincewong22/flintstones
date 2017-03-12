import { Component, OnInit } from '@angular/core';
import {CartoonCharacter} from './cartoon-character';
import {CartoonCharacterService} from './cartoon-character.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CartoonCharacterService]
})
export class AppComponent implements OnInit {
  selected: CartoonCharacter;
  characters: CartoonCharacter[];
  constructor(private cartoonService: CartoonCharacterService) { }
  onSelect(character: CartoonCharacter): void {
    this.selected = character;
  }
 getCartoonCharacters(): void {
this.cartoonService.getCartoonCharacters()
  .then(characters => this.characters = characters);
}
  ngOnInit(): void {
    this.getCartoonCharacters();
  }
}