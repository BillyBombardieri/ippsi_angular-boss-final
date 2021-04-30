import { Component, OnInit } from '@angular/core';
import { Arme } from './core/models/arme';
import { Player } from './core/models/player';
import { ArmeService } from './shared/services/arme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title1 = 'Mon jeu Star wars';
  actionBoutonLibelle = 'Cacher';
  afficherImage = true;



  armesSecondaires: Arme[] = [];

  constructor(private armeService: ArmeService) {
  }

  ngOnInit(): void {
    // this.armesSecondaires.push(
    //   { id: 1, libelle: 'Arbalette', option: '' },
    //   { id: 2, libelle: 'Sabre laser' }
    // );

    const observable = this.armeService.getAll();
    observable.subscribe(armes => {
      this.armesSecondaires = armes;
    });
  }

  afficherCacherImage() {
    //this.afficherImage = false;

    // if (this.afficherImage == true) {
    //   this.afficherImage = false;
    // } else {
    //   this.afficherImage = true;
    // }

    // if (this.afficherImage) {
    //   this.afficherImage = false;
    // } else {
    //   this.afficherImage = true;
    // }

    this.afficherImage = ! this.afficherImage;

    //if (this.afficherImage == true) {
    // if (this.afficherImage) {
    //   this.actionBoutonLibelle = 'Cacher';
    // } else {
    //   this.actionBoutonLibelle = 'Afficher';
    // }

    this.actionBoutonLibelle = 'Afficher';
    if (this.afficherImage) {
      this.actionBoutonLibelle = 'Cacher';
    }

    this.actionBoutonLibelle = this.afficherImage ? 'Cacher' : 'Afficher';
  }

  leLogoAEteActive(valeur: number) {
    console.info('ici, ', valeur);
  }

  recupererPlayer(player: Player) {
    console.info(player);
    // c'est ici qu'on va appeler le service playerService
    // this.playerService.saveOne(player);
  }
}
