import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { CtaComponent } from "./cta/cta.component"
import { FooterComponent } from "./footer/footer.component"
import { HeaderComponent } from "./header/header.component"
import { InputComponent } from "./input/input.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { PageBudgetsComponent } from "./page-budgets/page-budgets.component"
import { PageCompanyComponent } from "./page-company/page-company.component"
import { PageContactsComponent } from "./page-contacts/page-contacts.component"
import { PageHomeComponent } from "./page-home/page-home.component"
import { PageNewsComponent } from "./page-news/page-news.component"
import { PageServicesComponent } from "./page-services/page-services.component"
import { PlanComponent } from "./plan/plan.component";
import { InputSelectComponent } from './input-select/input-select.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';
import { FormSubmitComponent } from './form-submit/form-submit.component'

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
		PlanComponent,
		InputComponent,
		InputSelectComponent,
		InputTextareaComponent,
		InputCheckboxComponent,
		FormSubmitComponent
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
