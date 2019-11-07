import React from 'react'
import { Layout } from 'antd';
import Header from '../../Components/Header';
import DashboardContent from './DashboardContent'
import Footer from '../../Components/Footer'

const Dashboard = () => {
  return (
    <div>
      <Layout className="layout">
        <Header kunci='1' />
        <Layout.Content style={{ padding: '50px 50px' }}>
          <DashboardContent />
        </Layout.Content>
        <Footer />
      </Layout>,
    </div >
  )
}
export default Dashboard;