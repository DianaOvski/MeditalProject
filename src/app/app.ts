import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // ← necesario si no tienes AppModule
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] // ← corregido (con "s" y array)
})
export class App {
  protected title = 'MedicalProject';
}
