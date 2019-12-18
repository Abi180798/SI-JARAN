import React from 'react'
import { Layout, Card, Table } from 'antd'
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
                      <h3><text>Universitas Mataram memiliki kendaraan umum untuk digunakan demi kebutuhan umum warga Universitas Mataram. Kendaraan ini dapat digunakan untuk warga Universitas Mataram dengan ketentuan yang terlampir pada sistematis kepengurusan di Rektorat Universitas Mataram. Tentunya terdapat prasyarat untuk dapat memperoleh kendaraan tersebut sebagaimana terdapat pada prosedur peminjaman yang terlampir.</text> </h3>
                      <div align="center">
                        <img src="http://skifkunram.com/site/wp-content/uploads/2017/04/DSC_2747-Small.jpg"
                          style={{
                            width: 700,
                          }}></img>
                      </div>
                      <h2><b>Adapun prosedur yang harus dilakukan dalam peminjaman kendaraan meliputi :</b></h2>
                      <ul>
                        <li>
                          <h3>Membuat surat pengajuan peminjaman kendaraan ke Rektorat Unram</h3>
                        </li>
                        <li>
                          <h3>Isi surat harus jelas sepeti contoh yang dilampirkan</h3>
                          <div align="center">
                            <img src={peminjaman} style={{
                              width: 500,
                            }}></img>
                          </div>
                          <text>Bagian dari pembentukan sudat terdapat: Kopsurat asal fakultas yang diutus, Waktu, Nomor Surat, Perihal pengajuan surat, Utusan surat, Salam pembuka, Isi surat (lengkap dengan waktu peminjaman), Salam penutup, Tertera untuk Ketua kegiatan, Sekertaris Kegiatan, dan Mengetahui Dekan Fakultas  </text>
                        </li>
                        <li>
                          <h3>Sampaikan ke pada protokol terkait peminjaman kendaraan dan menunggu pengarahan</h3>
                        </li>
                        <li>
                          <h3>Menunggu konfirmasi selanjutnya dengan pencocokan data kendaraan</h3>
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