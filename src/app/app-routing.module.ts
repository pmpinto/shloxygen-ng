import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

import { PageContactsComponent } from "./page-contacts/page-contacts.component"
import { PageHomeComponent } from "./page-home/page-home.component"

const routes : Routes = [
	{ path: "", component: PageHomeComponent },
	{ path: "contactos", component: PageContactsComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
