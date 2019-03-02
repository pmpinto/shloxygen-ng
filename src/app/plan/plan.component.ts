import { Component, Input, OnInit } from "@angular/core"
import { IPlan } from "../interfaces/plan"

@Component({
	selector: "app-plan",
	templateUrl: "./plan.component.html",
	styleUrls: ["./plan.component.scss"]
})
export class PlanComponent implements OnInit {
	@Input() plan: IPlan

	constructor() {}

	ngOnInit() {}
}
