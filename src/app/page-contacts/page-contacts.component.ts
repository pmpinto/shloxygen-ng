import { Component, OnInit } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"

@Component({
	selector: "app-page-contacts",
	templateUrl: "./page-contacts.component.html",
	styleUrls: ["./page-contacts.component.scss"]
})
export class PageContactsComponent implements OnInit {
	status: string
	isLoading: boolean
	contactForm: FormGroup

	constructor() {
		this.contactForm = new FormGroup({
			name: new FormControl("", Validators.required),
			email: new FormControl("", [Validators.required, Validators.email]),
			phone: new FormControl("", [Validators.required, Validators.pattern(/^(\d){9}$/)]),
			subject: new FormControl("", Validators.required),
			message: new FormControl("", Validators.required),
			priority: new FormControl("", Validators.required),
			agreement: new FormControl(false, Validators.requiredTrue)
		})
	}

	ngOnInit() {}

	submit() {
		if (this.contactForm.valid) {
			console.log("submiting", this.contactForm.value)
			this.isLoading = true
			this.status = "A enviar…"

			setTimeout(() => {
				this.status = "Enviado com sucesso!"
				this.isLoading = false

				this.clearStatus()

				this.contactForm.reset() // ONLY IF SUCCESS
			}, 2000)
		}
	}

	clearStatus() {
		setTimeout(() => {
			this.status = ""
		}, 5000)
	}
}
