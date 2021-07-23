import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, filter, map, tap } from "rxjs/operators";

export default class AIService {
	private url = "";
	private code = "";

	constructor() {
		this.url = import.meta.env.VITE_APP_IDCARD_API as string;
		this.code = import.meta.env.VITE_APP_IDCARD_CODE as string;
	}

	readCardInfo(imageBase64: string) {
		// return requestParam.request();
		return ajax({
			url: this.url,
			headers: {
				Authorization: `APPCODE ${this.code}`,
			},
			crossDomain: true,
			method: "POST",
			body: {
				image: imageBase64,
			},
		}).pipe(
			tap((x) => {
				if (x.status !== 200) throw Error();
			}),
			map((data) => data.response),
			catchError((err) => {
				console.error(err);
				return of(err);
			})
		);
	}
}
