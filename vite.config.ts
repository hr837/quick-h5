import { ConfigEnv, UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";
import path from "path";
import { version } from "./package.json";
import pxToViewPort from "postcss-px-to-viewport";

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
	if (command === "build") {
		// merge build info
		process.env.VITE_APP_BUILD_VERSION = version;
		process.env.VITE_APP_BUILD_DATE = new Date().toLocaleString();
	}

	return {
		css: {
			postcss: {
				plugins: [pxToViewPort({ viewportWidth: 375 })],
			},
			preprocessorOptions: {
				less: {
					additionalData: '@import "src/assets/styles/variables.less";',
				},
			},
		},
		plugins: [
			vue(),
			styleImport({
				libs: [
					{
						libraryName: "vant",
						esModule: true,
						resolveStyle: (name) => `vant/es/${name}/style`,
					},
				],
			}),
		],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
			},
		},
	};
};
