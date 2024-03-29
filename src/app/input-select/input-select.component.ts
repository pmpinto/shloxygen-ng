import { Component, Input, OnInit } from "@angular/core"
import { FormGroup } from "@angular/forms"
import { InputService } from "../services/input.service"

@Component({
	selector: "app-input-select",
	templateUrl: "./input-select.component.html",
	styleUrls: ["./input-select.component.scss"]
})
export class InputSelectComponent implements OnInit {
	@Input() inputLabel: string
	@Input() inputPlaceholder: string
	@Input() inputHint: string
	@Input() formGroup: FormGroup
	@Input() controlName: string

	constructor(public inputService: InputService) {}

	ngOnInit() {}
}
