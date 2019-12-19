import React, { useState } from 'react'
import fconfig from '../config/fconfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Redirect, Link, Switch, Route } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import DashboardAdminContent from '../App/DashboardAdmin/DashboardAdminContent'
import DKAdminEditContent from '../App/DaftarKendaraanAdmin/DKAdminEditContent'
import DPAdminEditContent from '../App/DaftarPeminjamanAdmin/DPAdminEditContent'
import Swal from 'sweetalert2'

const HeaderAdmin = (props) => {
  const [user] = useAuthState(fconfig.auth());
  const logout = () => {
    Swal.fire({
      title: 'Apakah Anda Yakin?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Logout!',
      cancelButtonText: 'Kembali'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Berhasil!',
          ' ',
          'success'
        )
        fconfig.auth().signOut();
      }
    })


  };
  function delItem(isi) {
    Swal.fire({
      title: 'Apakah Anda Yakin?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Hapus!',
      cancelButtonText: 'Kembali'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Terhapus!',
          ' ',
          'success'
        )
        fconfig.firestore().collection('kendaraan').doc(isi).delete()
      }
    })
  }
  const [collapsed, setCollapsed] = useState(false)
  const { Header, Sider, Content } = Layout;
  if (user) {
    return (
      <div>
        <Layout style={{ height: '100vh' }}>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" style={{ fontSize: 17, color: "#ffffff", paddingTop: 20, paddingLeft: 10 }}>
              <Icon type="user" />
              <span>
                SIJARAN
              </span>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={props.kunci} style={{ paddingTop: 35 }}>
              <Menu.Item key="1">
                <Link to="/dashboardadmin"><Icon type="dashboard" />
                  <span>Dashboard</span></Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/dkadmin"><Icon type="database" />
                  <span>Daftar Kendaraan</span></Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/dpadmin"><Icon type="hdd" />
                  <span>Daftar Peminjaman</span></Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Link style={{ float: "right", paddingRight: 30, color: "black" }} to="/login" onClick={logout}><Icon type="logout" />Logout</Link>
              <p style={{ float: "right", paddingRight: 30, color: "black" }} to="/login"><Icon type="user" />{user.email}</p>
              <Icon
                style={{ paddingLeft: 20, fontSize: 20, paddingRight: 20 }}
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={() => setCollapsed(!collapsed)}
              />
              <span style={{ fontSize: 20, fontWeight: "bold" }}>
                Sistem Informasi Peminjaman Kendaraan Universitas Mataram
              </span>
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
                height: '100%'
              }}
            >
              <Switch>
                <Route exact path="/dashboardadmin" component={DashboardAdminContent}></Route>
                <Route exact path="/dkadmin" component={props.component}></Route>
                <Route exact path="/:id/edit/dkadmin" ><DKAdminEditContent id={props.id} /></Route>
                <Route exact path="/:id/edit/dpadmin" ><DPAdminEditContent id={props.id} /></Route>
                <Route exact path="/dpadmin" component={props.component}></Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }

  return <Redirect to='/login'></Redirect>
}
export default HeaderAdmin;