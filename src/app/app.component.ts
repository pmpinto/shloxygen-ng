import { Component } from "@angular/core"

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {
	title = "shloxygen"

	onChangeRoute() {
		window.scroll(0, 0)
	}
}
