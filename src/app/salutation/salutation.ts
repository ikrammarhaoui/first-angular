/*import { Component } from '@angular/core';

@Component({
  selector: 'app-salutation',
  imports: [],
  templateUrl: './salutation.html',
  styleUrl: './salutation.css',
})*/
import { Component } from '@angular/core';
@Component({
selector: 'app-salutation', // La balise HTML personnalisée
template: `
<div style="border:2px solid #DD0031; padding:12px; border-radius:6px">
<h2>👋 Bonjour depuis le composant Salutation !</h2>
<p>Je suis un composant Angular.</p>
</div>
`
})

export class Salutation {


}