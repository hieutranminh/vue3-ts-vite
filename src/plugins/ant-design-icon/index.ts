import {
  PlusOutlined,
  FilterOutlined,
  LogoutOutlined,
  UserOutlined,
  LockOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons-vue';
import type { App } from 'vue';

export function setupAntDesignIcon(app: App<Element>) {
  app.component('PlusOutlined', PlusOutlined);
  app.component('FilterOutlined', FilterOutlined);
  app.component('LogoutOutlined', LogoutOutlined);
  app.component('UserOutlined', UserOutlined);
  app.component('LockOutlined', LockOutlined);
  app.component('EyeOutlined', EyeOutlined);
  app.component('EditOutlined', EditOutlined);
  app.component('DeleteOutlined', DeleteOutlined);
}
