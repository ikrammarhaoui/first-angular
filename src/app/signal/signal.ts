import { Component,input } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
   //methode1@Input()
  /*template: ` 
   <div>
      <h3>{{ nom }}</h3>
      <p>Prix : {{ prix }} MAD</p>
    </div>`,*/
    template: ` 
   <div>
      <h3>{{ nom() }}</h3>
      <p>Prix : {{ prix() }} MAD</p>
    </div>`,

})
export class Signal {
 /* @Input() nom: string = '';
  @Input() prix: number = 0;*/
  nom = input<string>('');          // optionnel
  prix = input.required<number>();  // obligatoire
}
