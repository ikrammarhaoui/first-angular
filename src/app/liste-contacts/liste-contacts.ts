import {  Component,  Input,  Output,  EventEmitter,  OnInit,  OnChanges,  OnDestroy,  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contact } from '../contact/contact';
@Component({
selector: 'app-liste-contacts',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './liste-contacts.html',
styleUrls: ['./liste-contacts.css'],
/*template: `
<h2>Contacts ({{ contacts().length }})</h2>
@if (contacts().length === 0) {
<p>Aucun contact.</p>
}
<ul>
@for (c of contacts(); track c.email;
let i = $index) {
<li>{{ i+1 }}. {{ c.nom }} — {{ c.email }}</li>
}
</ul>
`*/
})
export class ListeContacts implements  OnInit, OnChanges, OnDestroy {
 // @Input() contacts: Contact[] = [];
  dateChargement: string = '';
// constructor : UNIQUEMENT pour l'injection de services
constructor() {
console.log('[1] constructor() appelé');
// NE PAS accéder aux @Input() ici - ils ne sont pas encore remplis !
}
recherche: string = '';
@Input() contacts: Contact[] = [];
// ngOnInit : tout le reste de l'initialisation
  ngOnInit(): void {
    console.log('[2] ngOnInit() appelé');
    console.log(`  Contacts reçus : ${this.contacts.length}`);
    this.dateChargement = new Date().toLocaleTimeString('fr-FR');
  }
// ngOnDestroy : libérer les ressources
ngOnDestroy(): void {
console.log('[3] ngOnDestroy() appelé — nettoyage');
}
nombreAjouts: number = 0;
// Appelé à CHAQUE fois que contacts[] change
ngOnChanges(changes: SimpleChanges): void {
if (changes['contacts']) {
const avant = changes['contacts'].previousValue;
const apres = changes['contacts'].currentValue;
const premier = changes['contacts'].firstChange;
console.log('ngOnChanges() appelé');
console.log(' Premier appel ?', premier);
console.log(' Avant :', avant?.length ?? 0, 'contact(s)');
console.log(' Après :', apres?.length ?? 0, 'contact(s)');
if (!premier) this.nombreAjouts++;
}}



@Output() contactSupprime = new EventEmitter<number>();
supprimer(index: number): void {
if(confirm(`Confirmer la suppression ?`)) {
  this.contactSupprime.emit(index);
}


}
get contactsFiltres(): Contact[] {
    if (!this.recherche.trim()) return this.contacts;
    const terme = this.recherche.toLowerCase();
    return this.contacts.filter(
      (c) =>
        c.nom.toLowerCase().includes(terme) ||
        c.email.toLowerCase().includes(terme)
    );
  }

}
/*contacts = input<Contact[]>([]);
constructor() {
// effect() : remplace ngOnInit+ngOnChanges
effect(() => {
  console.log(`${this.contacts().length} contact(s)`);
});
}
ngOnDestroy() {
console.log('Liste détruite — nettoyage');
}*/
