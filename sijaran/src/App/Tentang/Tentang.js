import React from 'react'
import { Layout, Card } from 'antd'
import { Switch, Route } from 'react-router-dom'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'


const Tentang = () => {
  return (
    <div>
      <Layout className="layout">
        <Header kunci='3' />
        <Layout.Content style={{ padding: '50px 50px' }}>
          <Switch>
            <Route exact path="/tentang">
              <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title="Tentang" bordered={false} style={{ height: '100vh' }}>
                  adsadad
                </Card>
              </div>,
            </Route>
            <Route path="/tentang/apagitu">
              <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title="Tentang" bordered={false} style={{ height: '100vh' }}>
                  apa gitu
                </Card>
              </div>,
            </Route>
          </Switch>
        </Layout.Content>
        <Footer />
      </Layout>,
    </div >
  )
}
export default Tentang;