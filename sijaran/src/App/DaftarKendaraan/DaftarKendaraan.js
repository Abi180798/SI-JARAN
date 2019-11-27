import React from 'react'
import { Layout, Card, Table, Divider, Tag, Menu, Spin, Typography, Dropdown, Button } from 'antd'
import Header from '../../Components/Header'
import { Switch, Route } from 'react-router-dom'
import Footer from '../../Components/Footer'
import { useCollection } from 'react-firebase-hooks/firestore';
import fconfig from '../../config/fconfig'
import { Link } from 'react-router-dom'
import Title from 'antd/lib/typography/Title';
const DaftarKendaraan = () => {
  const [value, loading, error] = useCollection(
    fconfig.firestore().collection('kendaraan'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const dummy = []

  const waitData = () => {

    if (!dummy === []) {
      return (

        <Spin />
      )
    }
  }
  const columns = [
    {
      title: 'Plat',
      dataIndex: 'plat',
      key: 'plat',
    },
    {
      title: 'Jenis Kendaraan',
      dataIndex: 'jenis',
      key: 'jenis',
    },
    {
      title: 'Merk Kendaraan',
      dataIndex: 'merk',
      key: 'merk',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];
  return (
    <div>
      <Layout className="layout">
        <Header kunci='2' />
        <Layout.Content style={{ padding: '50px 50px' }}>
          <Switch>
            <Route path="/daftarkendaraan">
              <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card bordered={false} style={{ height: '100vh' }}>
                  <Typography>

                    <Title>Daftar Kendaraan</Title>
                    <Table columns={columns} dataSource={dummy} />

                    {waitData()}
                    < p style={{ display: 'none' }}>
                      {error && <strong>Error: {JSON.stringify(error)}</strong>}
                      {loading && <span>Loading...</span>}
                      {value && (
                        <span>
                          Collection:
              {value.docs.map(doc => (
                            <React.Fragment key={doc.id}>
                              {dummy.push(doc.data())},{''}
                            </React.Fragment>
                          ))}
                        </span>
                      )}
                    </p>
                  </Typography>
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
export default DaftarKendaraan;