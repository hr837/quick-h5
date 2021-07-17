import "vant/lib/index.css";
import "@vant/touch-emulator";

import {
	ShareSheet,
	Cell,
	Button,
	Circle,
	Tabbar,
	TabbarItem,
	List,
	Loading,
	CellGroup,
	Row,
	Image,
	Form,
	Field,
	Uploader,
	Popup,
	Picker,
	Step,
	Steps,
	Divider,
	Icon,
	Tabs,
	Tab,
	NavBar,
	Search,
	Col,
	ActionSheet,
	Empty,
	Collapse,
	CollapseItem,
	Dialog,
	PullRefresh,
	Checkbox,
	DatetimePicker,
} from "vant";

/**
 * 用到的vant组件
 */
const vantLib = {
	install(vue: { component: (arg0: string, arg1: any) => void }) {
		vue.component(Button.name, Button);
		vue.component(ShareSheet.name, ShareSheet);
		vue.component(Cell.name, Cell);
		vue.component(CellGroup.name, CellGroup);
		vue.component(Row.name, Row);
		vue.component(Circle.name, Circle);
		vue.component(Tabbar.name, Tabbar);
		vue.component(TabbarItem.name, TabbarItem);
		vue.component(List.name, List);
		vue.component(Loading.name, Loading);
		vue.component(Image.name, Image);
		vue.component(Form.name, Form);
		vue.component(Field.name, Field);
		vue.component(Uploader.name, Uploader);
		vue.component(Popup.name, Popup);
		vue.component(Picker.name, Picker);
		vue.component(Step.name, Step);
		vue.component(Steps.name, Steps);
		vue.component(Divider.name, Divider);
		vue.component(Icon.name, Icon);
		vue.component(Tabs.name, Tabs);
		vue.component(Tab.name, Tab);
		vue.component(NavBar.name, NavBar);
		vue.component(Search.name, Search);
		vue.component(Col.name, Col);
		vue.component(ActionSheet.name, ActionSheet);
		vue.component(Empty.name, Empty);
		vue.component(Collapse.name, Collapse);
		vue.component(CollapseItem.name, CollapseItem);
		vue.component(PullRefresh.name, PullRefresh);
		vue.component(Dialog.name, Dialog);
		vue.component(Checkbox.name, Checkbox);
		vue.component(DatetimePicker.name, DatetimePicker);
	},
};
export default vantLib;
