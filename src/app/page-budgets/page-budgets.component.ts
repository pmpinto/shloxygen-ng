import { Component, OnInit } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute } from "@angular/router"
import { InputService } from "../services/input.service"

@Component({
	selector: "app-page-budgets",
	templateUrl: "./page-budgets.component.html",
	styleUrls: ["./page-budgets.component.scss"]
})
export class PageBudgetsComponent implements OnInit {
	routeParams: any
	status: string
	isLoading: boolean
	budgetForm: FormGroup
	dateRegex: RegExp = this.inputService.dateRegex

	constructor(private _router: ActivatedRoute, public inputService: InputService) {
		this.budgetForm = new FormGroup({
			product: new FormControl("", Validators.required),
			serviceType: new FormControl("", Validators.required),
			date: new FormControl("", [Validators.required, Validators.pattern(this.dateRegex)]),
			address: new FormControl("", Validators.required),
			name: new FormControl("", Validators.required),
			email: new FormControl("", [Validators.required, Validators.email]),
			phone: new FormControl("", [Validators.required, Validators.pattern(/^(\d){9}$/)]),
			obs: new FormControl(""),
			agreement: new FormControl(false, Validators.requiredTrue)
		})
	}

	ngOnInit() {
		// Get route params
		this._router.params.subscribe(data => {
			this.routeParams = data

			// Update form with product on URL
			if (this.routeParams.product === "corporate" || this.routeParams.product === "private") {
				this.budgetForm.controls.product.setValue(this.routeParams.product)
			}
		})
	}

	submit() {
		if (this.budgetForm.valid) {
			console.log("submiting", this.budgetForm.value)
			this.isLoading = true
			this.status = "A enviar…"

			setTimeout(() => {
				this.status = "Enviado com sucesso!"
				this.isLoading = false

				this.clearStatus()

				this.budgetForm.reset() // ONLY IF SUCCESS
			}, 2000)
		}
	}

	clearStatus() {
		setTimeout(() => {
			this.status = ""
		}, 5000)
	}
}
