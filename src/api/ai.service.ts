import { throwError } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, map } from "rxjs/operators";
import { stringify } from "qs";

export default class AIService {
	readonly souce = "market";
	private url = "";
	private appCode = "";

	constructor() {
		this.url = import.meta.env.VITE_APP_IDCARD_API as string;
		this.appCode = import.meta.env.VITE_APP_APPCODE as string;
	}

	/**
	 * 识别身份证信息
	 * @param imageBase64
	 * @returns
	 */
	readCardInfo(imageBase64: string) {
		const baseData = imageBase64.split(",")[1];

		return ajax({
			url: this.url,
			headers: {
				Authorization: `APPCODE ${this.appCode}`,
				"content-type": "application/x-www-form-urlencoded",
			},
			crossDomain: true,
			method: "POST",
			body: stringify({
				pic: baseData,
			}),
		}).pipe(
			map(({ response }: any) => {
				const { msg, data, ret } = response;
				if (ret !== 200) {
					throw msg;
				}
				return data;
			}),
			catchError((err) => {
				console.log(err.response);
				return throwError(() => "证件识别失败,请稍后重试");
			})
		);
	}
}
