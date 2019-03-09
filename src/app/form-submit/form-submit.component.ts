import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"

@Component({
	selector: "app-form-submit",
	templateUrl: "./form-submit.component.html",
	styleUrls: ["./form-submit.component.scss"]
})
export class FormSubmitComponent implements OnInit {
	@Input() buttonLabel: string
	@Input() statusMessage: string
	@Input() formIsLoading: boolean
	@Input() formIsValid: boolean
	@Output() onClickButton: EventEmitter<boolean> = new EventEmitter()

	constructor() {}

	ngOnInit() {}

	click() {
		if (this.formIsValid) {
			this.onClickButton.emit(true)
		}
	}
}
