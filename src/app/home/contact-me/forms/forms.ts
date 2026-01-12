import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Wichtig für Formulare
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms {
  private fb = inject(FormBuilder);

  // Erstellung des Formulars mit Validierungen
  personForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  // Action: submit
  onSubmit(): void {
    if (this.personForm.valid) {
      console.log('Formular Daten:', this.personForm.value);
      alert('Formular erfolgreich abgesendet! Siehe Konsole.');
    } else {
      console.log('Formular ist ungültig');
      this.personForm.markAllAsTouched(); // Fehler anzeigen
    }
  }
}