import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./features/global/home/home.component";
import { AdminComponent } from "./features/profil/admin/admin.component";
import { ConnexionComponent } from "./features/profil/connexion/connexion.component";
import { AjouterArmeComponent } from "./features/weapons/ajouter-arme/ajouter-arme.component";
import { ListArmesComponent } from "./features/weapons/list-armes/list-armes.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'nouvelle-arme',
    component: AjouterArmeComponent
  },
  {
    path: 'les-armes',
    component: ListArmesComponent
  },
  {
    path: 'connexion',
    component: ConnexionComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
