import React from 'react'
import { Layout, Menu, Dropdown, Avatar, Icon } from 'antd'
import { Link } from 'react-router-dom'
import fconfig from '../config/fconfig'
import { useAuthState } from 'react-firebase-hooks/auth'


const Header = props => {

  const { Header } = Layout
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/daftarkendaraan">Daftar Kendaraan</Link>
      </Menu.Item>
      <Menu.Item key="1">

        <Link to="/daftarpeminjaman">Daftar Peminjaman</Link>
      </Menu.Item>
    </Menu>
  );
  const logout = () => {
    fconfig.auth().signOut();

  };
  const [user] = useAuthState(fconfig.auth());
  const menulogin = () => {
    if (user) {
      return (
        <div>
          <Link style={{ float: "right", color: "#fff" }} to="/login" onClick={logout}><Icon type="logout" />Logout</Link>
          <Link style={{ float: "right", color: "#fff", paddingRight: 20 }} to="/dashboardadmin"><Icon type="dashboard" />DashboardAdmin</Link>
        </div>
      )

    } else {
      return <Link style={{ float: "right", color: "#fff" }} to="/login"><Icon type="login" />Login</Link>

    }
  }
  return (
    <Header style={{ background: "#2c3e50" }}>
      <div>
        {menulogin()}
        {/* <Link style={{ float: "right", color: "#fff" }} to="/login"><Icon type="login" />Login</Link> */}
        <Link style={{ color: "#fff" }} to="/"><Avatar size="large" icon="user" style={{ marginRight: 10 }} />SISTEM INFORMASI PEMINJAMAN KENDARAAN</Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={props.kunci}
        style={{ lineHeight: '50px', borderRadius: "0px 0px 10px 10px" }}
      >
        <Menu.Item key="1"><Link to="/" />Home</Menu.Item>
        <Menu.Item key="2">
          <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
            <a className="ant-dropdown-link">
              Opsi<Icon type="down" />
            </a>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="3"><Link to="/tentang" />Tentang</Menu.Item>
      </Menu>
    </Header>
  )
}
export default Header;