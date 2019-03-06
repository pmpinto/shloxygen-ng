import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute } from "@angular/router"
import { InputService } from "../services/input.service"

@Component({
	selector: "app-page-budgets",
	templateUrl: "./page-budgets.component.html",
	styleUrls: ["./page-budgets.component.scss"]
})
export class PageBudgetsComponent implements OnInit {
	routeParams: object
	budget: object = {}
	budgetForm: FormGroup
	dateRegex: RegExp = this._inputService.dateRegex

	constructor(
		private _router: ActivatedRoute,
		private _formBuilder: FormBuilder,
		private _inputService: InputService
	) {
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
		})
	}
}
