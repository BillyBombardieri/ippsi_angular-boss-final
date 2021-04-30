import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  @Input() titre: string;
  @Output() logoActive: EventEmitter<number> = new EventEmitter<number>(false);

  constructor() { }

  ngOnInit(): void {
    this.logoActive.emit(2);
  }

  clickSurLogo() {
    console.info('je click sur le a href');
    this.logoActive.emit(1);

  }
}
