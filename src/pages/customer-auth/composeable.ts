import { computed, reactive } from "vue";

export const idCradInfo = reactive({
	front: false,
	behand: false,
	name: "",
	code: "",
});

export const frontMsg = computed(() =>
	idCradInfo.front ? "上传成功" : "上传身份证(照片面)"
);
export const behandMsg = computed(() =>
	idCradInfo.behand ? "上传成功" : "上传身份证(国徽面)"
);

import AIService from "@/api/ai.service";
const service = new AIService();

/**
 * 读取身份证照片信息
 * @param file 选定的文件
 * @param type 正反面
 * @returns
 */
export function readIdCardInfo(file: File, type: CardSide) {
	const reader = new FileReader();
	return new Promise((resolve, reject) => {
		reader.readAsDataURL(file);
		reader.onload = (e) => {
			const data = e.target.result;
			if (typeof data === "string") {
				service.readCardInfo(data).subscribe({
					next: (resData) => {
						if (type === "back") {
							idCradInfo.behand = true;
						}
						if (type === "face") {
							idCradInfo.front = true;
							idCradInfo.name = resData.name;
							idCradInfo.code = resData.number;
						}
					},
					error: reject,
				});
			} else {
				reject("文件读取错误,请重新上传");
			}
		};
	});
}
