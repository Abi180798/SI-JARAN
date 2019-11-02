import React from 'react'
import HeaderAdmin from '../../Components/HeaderAdmin'
import DashboardAdminContent from './DashboardAdminContent'


const DashboardAdmin = () => {
  return (
    <HeaderAdmin kunci='1' component={DashboardAdminContent} />
  )
}
export default DashboardAdmin;