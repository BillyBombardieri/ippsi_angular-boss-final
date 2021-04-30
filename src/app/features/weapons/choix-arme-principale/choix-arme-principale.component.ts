import { Component, OnInit } from '@angular/core';
import { ArmeService } from 'src/app/shared/services/arme.service';

@Component({
  selector: 'app-choix-arme-principale',
  templateUrl: './choix-arme-principale.component.html',
  styleUrls: ['./choix-arme-principale.component.css']
})
export class ChoixArmePrincipaleComponent implements OnInit {
  private _armeService: ArmeService;

  armes: string[] = [
    'Arbalette',
    'Sabre laser',
    'Pistolaser',
    'Grenade',
    'Baton',
    'Canon blaster'
  ];

  constructor(armeService: ArmeService) {
    this._armeService = armeService;
  }

  ngOnInit(): void {
    const uneObservable = this._armeService.getAll();
    uneObservable.subscribe(lesArmes => console.info(lesArmes));
  }

}
