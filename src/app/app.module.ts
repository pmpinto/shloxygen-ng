import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { PageContactsComponent } from "./page-contacts/page-contacts.component"
import { PageHomeComponent } from "./page-home/page-home.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		PageHomeComponent,
		PageContactsComponent,
		HeaderComponent,
		FooterComponent
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
