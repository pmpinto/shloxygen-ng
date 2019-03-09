import { Component, Input, OnInit } from "@angular/core"
import { ISocialMediaPost } from "../interfaces/social-media-post"

@Component({
	selector: "app-social-media-posts",
	templateUrl: "./social-media-posts.component.html",
	styleUrls: ["./social-media-posts.component.scss"]
})
export class SocialMediaPostsComponent implements OnInit {
	@Input() source: string
	@Input() handle: string
	@Input() posts: ISocialMediaPost[]

	constructor() {}

	ngOnInit() {}
}
