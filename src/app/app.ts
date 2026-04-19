import { Component, signal } from '@angular/core';
import { Salutation } from './salutation/salutation';
import { Profil } from './profil/profil';
@Component({
selector: 'app-root',
standalone: true,
imports: [Salutation, Profil], // ← OBLIGATOIRE
templateUrl: './app.html',
styleUrls: ['./app.css']
})
/*export class App {
  protected readonly title = signal('first-app');
}*/

export class App {
titre = 'Mon Application Angular 20';
description = 'Ma première application Angular !';
annee = 2025;
version = 'Angular v20';
prenom:string='Ikram';
noteMax:number=20;
estEtudiant:boolean=true;

}