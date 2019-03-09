import { Component, Input, OnInit } from "@angular/core"
import { FormGroup } from "@angular/forms"
import { InputService } from "../services/input.service"

@Component({
	selector: "app-input-textarea",
	templateUrl: "./input-textarea.component.html",
	styleUrls: ["./input-textarea.component.scss"]
})
export class InputTextareaComponent implements OnInit {
	@Input() inputLabel: string
	@Input() inputPlaceholder: string
	@Input() inputHint: string
	@Input() formGroup: FormGroup
	@Input() controlName: string

	constructor(private _inputService: InputService) {}

	ngOnInit() {}
}
