// input-model.component.ts
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-model',
  standalone: true,
  template: `
    <div>
      <h3>{{ nom() }}</h3>
      <p>Prix : {{ prix() }} MAD</p>
    </div>
  `
})
export class InputModelComponent {

  nom = input<string>('');          // optionnel
  prix = input.required<number>();  // obligatoire
}