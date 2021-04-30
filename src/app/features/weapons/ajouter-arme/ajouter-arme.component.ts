import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Arme } from 'src/app/core/models/arme';
import { ArmeService } from 'src/app/shared/services/arme.service';

@Component({
  selector: 'app-ajouter-arme',
  templateUrl: './ajouter-arme.component.html',
  styleUrls: ['./ajouter-arme.component.css']
})
export class AjouterArmeComponent implements OnInit {
  arme: Arme = new Arme();

  constructor(private armeService: ArmeService,
              private router: Router) { }

  ngOnInit(): void {
  }

  clickAjouter() {
    const observable = this.armeService.saveOne(this.arme);
    observable.subscribe();// (monArmeAjoutee => console.info(monArmeAjoutee));
    this.arme = new Arme();

    this.router.navigate(['/les-armes']);
  }

}
