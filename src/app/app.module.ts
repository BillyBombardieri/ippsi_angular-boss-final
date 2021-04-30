import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './shared/components/menu-principal/menu-principal.component';
import { ChoixArmePrincipaleComponent } from './features/weapons/choix-arme-principale/choix-arme-principale.component';
import { PreparerPlayerComponent } from './features/players/preparer-player/preparer-player.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouterArmeComponent } from './features/weapons/ajouter-arme/ajouter-arme.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeComponent } from './features/global/home/home.component';
import { ListArmesComponent } from './features/weapons/list-armes/list-armes.component';
import { FightComponent } from './features/characters/fight/fight.component';
import { ConnexionComponent } from './features/profil/connexion/connexion.component';
import { AdminComponent } from './features/profil/admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ListGamesComponent } from './features/games/list-games/list-games.component';

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
    FightComponent,
    ConnexionComponent,
    AdminComponent,
    ListGamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [], // pour les services sans injectable à root
  bootstrap: [AppComponent]
})
export class AppModule { }
