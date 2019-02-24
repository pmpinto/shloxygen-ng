import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
	@Input() navbarIsOpen: boolean
	@Output() closeNavbarEvt = new EventEmitter()

	constructor() {}

	ngOnInit() {}

	closeNavbar() {
		this.closeNavbarEvt.emit(!this.navbarIsOpen)
	}
}
