import { registerLocaleData } from "@angular/common"
import { HttpClientModule } from "@angular/common/http"
import localePt from "@angular/common/locales/pt-PT"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { CtaComponent } from "./cta/cta.component"
import { FooterComponent } from "./footer/footer.component"
import { FormSubmitComponent } from "./form-submit/form-submit.component"
import { HeaderComponent } from "./header/header.component"
import { InputCheckboxComponent } from "./input-checkbox/input-checkbox.component"
import { InputSelectComponent } from "./input-select/input-select.component"
import { InputTextareaComponent } from "./input-textarea/input-textarea.component"
import { InputComponent } from "./input/input.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { NotFoundComponent } from "./not-found/not-found-component"
import { PageBudgetsComponent } from "./page-budgets/page-budgets.component"
import { PageCompanyComponent } from "./page-company/page-company.component"
import { PageContactsComponent } from "./page-contacts/page-contacts.component"
import { PageHomeComponent } from "./page-home/page-home.component"
import { PageNewsDetailComponent } from "./page-news-detail/page-news-detail.component"
import { PageNewsComponent } from "./page-news/page-news.component"
import { PageServicesComponent } from "./page-services/page-services.component"
import { PlanComponent } from "./plan/plan.component"
import { SocialMediaPostsComponent } from "./social-media-posts/social-media-posts.component"

registerLocaleData(localePt, "pt-PT")

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
		FormSubmitComponent,
		PageNewsDetailComponent,
		SocialMediaPostsComponent,
		NotFoundComponent
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
