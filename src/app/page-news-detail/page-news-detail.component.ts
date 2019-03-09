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

	constructor(private _router: ActivatedRoute) {}

	ngOnInit() {
		// Get route params
		this._router.params.subscribe(data => {
			this.routeParams = data
			this.newsArticle = this.getNewsArticle(this.routeParams["news-permalink"])
		})
	}

	getNewsArticle(permalink: string): INewsArticle {
		// API CALL SHOULD BE HERE
		return {
			title: "António Costa. Tratamento judiciário à violência doméstica é “revoltante”",
			image: "https://placeimg.com/2000/1500/people",
			body:
				"<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor nostrum accusantium suscipit, perferendis quo tempora non aut quia tempore porro quibusdam adipisci temporibus sed molestiae officia rerum ut quas iure.</p><p>Repudiandae, rem? Autem natus reiciendis doloribus culpa dolore nam nostrum commodi nulla fuga quas cumque assumenda ratione, illo, dolorem est. Perferendis pariatur delectus impedit! Consequuntur nemo unde deleniti inventore eligendi!</p><p>Aut dignissimos quidem magni exercitationem quaerat, maiores iusto accusamus commodi dolorum optio esse cupiditate tempora. Sit harum quae eligendi libero illo, possimus necessitatibus ducimus, maiores magni repudiandae aut quod soluta!</p><p>Dolorem recusandae corporis corrupti sapiente laudantium porro facere saepe dolore itaque placeat soluta, modi minus laboriosam cumque similique consequatur doloremque aspernatur voluptatum, totam numquam provident vel nostrum. Quisquam, rem tempora!</p><p>Vero ipsum mollitia nesciunt omnis provident repellat consectetur nisi alias adipisci eius harum, ea voluptas ipsam doloribus eveniet nihil ducimus cum ipsa iusto? Harum labore rem quod expedita natus repellat.</p>",
			permalink: "noticia-9",
			date: new Date("2018/11/27")
		}
	}

	getCurrentURL(): string {
		return window.location.href
	}

	getTextToShareOnURL(text: string): string {
		return encodeURIComponent(text)
	}
}
