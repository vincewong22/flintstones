import { Component, OnInit } from '@angular/core';
import {CartoonCharacter} from '.././cartoon-character';
import {CartoonCharacterService} from '.././cartoon-character.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './cartoon-character.component.html',
  styleUrls: ['./cartoon-character.component.css']
  
})
export class CartoonCharacterComponent implements OnInit {
  selected: CartoonCharacter;
  characters: CartoonCharacter[];
  constructor(private cartoonService: CartoonCharacterService,
  private router: Router
  ) { 
    
  }
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

  gotoDetail(): void {
  this.router.navigate(['/detail', this.selected.PersonId]);
}
newCharacter: CartoonCharacter = new CartoonCharacter();
add(newCartoonCharacter: CartoonCharacter): void {
  newCartoonCharacter.FirstName = newCartoonCharacter.FirstName.trim();
  newCartoonCharacter.LastName = newCartoonCharacter.LastName.trim();
  newCartoonCharacter.Occupation = newCartoonCharacter.Occupation.trim();
  newCartoonCharacter.Gender = newCartoonCharacter.Gender.trim();
  newCartoonCharacter.Picture = newCartoonCharacter.Picture.trim();
  
  if (!newCartoonCharacter) { return; }
  this.cartoonService.create(newCartoonCharacter)
    .then(newCartoonCharacter => {
      this.selected = null;
      this.router.navigate(['./dashboard']);
    });
}
delete(delCharacter: CartoonCharacter): void {
  this.cartoonService
      .delete(delCharacter.PersonId)
      .then(() => {
        this.characters = this.characters.filter(c => c !== delCharacter);
        if (this.selected === delCharacter) { this.selected = null; }
      });
}
}