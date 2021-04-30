import { Component, OnInit } from '@angular/core';
import { Arme } from 'src/app/core/models/arme';
import { ArmeService } from 'src/app/shared/services/arme.service';

@Component({
  selector: 'app-list-armes',
  templateUrl: './list-armes.component.html',
  styleUrls: ['./list-armes.component.css']
})
export class ListArmesComponent implements OnInit {
  armes: Arme[] = [];

  constructor(private armeService: ArmeService) { }

  ngOnInit(): void {
    const observable = this.armeService.getAll();
    observable.subscribe(armes => {
      this.armes = armes;
    });
  }

}
