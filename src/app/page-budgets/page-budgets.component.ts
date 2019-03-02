import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"

@Component({
	selector: "app-page-budgets",
	templateUrl: "./page-budgets.component.html",
	styleUrls: ["./page-budgets.component.scss"]
})
export class PageBudgetsComponent implements OnInit {
	routeParams: object

	constructor(private router: ActivatedRoute) {}

	ngOnInit() {
		// Get route params
		this.router.params.subscribe(data => {
			this.routeParams = data
		})
	}
}
