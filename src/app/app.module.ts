import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { PageContactsComponent } from "./page-contacts/page-contacts.component"
import { PageHomeComponent } from "./page-home/page-home.component"

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		PageHomeComponent,
		PageContactsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule.forRoot([
			{ path: "", component: PageHomeComponent },
			{ path: "contactos", component: PageContactsComponent }
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
