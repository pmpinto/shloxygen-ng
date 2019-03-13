import { Injectable } from "@angular/core"
import { AbstractControl } from "@angular/forms"

@Injectable({
	providedIn: "root"
})
export class InputService {
	dateRegex: RegExp = /^(\d{4})\/(0[1-9]|1[0-2]|[1-9])\/([1-2][0-9]|3[0-1]|0?[1-9])$/

	constructor() {}

	fieldIsInvalid(field: AbstractControl): boolean {
		return field.invalid && field.touched
	}

	getDateString(date: AbstractControl) {
		if (date.value) {
			const dateIsValid = this.dateRegex.test(date.value)
			const selectedDate = dateIsValid
				? new Date(date.value).toLocaleDateString("pt-PT", {
						year: "numeric",
						weekday: "short",
						month: "long",
						day: "2-digit"
				  })
				: ""

			return selectedDate
		}

		return null
	}
}
