import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/core/models/character';
import { Player } from 'src/app/core/models/player';


@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {
  jedi: Character = new Character();
  droide: Character = new Character();
  player: Player = new Player();


  characters: Character[] = [
  ]
  @Output() selectedCharacter: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  
  ngOnInit(): void {
    this.jedi.id = 1;
    this.jedi.name = "jedi";
    this.droide.id = 2;
    this.droide.name = "droide";

    
    

    this.characters.push(this.jedi, this.droide);
    // console.info(this.jedi, this.droide);
    // console.info(this.characters);
  }
  
  onChange(value): void {
    console.info(value);
    this.player.selectedCharacter = value;
  }
  


  demarrerPartie()
  {
    console.info(this.player.selectedCharacter);
    // console.info(this.player.selectedCharacter);
  }

}
