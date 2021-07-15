/* eslint-disable no-var */
declare var VConsole: any;

/**
 * 使用 vConsole
 */
export default function () {
	if (import.meta.env.MODE === "test") {
		const script = document.createElement("script");
		script.src = "https://unpkg.com/vconsole/dist/vconsole.min.js";
		script.onload = () => {
			var vConsole = new VConsole();
		};
		document.body.appendChild(script);
	}
}
