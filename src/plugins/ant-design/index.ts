import {
  Layout,
  Menu,
  Breadcrumb,
  Button,
  Dropdown,
  Select,
  Input,
  Row,
  Col,
  DatePicker,
  Avatar,
  Space,
  Checkbox,
  Pagination,
  Table,
  Tag,
  Modal,
  message,
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import type { App } from 'vue';

export const setupAntDesign = (app: App<Element>) => {
  app.use(Layout);
  app.use(Menu);
  app.use(Breadcrumb);
  app.use(Dropdown);
  app.use(Select);
  app.use(Input);
  app.use(Row);
  app.use(Col);
  app.use(Button);
  app.use(Avatar);
  app.use(Space);
  app.use(Checkbox);
  app.use(DatePicker);
  app.use(Pagination);
  app.use(Table);
  app.use(Tag);
  app.use(Modal);
  app.config.globalProperties.$message = message;
};
