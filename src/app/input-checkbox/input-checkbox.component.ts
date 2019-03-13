import { Component, Input, OnInit } from "@angular/core"
import { FormGroup } from "@angular/forms"
import { InputService } from "../services/input.service"

@Component({
	selector: "app-input-checkbox",
	templateUrl: "./input-checkbox.component.html",
	styleUrls: ["./input-checkbox.component.scss"]
})
export class InputCheckboxComponent implements OnInit {
	@Input() inputLabel: string
	@Input() inputPlaceholder: string
	@Input() inputHint: string
	@Input() formGroup: FormGroup
	@Input() controlName: string

	constructor(public inputService: InputService) {}

	ngOnInit() {}
}
