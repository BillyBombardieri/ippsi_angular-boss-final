import { Injectable } from '@angular/core';
import { Utilisateur } from 'src/app/utilisateur';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  seDeconnecter() {
    throw new Error('Method not implemented.');
  }
  constructor() { }
  public seConnecter(userInfo: Utilisateur){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public estConnecte(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }
  public deconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}