import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Auth/Login'
import Dashboard from './Dashboard/Dashboard'
import DaftarKendaraan from './DaftarKendaraan/DaftarKendaraan'
import Tentang from './Tentang/Tentang'
import DaftarPeminjaman from './DaftarPeminjaman/DaftarPeminjaman'
import DashboardAdmin from './DashboardAdmin/DashboardAdmin'
import DaftarKendaraanAdmin from './DaftarKendaraanAdmin/DaftarKendaraanAdmin'
import DaftarPeminjamanAdmin from './DaftarPeminjamanAdmin/DaftarPeminjamanAdmin'
import DKAdminEdit from './DaftarKendaraanAdmin/DKAdminEdit'
import DPAdminEdit from './DaftarPeminjamanAdmin/DPAdminEdit'

const MainApp = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login/" exact component={Login} />
          <Route path="/dashboard/" exact component={Dashboard} />
          <Route path="/dashboardadmin/" exact component={DashboardAdmin} />
          <Route path="/dkadmin"><DaftarKendaraanAdmin /></Route>
          <Route path="/:id/edit/dkadmin" exact children={<DKAdminEdit />}></Route>
          <Route path="/:id/edit/dpadmin" exact children={<DPAdminEdit />}></Route>
          <Route path="/dpadmin"><DaftarPeminjamanAdmin /></Route>
          <Route path="/daftarkendaraan/" exact component={DaftarKendaraan} />
          <Route path="/daftarpeminjaman/" exact component={DaftarPeminjaman} />
          <Route path="/tentang/" exact component={Tentang} />
        </Switch>
      </Router>
    </div>
  )
}
export default MainApp;