import { Component, OnInit, ViewChild } from "@angular/core"
import { NavbarComponent } from "../navbar/navbar.component"

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
	@ViewChild(NavbarComponent) navbarComponent: NavbarComponent

	constructor() {}

	ngOnInit() {}

	openNavbar() {
		this.navbarComponent.toggleNavbar()
	}
}
