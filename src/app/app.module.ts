import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './shared/components/menu-principal/menu-principal.component';
import { ChoixArmePrincipaleComponent } from './features/weapons/choix-arme-principale/choix-arme-principale.component';
import { PreparerPlayerComponent } from './features/players/preparer-player/preparer-player.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AjouterArmeComponent } from './features/weapons/ajouter-arme/ajouter-arme.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeComponent } from './features/global/home/home.component';
import { ListArmesComponent } from './features/weapons/list-armes/list-armes.component';
import { FightComponent } from './features/characters/fight/fight.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    ChoixArmePrincipaleComponent,
    PreparerPlayerComponent,
    AjouterArmeComponent,
    PageNotFoundComponent,
    HomeComponent,
    ListArmesComponent,
    FightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [], // pour les services sans injectable à root
  bootstrap: [AppComponent]
})
export class AppModule { }
