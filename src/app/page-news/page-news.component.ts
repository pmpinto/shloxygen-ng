import { Component, OnInit } from "@angular/core"
import { INewsArticle } from "../interfaces/news-article"
import { ISocialMediaPost } from "../interfaces/social-media-post"

@Component({
	selector: "app-page-news",
	templateUrl: "./page-news.component.html",
	styleUrls: ["./page-news.component.scss"]
})
export class PageNewsComponent implements OnInit {
	news: INewsArticle[]
	facebookPosts: ISocialMediaPost[]
	linkedinPosts: ISocialMediaPost[]
	twitterPosts: ISocialMediaPost[]

	constructor() {}

	ngOnInit() {
		this.news = this.getNewsArticles()

		this.facebookPosts = this.getFacebookPosts()
		this.linkedinPosts = this.getFacebookPosts()
		this.twitterPosts = this.getFacebookPosts()
	}

	getNewsArticles(): INewsArticle[] {
		const news = new Array<INewsArticle>(2)
		news[0] = {
			index: 1,
			title: "Imagem dos serviços de limpeza.",
			image: "https://placeimg.com/2000/1500/people",
			body: new Array<string>(4),
			ul: new Array<string>(10),
			permalink: "imagem-dos-servicos-de-limpeza",
			date: new Date("2019/02/20")
		}
		news[1] = {
			index: 2,
			title: "Digitalização na Limpeza - Irreal, Presente ou Futuro?",
			image: "https://placeimg.com/2000/1500/people",
			body: new Array<string>(4),
			ul: [""],
			permalink: "digitalizacao-na-limpeza-irreal-presente-ou-futuro",
			date: new Date("2019/03/12")
		}
		console.log("NEWS = ", news)

		// preencher a noticia com o index 0
		news[0].body.push("De uma maneira transversal, o sector das limpezas industriais assevera uma fraca imagem pelo público em geral e também pelos próprios trabalhadores do sector, podendo este facto dificultar a introdução de medidas de controlo para as condições de saúde e segurança no sector, bem como das condições gerais de trabalho.")
		news[0].body.push("Algumas das principais razões que contribuem para a menor imagem, encontram-se relacionadas com aspectos sócio-profissionais no sector, tais como:")
		news[0].ul.push("trabalho básico, manual, não qualificado;")
		news[0].ul.push("elevado impacto do trabalhado não declarado;")
		news[0].ul.push("trabalhadores com pouca educação e formação;")
		news[0].ul.push("trabalhadores principalmente em regime de tempo parcial;")
		news[0].ul.push("baixas remunerações e condições de trabalho;")
		news[0].ul.push("horário de trabalho pouco sociável e com reduzidas oportunidades de carreira;")
		news[0].ul.push("trabalho nem sempre reconhecido como socialmente útil;")
		news[0].ul.push("trabalho frequentemente associado a “pessoas que não conseguem mais nenhum emprego e que são predominantemente estrangeiros”;")
		news[0].ul.push("fraca percepção do seu estatuto por parte dos empregados de limpeza;")
		news[0].ul.push("algum desrespeito pelo sector pelo facto de empregar trabalhadores não declarados.")
		news[0].body.push("A alteração da imagem do sector passa muito pela melhoria da formação, das competências e das qualificações profissionais, por uma mudança cultural, por mudanças ao nível dos horários, condições de trabalho, instalações e equipamentos de trabalho, pela diversificação das actividades de limpeza e pela rotatividades nas operações e funções.")
		news[0].body.push("Seremos sempre desafiados, na expectativa de alguns clientes, de que o serviço de limpeza pode ser feito mais barato...")

		// preencher a noticia com o index 1
		news[1].body.push("O sector da limpeza industrial permanece, ainda em Portugal, na tardança de alterar e acompanhar as tendências que já se fazem sentir um pouco por todo mundo e que está prestes a modificar por completo o cenário dos serviços de limpeza isto porque, o sector é frequentemente percebido como velho, indexado ao passado e resistente a mudanças.")
		news[1].body.push("No entanto, queiramos ou não, a tecnologia, a robótica e os serviços integrados no sector tornar-se-ão rapidamente numa prática padrão.")
		news[1].body.push("Seremos forçados a atender á crescente procura de maior transparência para com todos os stakeholders - seja por meio do rastreio em tempo real das nossas máquinas ou transmissão de vídeo ao vivo, o que nos permitirá verificar e auditar os serviços de limpeza através de qualquer dispositivo móvel.")
		news[1].body.push("O termo digitalização já foi colocado no radar do sector há já algum tempo sobretudo desde o lançamento de equipamentos de limpeza robótica até ao desenvolvimento de edifícios inteligentes em muitas cidades ao redor do mundo.")
		news[1].body.push("Mas para quando em Portugal ?")
		news[1].body.push("E o que precisamos fazer, como partes interessadas na indústria, para preparar a adopção crescente das novas tecnologias no mercado?")
		news[1].body.push("A digitalização, a limpeza conectada e a robótica estão a chegar, e de forma importante, para que os processos de realizar os trabalhos sejam feitos de forma mais eficaz, segura e no cumprimento legal.")

		return news
	}

	getFacebookPosts(): ISocialMediaPost[] {
		return [
			{
				body:
					"Lorem ipsum dolor sit amet consectetur. Dolor nostrum accusantium suscipit, perferendis quo tempora non aut quia tempore porro quibusdam adipisci temporibus sed molestiae officia rerum ut quas iure.<br> Repudiandae, rem? Autem natus reiciendis doloribus culpa dolore nam nostrum commodi nulla fuga quas cumque assumenda ratione, illo, dolorem est. Perferendis pariatur delectus impedit! Consequuntur nemo unde deleniti inventore eligendi!<br> Aut dignissimos quidem magni exercitationem quaerat, maiores iusto accusamus commodi dolorum optio esse cupiditate tempora. Sit harum quae eligendi libero illo, possimus necessitatibus ducimus, maiores magni repudiandae aut quod soluta!<br> Dolorem recusandae corporis corrupti sapiente laudantium porro facere saepe dolore itaque placeat soluta, modi minus laboriosam cumque similique consequatur doloremque aspernatur voluptatum, totam numquam provident vel nostrum. Quisquam, rem tempora!<br> Vero ipsum mollitia nesciunt omnis provident repellat consectetur nisi alias adipisci eius harum, ea voluptas ipsam doloribus eveniet nihil ducimus cum ipsa iusto? Harum labore rem quod expedita natus repellat.",
				date: new Date("2019/03/2"),
				link: "https://www.facebook.com/shloxygen/posts/2173439362724918"
			},
			{
				body:
					"Adipisicing elit. Doloribus, suscipit iure adipisci, velit nulla eum facilis ratione eius labore molestias cupiditate reiciendis, possimus dicta corrupti maxime optio totam tenetur tempore!",
				date: new Date("2019/03/7"),
				link: "https://www.facebook.com/shloxygen/posts/2173439362724918"
			},
			{
				body:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tempora laboriosam optio dolor ut porro consectetur a, quibusdam rem, deserunt nesciunt! Libero deserunt officia quas! Repellendus repudiandae aspernatur voluptas sapiente!",
				date: new Date("2019/02/8"),
				link: "https://www.facebook.com/shloxygen/posts/2173439362724918"
			}
		]
	}
}
