import { Component, OnInit } from "@angular/core"
import { IPlan } from "../interfaces/plan"

@Component({
	selector: "app-page-services",
	templateUrl: "./page-services.component.html",
	styleUrls: ["./page-services.component.scss"]
})
export class PageServicesComponent implements OnInit {
	plans: IPlan[] = []

	constructor() {}

	ngOnInit() {
		this.plans.push({
			className: "plan--corporate",
			imageSrc: "/assets/page-services/corporate@2x.jpg",
			imageSrcset:
				"/assets/page-services/corporate@1x.jpg  720w, /assets/page-services/corporate@2x.jpg 1440w, /assets/page-services/corporate@3x.jpg 2880w",
			imageAlt: "Cidade vista do topo de um prédio",
			name: "Corporate",
			type: "B2B",
			description: "A pensar na sua empresa",
			list: [
				"Tratamento e protecção de pavimentos",
				"Decapagem, selagem, enceramentos e vitrificações",
				"Limpeza diária de manutenção profissional",
				"Higiene e limpeza final de obra",
				"Higiene e limpeza profunda em superfícies envidraçadas",
				"Limpeza de recuperação após calamidades",
				"Consumíveis para as instalações sanitárias",
				"Dispensadores e equipamentos sanitários",
				"Contentores assépticos de higiene feminina",
				"Manutenção de jardins"
			],
			ctaRoute: "/orcamentos/corporate"
		})
		this.plans.push({
			className: "plan--private",
			imageSrc: "/assets/page-services/private@2x.jpg",
			imageSrcset:
				"/assets/page-services/private@1x.jpg  720w, /assets/page-services/private@2x.jpg 1440w, /assets/page-services/private@3x.jpg 2880w",
			imageAlt: "Interior de cozinha",
			name: "Private",
			type: "B2C",
			description: "A pensar em si",
			list: [
				"Limpeza e manutenção diária ou ocasional",
				"Higiene e limpeza do chão, móveis, cozinha e loiças sanitárias",
				"Limpeza de estores e persianas",
				"Higiene e limpeza profunda em superfícies envidraçadas",
				"Consumíveis para as instalações sanitárias",
				"Dispensadores e equipamentos sanitários",
				"Limpeza de condomínios e garagens",
				"Limpeza final de obra",
				"Manutenção de jardins"
			],
			ctaRoute: "/orcamentos/private"
		})
	}
}
