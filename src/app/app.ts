import { Component,OnInit } from '@angular/core';
//import { Salutation } from './salutation/salutation';
//import { Profil } from './profil/profil';
//import { Signal } from './signal/signal';
//import { InputModelComponent } from './input-model/input-model';
import { FormsModule } from '@angular/forms';
import { FormulaireContact} from './formulaire-contact/formulaire-contact';
import { ListeContacts  } from './liste-contacts/liste-contacts';
import { Contact } from './contact/contact';

@Component({
selector: 'app-root',
standalone:true,
imports: [FormsModule,FormulaireContact,ListeContacts], 
templateUrl: './app.html',
styleUrls: ['./app.css'],
/*template: `
<h1>Gestionnaire de Contacts</h1>
<app-formulaire-contact></app-formulaire-contact>
`*/
template: `
<!-- liste-contacts.component.html -->
<div>
<h2>Liste des Contacts ({{ contacts.length }})</h2>
<!-- Message si liste vide -->
<p *ngIf="contacts.length === 0">
Aucun contact pour le moment.
</p>
<!-- Affichage si liste non vide -->
<ul *ngIf="contacts.length > 0">
<li *ngFor="let c of contacts; let i = index">
<span>{{ i + 1 }}.</span>
<strong> {{ c.nom }} </strong>
— {{ c.email }}
<small *ngIf="c.telephone"> | {{ c.telephone }}</small>
</li>
</ul>
</div> `
})
/*export class App {
  protected readonly title = signal('first-app');
}*/

export class App implements  OnInit {
titre = 'gestion-contacts';
description = 'Ma première application Angular !';
annee = 2025;
version = 'Angular v20';
mesContacts: Contact[] = [];
ajouterContact(contact: Contact): void {
this.mesContacts.push(contact);
console.log('Contact ajouté :', contact);}

// constructor : injection uniquement (vide ici)
constructor() { }
// ngOnInit : initialisation des données
ngOnInit(): void {
// Pré-remplir avec 2 contacts démo
this.mesContacts = [
{ nom: 'Ali Benali', email: 'ali@example.com', telephone: '0600000001' },
{ nom: 'Sara Alami', email: 'sara@example.com', telephone: '0600000002' },
];
console.log('AppComponent initialisé avec', this.mesContacts.length, 'contacts');
}

 get nombreContacts(): number {
    return this.mesContacts.length;
  }

  get messageStatut(): string {
    if (this.mesContacts.length === 0) return 'Carnet vide';
    if (this.mesContacts.length === 1) return '1 contact';
    return `${this.mesContacts.length} contacts`;
  }


//ajouterContact(contact: Contact): void {
 //    this.mesContacts.push(contact); 
// }


supprimerContact(index: number): void {
    this.mesContacts = this.mesContacts.filter((_, i) => i !== index);
    console.log(`Contact ${index} supprimé. Reste : ${this.mesContacts.length}`);
  }




}
/*prenom:string='Ikram';
noteMax:number=20;
estEtudiant:boolean=true;

compteur: number = 0;
texte: string = '';
couleur: string = 'blanc';
incrementer(): void {
this.compteur++;
}
//Met à jour la propriété `texte` avec la valeur saisie.
onFrappe(event: Event): void {
// Conversion explicite de la cible de l'événement en élément input HTML
const input = event.target as HTMLInputElement;
this.texte = input.value;
}
changerCouleur(c: string): void {
this.couleur = c;
}


nom = 'Anouar';
prix = 22;

contacts = signal<Contact[]>([]);

ajouter(c: Contact) {
  this.contacts.update(arr => [...arr, c]);
}
  
*/



