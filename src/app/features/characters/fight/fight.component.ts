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
  winner: string;


  characters: Character[] = [
  ]
  @Output() selectedCharacter: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  
  ngOnInit(): void {
    this.jedi.id = 1;
    this.jedi.name = "jedi";
    this.droide.id = 2;
    this.droide.name = "droide";
    this.player.cagnotte = 100;

    this.characters.push(this.jedi, this.droide);
    // console.info(this.jedi, this.droide);
    // console.info(this.characters);
  }
  
  // onChange(value): void {
  //   // console.info(value);
  //   this.player.selectedCharacter = value;
  // }

  demarrerPartie()
  {
    console.info(this.player.selectedCharacter);
    this.fight();
    // console.info(this.player.selectedCharacter);
  }

  fight() {
    
    let random = Math.random();
    this.player.mise = 10 ;
    //this.player.selectedCharacter.strength = random;
    //this.droide.strength = Math.floor(Math.random() * 10 + 1);
    // console.info("Jedi strength: ", this.player.selectedCharacter.strength);
    // console.info("Droide strength: ", this.droide.strength);

    if (random > 0.5) {
      console.info("Le personnage de type " + this.player.selectedCharacter, " du joueur a gagné");
      console.info(this.player.cagnotte);
      this.player.cagnotte += (this.player.mise + 15);
      console.info(this.player.cagnotte);
      this.winner = "player";
    }
    else {
      console.info("Le personnage de type " + this.player.selectedCharacter, " du joueur a perdu");
      this.player.cagnotte = this.player.cagnotte - this.player.mise ; 
      this.winner = "ia";
    }
  }

  stopPartie() {
    console.info("Partie stoppée");
    this.player = new Player();
  }

}
