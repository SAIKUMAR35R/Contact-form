import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactFormComponent } from "./contact-form.component";

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ContactFormComponent]
})
export class App {
  protected readonly title = signal('contact-form');
}
