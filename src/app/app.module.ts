import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { FooterComponent } from "./footer/footer.component"
import { HeaderComponent } from "./header/header.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { PageContactsComponent } from "./page-contacts/page-contacts.component"
import { PageHomeComponent } from "./page-home/page-home.component";
import { PageCompanyComponent } from './page-company/page-company.component';
import { PageServicesComponent } from './page-services/page-services.component';
import { PageBudgetsComponent } from './page-budgets/page-budgets.component';
import { PageNewsComponent } from './page-news/page-news.component';
import { CtaComponent } from './cta/cta.component';
import { PlanComponent } from './plan/plan.component'

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		PageHomeComponent,
		PageContactsComponent,
		HeaderComponent,
		FooterComponent,
		PageCompanyComponent,
		PageServicesComponent,
		PageBudgetsComponent,
		PageNewsComponent,
		CtaComponent,
		PlanComponent
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
