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
		return [
			{
				title: "Imagem dos serviços de limpeza.",
				image: "https://placeimg.com/2000/1500/people",
				body:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo provident repellat doloremque ullam non facilis deserunt corporis assumenda sunt illum. Repellendus a esse ad ex labore consequatur accusantium soluta saepe!<br>Molestiae ipsum minus numquam explicabo consequuntur voluptas consectetur, commodi voluptatem laboriosam magni fuga quos laudantium beatae, culpa iure velit facilis temporibus corrupti pariatur recusandae alias. Minima voluptate ex facilis rerum.<br>Omnis magnam ullam, molestiae numquam eveniet optio rerum dolores velit explicabo aperiam voluptatibus a. Iste, sint. Dolores veritatis, dolore quo ipsum ratione fugiat similique voluptate aliquid, provident nam sunt? Explicabo.",
				permalink: "noticia-1",
				date: new Date("2019/02/20")
			},
			{
				title: "Digitalização na Limpeza - Irreal, Presente ou Futuro?",
				image: "https://placeimg.com/2000/1500/people",
				body:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor nostrum accusantium suscipit, perferendis quo tempora non aut quia tempore porro quibusdam adipisci temporibus sed molestiae officia rerum ut quas iure.<br> Repudiandae, rem? Autem natus reiciendis doloribus culpa dolore nam nostrum commodi nulla fuga quas cumque assumenda ratione, illo, dolorem est. Perferendis pariatur delectus impedit! Consequuntur nemo unde deleniti inventore eligendi!<br> Aut dignissimos quidem magni exercitationem quaerat, maiores iusto accusamus commodi dolorum optio esse cupiditate tempora. Sit harum quae eligendi libero illo, possimus necessitatibus ducimus, maiores magni repudiandae aut quod soluta!<br> Dolorem recusandae corporis corrupti sapiente laudantium porro facere saepe dolore itaque placeat soluta, modi minus laboriosam cumque similique consequatur doloremque aspernatur voluptatum, totam numquam provident vel nostrum. Quisquam, rem tempora!<br> Vero ipsum mollitia nesciunt omnis provident repellat consectetur nisi alias adipisci eius harum, ea voluptas ipsam doloribus eveniet nihil ducimus cum ipsa iusto? Harum labore rem quod expedita natus repellat.",
				permalink: "noticia-2",
				date: new Date("2019/03/12")
			},
			{
				title: "Marcelo assume que tempo político acelerou.",
				image: "https://placeimg.com/2000/1500/people",
				body:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quisquam sapiente velit pariatur minus ipsum repudiandae sint inventore, alias earum numquam facilis. Deleniti ex rem est nesciunt facilis velit amet.Tempore dolor eos alias at voluptates. Repellat architecto dolores, eum earum enim id pariatur ea vitae, dolore, sunt distinctio ratione. Ad, itaque iste. Excepturi pariatur ipsa vitae nihil perferendis aliquam!",
				permalink: "noticia-3",
				date: new Date("2019/01/2")
			},
			{
				title: "Fuzileiro apanhado a roubar granito de uma pedreira fechada para férias.",
				image: "https://placeimg.com/2000/1500/people",
				body:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo provident repellat doloremque ullam non facilis deserunt corporis assumenda sunt illum. Repellendus a esse ad ex labore consequatur accusantium soluta saepe!<br>Molestiae ipsum minus numquam explicabo consequuntur voluptas consectetur, commodi voluptatem laboriosam magni fuga quos laudantium beatae, culpa iure velit facilis temporibus corrupti pariatur recusandae alias. Minima voluptate ex facilis rerum.<br>Omnis magnam ullam, molestiae numquam eveniet optio rerum dolores velit explicabo aperiam voluptatibus a. Iste, sint. Dolores veritatis, dolore quo ipsum ratione fugiat similique voluptate aliquid, provident nam sunt? Explicabo.",
				permalink: "noticia-4",
				date: new Date("2019/03/15")
			},
			{
				title: "Reaberto troço do IP4 que esteve cortado toda a semana.",
				image: "https://placeimg.com/2000/1500/people",
				body:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor nostrum accusantium suscipit, perferendis quo tempora non aut quia tempore porro quibusdam adipisci temporibus sed molestiae officia rerum ut quas iure.<br> Repudiandae, rem? Autem natus reiciendis doloribus culpa dolore nam nostrum commodi nulla fuga quas cumque assumenda ratione, illo, dolorem est. Perferendis pariatur delectus impedit! Consequuntur nemo unde deleniti inventore eligendi!<br> Aut dignissimos quidem magni exercitationem quaerat, maiores iusto accusamus commodi dolorum optio esse cupiditate tempora. Sit harum quae eligendi libero illo, possimus necessitatibus ducimus, maiores magni repudiandae aut quod soluta!<br> Dolorem recusandae corporis corrupti sapiente laudantium porro facere saepe dolore itaque placeat soluta, modi minus laboriosam cumque similique consequatur doloremque aspernatur voluptatum, totam numquam provident vel nostrum. Quisquam, rem tempora!<br> Vero ipsum mollitia nesciunt omnis provident repellat consectetur nisi alias adipisci eius harum, ea voluptas ipsam doloribus eveniet nihil ducimus cum ipsa iusto? Harum labore rem quod expedita natus repellat.",
				permalink: "noticia-5",
				date: new Date("2018/12/21")
			},
			{
				title: "Tropa portuguesa socorreu aldeia no meio da vila mais antiga do país.",
				image: "https://placeimg.com/2000/1500/people",
				body:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quisquam sapiente velit pariatur minus ipsum repudiandae sint inventore, alias earum numquam facilis. Deleniti ex rem est nesciunt facilis velit amet.Tempore dolor eos alias at voluptates. Repellat architecto dolores, eum earum enim id pariatur ea vitae, dolore, sunt distinctio ratione. Ad, itaque iste. Excepturi pariatur ipsa vitae nihil perferendis aliquam!",
				permalink: "noticia-6",
				date: new Date("2019/05/6")
			},
			{
				title: "Como Marcelo, só o Papa. Angola já pergunta quando é que Ti Celito se candidata",
				image: "https://placeimg.com/2000/1500/people",
				body:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo provident repellat doloremque ullam non facilis deserunt corporis assumenda sunt illum. Repellendus a esse ad ex labore consequatur accusantium soluta saepe!<br>Molestiae ipsum minus numquam explicabo consequuntur voluptas consectetur, commodi voluptatem laboriosam magni fuga quos laudantium beatae, culpa iure velit facilis temporibus corrupti pariatur recusandae alias. Minima voluptate ex facilis rerum.<br>Omnis magnam ullam, molestiae numquam eveniet optio rerum dolores velit explicabo aperiam voluptatibus a. Iste, sint. Dolores veritatis, dolore quo ipsum ratione fugiat similique voluptate aliquid, provident nam sunt? Explicabo.",
				permalink: "noticia-7",
				date: new Date("2019/03/16")
			},
			{
				title: "Neto de Moura diz que casos que deram polémica não eram particularmente graves",
				image: "https://placeimg.com/2000/1500/people",
				body:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tempora laboriosam optio dolor ut porro consectetur a, quibusdam rem, deserunt nesciunt! Libero deserunt officia quas! Repellendus repudiandae aspernatur voluptas sapiente!",
				permalink: "noticia-8",
				date: new Date("2018/10/2")
			},
			{
				title: "António Costa. Tratamento judiciário à violência doméstica é “revoltante”",
				image: "https://placeimg.com/2000/1500/people",
				body:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor nostrum accusantium suscipit, perferendis quo tempora non aut quia tempore porro quibusdam adipisci temporibus sed molestiae officia rerum ut quas iure.<br> Repudiandae, rem? Autem natus reiciendis doloribus culpa dolore nam nostrum commodi nulla fuga quas cumque assumenda ratione, illo, dolorem est. Perferendis pariatur delectus impedit! Consequuntur nemo unde deleniti inventore eligendi!<br> Aut dignissimos quidem magni exercitationem quaerat, maiores iusto accusamus commodi dolorum optio esse cupiditate tempora. Sit harum quae eligendi libero illo, possimus necessitatibus ducimus, maiores magni repudiandae aut quod soluta!<br> Dolorem recusandae corporis corrupti sapiente laudantium porro facere saepe dolore itaque placeat soluta, modi minus laboriosam cumque similique consequatur doloremque aspernatur voluptatum, totam numquam provident vel nostrum. Quisquam, rem tempora!<br> Vero ipsum mollitia nesciunt omnis provident repellat consectetur nisi alias adipisci eius harum, ea voluptas ipsam doloribus eveniet nihil ducimus cum ipsa iusto? Harum labore rem quod expedita natus repellat.",
				permalink: "noticia-9",
				date: new Date("2018/11/27")
			},
			{
				title: "Apagão deixou a Venezuela (outra vez) às escuras. Governo diz que é sabotagem",
				image: "https://placeimg.com/2000/1500/people",
				body:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, suscipit iure adipisci, velit nulla eum facilis ratione eius labore molestias cupiditate reiciendis, possimus dicta corrupti maxime optio totam tenetur tempore!",
				permalink: "noticia-10",
				date: new Date("2019/02/27")
			}
		]
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
