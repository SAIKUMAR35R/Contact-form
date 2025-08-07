import { CommonModule } from "@angular/common";
import { Component, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class ContactFormComponent {
    constructor(private cdr: ChangeDetectorRef) {}
    contactForm = new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
        lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        queryType: new FormControl('', Validators.required),
        message: new FormControl('', [Validators.required, Validators.minLength(10)]),
        consent: new FormControl(false, Validators.requiredTrue)
    });
    submitted = false;
    showSuccess = false;
    onSubmit() {
        this.submitted = true;
        if (this.contactForm.valid) {
            console.log("Form Submitted!", this.contactForm.value);
            this.showSuccess = true;

            // Hide success banner after 3 seconds
            setTimeout(() => {
                this.showSuccess = false;
                this.cdr.markForCheck();
            }, 3000);

            // Save message value
            const messageValue = this.contactForm.get('message')?.value || '';

            // Reset all fields
            this.contactForm.reset();

        } else {
            console.log("Form is invalid");
        }
    }
}
