import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

import { NotFoundComponent } from "./not-found/not-found-component"
import { PageBudgetsComponent } from "./page-budgets/page-budgets.component"
import { PageCompanyComponent } from "./page-company/page-company.component"
import { PageContactsComponent } from "./page-contacts/page-contacts.component"
import { PageHomeComponent } from "./page-home/page-home.component"
import { PageNewsDetailComponent } from "./page-news-detail/page-news-detail.component"
import { PageNewsComponent } from "./page-news/page-news.component"
import { PageServicesComponent } from "./page-services/page-services.component"

const routes : Routes = [
	{ path: "", component: PageHomeComponent },
	{ path: "empresa", component: PageCompanyComponent },
	{ path: "servicos", component: PageServicesComponent },
	{ path: "orcamentos/:product", component: PageBudgetsComponent },
	{ path: "orcamentos", component: PageBudgetsComponent },
	{ path: "noticias/:news-permalink", component: PageNewsDetailComponent },
	{ path: "noticias", component: PageNewsComponent },
	{ path: "contactos", component: PageContactsComponent },
	{ path:  "404", component: NotFoundComponent},
	{ path: "**", redirectTo: "/404" }

]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
