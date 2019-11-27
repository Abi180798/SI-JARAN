import React from 'react'
import { Layout, Card, Table, Divider, Tag } from 'antd'
import Header from '../../Components/Header'
import { Switch, Route } from 'react-router-dom'
import Footer from '../../Components/Footer'
import { useCollection } from 'react-firebase-hooks/firestore';
import fconfig from '../../config/fconfig'
import { Typography, Button, Modal, Icon, Spin, Menu, Dropdown } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

const DaftarPeminjaman = () => {
  const [value, loading, error] = useCollection(
    fconfig.firestore().collection('pinjam'),
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
      title: 'Peminjam',
      dataIndex: 'peminjam',
      key: 'peminjam',
    },
    {
      title: 'Kegiatan',
      dataIndex: 'kegiatan',
      key: 'kegiatan',
    },
    {
      title: 'Tanggal Pinjam',
      dataIndex: 'tgl_pinjam',
      key: 'tgl_pinjam',
    },
    {
      title: 'Tanggal Kembali',
      dataIndex: 'tgl_kembali',
      key: 'tgl_kembali',
    },
  ];
  return (
    <div>
      <Layout className="layout">
        <Header kunci='2' />
        <Layout.Content style={{ padding: '50px 50px' }}>
          <Switch>
            <Route path="/daftarpeminjaman">
              <div style={{ background: '#ECECEC', padding: '30px' }}>
                <div>
                  <Card bordered={false} style={{ height: '100vh' }}>
                    <Typography>


                      <Title>Daftar Peminjam</Title>
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
                </div>
              </div>,
                        </Route>
          </Switch>
        </Layout.Content>
        <Footer />
      </Layout>,
        </div >
  )
}
export default DaftarPeminjaman;