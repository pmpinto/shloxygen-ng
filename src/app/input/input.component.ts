import { Component, ContentChild, Input, OnInit } from "@angular/core"
import { FormGroup } from "@angular/forms"
import { InputService } from "../services/input.service"

@Component({
	selector: "app-input",
	templateUrl: "./input.component.html",
	styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
	@Input() inputType: string
	@Input() inputLabel: string
	@Input() inputPlaceholder: string
	@Input() inputHint: string
	@Input() formGroup: FormGroup
	@Input() controlName: string

	constructor(private _inputService: InputService) {}

	ngOnInit() {}
}
