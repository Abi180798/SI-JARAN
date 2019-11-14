import React from 'react'
import { Layout, Card } from 'antd'
import { Switch, Route } from 'react-router-dom'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { Typography, Divider } from 'antd';
const peminjaman = require('../../Static/img/peminjaman-benar.jpg')

const { Title, Paragraph, Text } = Typography;

const Tentang = () => {
  return (
    <div>
      <Layout className="layout">
        <Header kunci='3' />
        <Layout.Content style={{ padding: '50px 50px' }}>
          <Switch>
            <Route exact path="/tentang">
              <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title="Tentang" bordered={false} style={{ height: '100%' }}>

                  <Typography>
                    <Title>Pendahuluan</Title>
                    <Paragraph>
                      <text strong > <b>Universitas Mataram memiliki kendaraan umum untuk digunakan  demi kebutuhan umum masyarakat Universitas.
                        </b></text>
                      <div align="center">
                        <img src="http://skifkunram.com/site/wp-content/uploads/2017/04/DSC_2747-Small.jpg"
                          style={{
                            width: 500,
                          }}></img>
                      </div>
                      Adapun prosedur yang harus dilakukan dalam peminjaman kendaraan meliputi :
                      <ul>
                        <li>
                          <b>Membuat surat pengajuan peminjaman kendaraan ke Rektorat Unram</b>
                        </li>
                        <li>
                          <b>Isi surat harus jelas sepeti contoh yang dilampirkan</b>
                          <div align="center">

                            <img src={peminjaman} style={{
                              width: 300,
                            }}></img>
                          </div>
                        </li>
                        <li>
                          <b>Sudah diketahui oleh pihak Rektorat</b>
                        </li>
                        <li>
                          <b>Menunggu konfirmasi selanjutnya dengan pencocokan data kendaraan</b>
                        </li>
                      </ul>
                    </Paragraph>




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
export default Tentang;