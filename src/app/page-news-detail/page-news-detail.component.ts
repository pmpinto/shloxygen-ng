import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { INewsArticle } from "../interfaces/news-article"

@Component({
	selector: "app-page-news-detail",
	templateUrl: "./page-news-detail.component.html",
	styleUrls: ["./page-news-detail.component.scss"]
})


export class PageNewsDetailComponent implements OnInit {
	newsArticle: INewsArticle
	routeParams: any
	newsArticles: INewsArticle[]
	body1: string[]
	body2: string[]


	constructor(private _router: ActivatedRoute) {}

	ngOnInit() {
		const news = {
			"imagem-dos-servicos-de-limpeza": 0,
			"digitalizacao-na-limpeza-irreal-presente-ou-futuro": 1
		}

		this.newsArticles = new Array<INewsArticle>(2)
		this.newsArticles[0] = {
			index: 1,
			title: "Imagem dos serviços de limpeza.",
			image: "/assets/page-news/news1/image.jpeg",
			body: [],
			ul: new Array<string>(10),
			permalink: "imagem-dos-servicos-de-limpeza",
			date: new Date("2019/02/20")
		}
		this.newsArticles[1] = {
			index: 2,
			title: "Digitalização na Limpeza - Irreal, Presente ou Futuro?",
			image: "/assets/page-news/news2/image.jpeg",
			body: [],
			ul: [],
			permalink: "digitalizacao-na-limpeza-irreal-presente-ou-futuro",
			date: new Date("2019/03/12")
		}
		// preencher a noticia com o index 0
		this.newsArticles[0].body.push("De uma maneira transversal, o sector das limpezas industriais assevera uma fraca imagem pelo público em geral e também pelos próprios trabalhadores do sector, podendo este facto dificultar a introdução de medidas de controlo para as condições de saúde e segurança no sector, bem como das condições gerais de trabalho.")
		this.newsArticles[0].body.push("Algumas das principais razões que contribuem para a menor imagem, encontram-se relacionadas com aspectos sócio-profissionais no sector, tais como:")
		this.newsArticles[0].ul[0] = "trabalho básico, manual, não qualificado;"
		this.newsArticles[0].ul[1] = "elevado impacto do trabalhado não declarado;"
		this.newsArticles[0].ul[2] = "trabalhadores com pouca educação e formação;"
		this.newsArticles[0].ul[3] = "trabalhadores principalmente em regime de tempo parcial;"
		this.newsArticles[0].ul[4] = "baixas remunerações e condições de trabalho;"
		this.newsArticles[0].ul[5] = "horário de trabalho pouco sociável e com reduzidas oportunidades de carreira;"
		this.newsArticles[0].ul[6] = "trabalho nem sempre reconhecido como socialmente útil;"
		this.newsArticles[0].ul[7] = "trabalho frequentemente associado a “pessoas que não conseguem mais nenhum emprego e que são predominantemente estrangeiros”;"
		this.newsArticles[0].ul[8] = "fraca percepção do seu estatuto por parte dos empregados de limpeza;"
		this.newsArticles[0].ul[9] = "algum desrespeito pelo sector pelo facto de empregar trabalhadores não declarados."
		this.newsArticles[0].body.push("A alteração da imagem do sector passa muito pela melhoria da formação, das competências e das qualificações profissionais, por uma mudança cultural, por mudanças ao nível dos horários, condições de trabalho, instalações e equipamentos de trabalho, pela diversificação das actividades de limpeza e pela rotatividades nas operações e funções.")
		this.newsArticles[0].body.push("Seremos sempre desafiados, na expectativa de alguns clientes, de que o serviço de limpeza pode ser feito mais barato...")

		// preencher a noticia com o index 1
		this.newsArticles[1].body.push("O sector da limpeza industrial permanece, ainda em Portugal, na tardança de alterar e acompanhar as tendências que já se fazem sentir um pouco por todo mundo e que está prestes a modificar por completo o cenário dos serviços de limpeza isto porque, o sector é frequentemente percebido como velho, indexado ao passado e resistente a mudanças.")
		this.newsArticles[1].body.push("No entanto, queiramos ou não, a tecnologia, a robótica e os serviços integrados no sector tornar-se-ão rapidamente numa prática padrão.")
		this.newsArticles[1].body.push("Seremos forçados a atender á crescente procura de maior transparência para com todos os stakeholders - seja por meio do rastreio em tempo real das nossas máquinas ou transmissão de vídeo ao vivo, o que nos permitirá verificar e auditar os serviços de limpeza através de qualquer dispositivo móvel.")
		this.newsArticles[1].body.push("O termo digitalização já foi colocado no radar do sector há já algum tempo sobretudo desde o lançamento de equipamentos de limpeza robótica até ao desenvolvimento de edifícios inteligentes em muitas cidades ao redor do mundo.")
		this.newsArticles[1].body.push("Mas para quando em Portugal ?")
		this.newsArticles[1].body.push("E o que precisamos fazer, como partes interessadas na indústria, para preparar a adopção crescente das novas tecnologias no mercado?")
		this.newsArticles[1].body.push("A digitalização, a limpeza conectada e a robótica estão a chegar, e de forma importante, para que os processos de realizar os trabalhos sejam feitos de forma mais eficaz, segura e no cumprimento legal.")

		// Get route params
		this._router.params.subscribe(data => {
			this.routeParams = data
			this.newsArticle = this.getNewsArticle(news[this.routeParams["news-permalink"]])
		})
	}


	getNewsArticle(index: number): INewsArticle {
		if (index === 0) {
			this.body1 = this.newsArticles[0].body.slice(0, 2)
			this.body2 = this.newsArticles[0].body.slice(2, 3)
		} else {
			this.body1 = this.newsArticles[1].body
		}


		// API CALL SHOULD BE HERE
		return this.newsArticles[index]
	}

	getCurrentURL(): string {
		return window.location.href
	}

	getTextToShareOnURL(text: string): string {
		return encodeURIComponent(text)
	}
}
