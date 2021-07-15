import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { boot } from "./bootstrap";
import { store, key } from "./store";

// 创建Vue实例
const app = createApp(App);

boot(app);

// 使用vuex v4
app.use(store, key);
// 使用vue router v4
app.use(router);

// 挂载根组件到app节点
app.mount("#app");
