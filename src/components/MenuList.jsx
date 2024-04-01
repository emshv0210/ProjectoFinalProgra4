import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined,BarsOutlined } from '@ant-design/icons';
import MenuItem from 'antd/es/menu/MenuItem';

const MenuList = ({darkTheme}) => {

return (

<Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className="menu-bar">
<Menu.Item Key= "home" icon={<HomeOutlined />}>
Principal
</Menu.Item>
<Menu.Item Key= "activity" icon={<AppstoreOutlined />}>
Notificaciones
</Menu.Item>
<Menu.SubMenu key='Tasks' icon={<BarsOutlined/>} 
title="Grupos">
 <MenuItem key ='task-1'>Favoritos</MenuItem>
 <MenuItem key ='task-2'>Recomendado</MenuItem>
 <Menu.SubMenu key ='subtasks' title ='Subtasks'>
<Menu.Item key ='subtasks-1'>Subtasks 1</Menu.Item>
<Menu.Item key ='subtasks-2'>Subtasks 2</Menu.Item>
</Menu.SubMenu>
</Menu.SubMenu>
<Menu.Item Key= "progress" icon={<AreaChartOutlined />}>
Tendencias
</Menu.Item>
<Menu.Item Key= "payment" icon={<PayCircleOutlined />}>
Seguridad
</Menu.Item>
<Menu.Item Key= "setting" icon={<SettingOutlined />}>
Configuracion
</Menu.Item>
</Menu>


);
};

export default MenuList;
