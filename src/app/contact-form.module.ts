import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { ContactFormComponent } from "./contact-form.component";

@NgModule({
  imports: [
    ReactiveFormsModule,
    ContactFormComponent
  ]
})
export class ContactFormModule { }