import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class ContactFormComponent {
    contactForm = new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
        lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        queryType: new FormControl('', Validators.required),
        message: new FormControl('', [Validators.required, Validators.minLength(10)]),
        consent: new FormControl(false, Validators.requiredTrue)
    });
    submitted = false;
    onSubmit() {
        this.submitted = true;
        if (this.contactForm.valid) {
            console.log("Form Submitted!", this.contactForm.value);
        } else {
            console.log("Form is invalid");
        }
    }
}
