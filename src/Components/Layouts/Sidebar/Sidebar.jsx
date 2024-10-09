import { Layout } from 'antd';
const { Sider } = Layout;

import SidebarFooter from './SidebarFooter';
import SidebarMenu from './SidebarMenu';

const Sidebar = ({ navigate }) => {
  return (
    <Sider
      width="250px"
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        height: '100vh',
        background: '#000',
      }}
    >
      <div className="h-[100vh] flex flex-col justify-between">
        <SidebarMenu navigate={navigate} />
        <SidebarFooter />
      </div>
    </Sider>
  );
};

export default Sidebar;