import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, throwError } from "rxjs"
import { catchError, retry } from "rxjs/operators"
import { environment } from "../../environments/environment"


@Injectable({
  	providedIn: "root"
})


export class ApiConnectionService {

	emailApiBaseURL = environment.production
	? "https://emailapi.shloxygen.com/api"
	: "https://localhost:5001/api"

	constructor(private _httpClient: HttpClient) { }

	sendOrcamento(orcamentoData: object): Observable<any> {
		return this._httpClient.post<any>(`${this.emailApiBaseURL}/emails/send/orcamento`, orcamentoData).pipe(
			retry(1),
			catchError(this.handleError)
		)
	}


	sendCandidatura(candidaturaData: object): Observable<any> {
		console.log("SENDING")
		console.log("URL = ", `${this.emailApiBaseURL}/emails/send/candidatura`)
		console.log("data = ", candidaturaData)
		return this._httpClient.post<any>(`${this.emailApiBaseURL}/emails/send/candidatura`, candidaturaData).pipe(
			retry(1),
			catchError(this.handleError)
		)
	}


	// Error handling
	handleError(error: any) {
		const errorMessage =
			error.error instanceof ErrorEvent
				? error.error.message
				: `Server-side error!\nError Code: ${error.status}\nMessage: ${error.message}`

		console.error(errorMessage)
		return throwError(errorMessage)
	}
}
