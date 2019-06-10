import { Component, OnInit } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { ICandidatura } from "../interfaces/candidaturaObj"
import { ApiConnectionService } from "../services/api-connection.service"


@Component({
	selector: "app-page-contacts",
	templateUrl: "./page-contacts.component.html",
	styleUrls: ["./page-contacts.component.scss"]
})


export class PageContactsComponent implements OnInit {
	status: string
	isLoading: boolean
	contactForm: FormGroup


	constructor(private _apiConnectionService: ApiConnectionService) {
		this.contactForm = new FormGroup({
			name: new FormControl("", Validators.required),
			address: new FormControl("", Validators.required),
			postalCode: new FormControl("", Validators.required),
			local: new FormControl("", Validators.required),
			phone: new FormControl("", [Validators.required, Validators.pattern(/^(\d){9}$/)]),
			email: new FormControl("", [Validators.required, Validators.email]),
			subject: new FormControl("", Validators.required),
			message: new FormControl("", Validators.required),
			candidatura: new FormControl("", Validators.required),
			situacaoActual: new FormControl("", Validators.required),
			ondetrabalha: new FormControl("", Validators.required),
			schedule: new FormControl("", Validators.required),
			literarias: new FormControl("", Validators.required),
			expProfServLimpeza: new FormControl("", Validators.required),
			expProfServOutros: new FormControl("", Validators.required),
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
				const candidaturaObj : ICandidatura = {
					name: this.contactForm.get("name").value,
					address: this.contactForm.get("address").value,
					postalCode: this.contactForm.get("postalCode").value,
					local: this.contactForm.get("local").value,
					phone: this.contactForm.get("phone").value,
					email: this.contactForm.get("email").value,
					subject: this.contactForm.get("subject").value,
					message: this.contactForm.get("message").value,
					candidatura: this.contactForm.get("candidatura").value,
					situacaoActual: this.contactForm.get("situacaoActual").value,
					ondetrabalha: this.contactForm.get("ondetrabalha").value,
					schedule: this.contactForm.get("schedule").value,
					literarias: this.contactForm.get("literarias").value,
					expProfServLimpeza: this.contactForm.get("expProfServLimpeza").value,
					expProfServOutros: this.contactForm.get("expProfServOutros").value
				}
				console.log("OBJETC CREATED")
				// send email by api
				this._apiConnectionService.sendCandidatura(candidaturaObj).subscribe(data => console.log(data))
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
