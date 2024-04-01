import {useState } from 'react';
import { Button, Layout, theme } from 'antd';
import Logo from './components/Logo';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import MenuList from './components/MenuList';
import ToggleThemeButton from './components/ToggleThemeButton';


const { Header, Sider } = Layout;
function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState (false);

  const ToggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: {colorBgContainer}, 
  }= theme.useToken();

  return (
    <Layout>
    <Sider collapsed={collapsed} collapsible  trigger= {null} theme = {darkTheme ? 'dark' : 'light'} 
    className="sidebar">
    <Logo/>
    <MenuList darkTheme = {darkTheme}/>
    <ToggleThemeButton darkTheme = {darkTheme} ToggleTheme = {ToggleTheme}/>
    
    </Sider>
    <Header style={{padding: 0, background: colorBgContainer }}>

      <Button  type= 'text'
      className='toggle'
      onClick={()=> setCollapsed(!collapsed)}
      icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/> } />
    </Header>
    </Layout>

  );
}
export default App;
///projecto 