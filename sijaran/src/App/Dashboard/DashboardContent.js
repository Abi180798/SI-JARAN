import React from 'react'
import { Carousel, Row, Col, Card, Button, Icon } from 'antd'
import img1 from '../../Static/img/img1.jpg'
import img2 from '../../Static/img/img2.jpg'
import img3 from '../../Static/img/img3.jpg'
import img4 from '../../Static/img/img4.jpg'
import mobil from '../../Static/img/mobil.jpg'
import motor from '../../Static/img/yamaha.jpg'
import bus from '../../Static/img/busz.png'


const DashboardContent = () => {
  return (
    <div style={{ background: '#fff', padding: 24, minHeight: 280, height: "100%" }}>
      <Carousel autoplay effect="fade" style={{
        textAlign: "center",
        background: "#f22344",
        lineHeight: 10,
        overflow: "hidden",
        height: 460,
        borderRadius: "25px 25px 0px 0px",
      }}>
        <div>
          <img src={img1} style={{ height: 460, width: '100%' }}></img>
        </div>
        <div>
          <img src={img2} style={{ height: 460, width: "100%" }}></img>
        </div>
        <div>
          <img src={img3} style={{ height: 460, width: "100%" }}></img>
        </div>
        <div>
          <img src={img4} style={{ height: 460, width: "100%" }}></img>
        </div>
      </Carousel>
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16} >
          <Col xs={24} sm={24} lg={8}>
            <Card title="Bus" bordered={false} style={{ marginTop: 10 }}>
              <img src={bus} style={{ height: 100, width: "100%", padding: 5 }} />
              <h4>Muat sekitar 30 orang</h4>
            </Card>
          </Col>
          <Col xs={24} sm={24} lg={8}>
            <Card title="Mobil" bordered={false} style={{ marginTop: 10 }}>
              <img src={mobil} style={{ height: 100, width: "100%", padding: 5 }} />
              <h4>Muat sekitar 4 orang</h4>
            </Card>
          </Col>
          <Col xs={24} sm={24} lg={8}>
            <Card title="Motor" bordered={false} style={{ marginTop: 10 }}>
              <img src={motor} style={{ height: 100, width: "100%", padding: 5 }} />
              <h4>Muat sekitar 2 orang</h4>
            </Card>
          </Col>
        </Row>
      </div>
      <div style={{ background: '#ECECEC', padding: '0px 30px 30px 30px' }}>
        <Row >
          <Col xs={24} sm={24} lg={24}>
            <Card bordered={false} style={{ marginTop: 10 }}>
              <Row>
                <Col md={12} lg={12}>
                  <Row style={{ paddingTop: 30 }}>
                    <Col md={4}>
                      <Icon type="environment" style={{ fontSize: 30, padding: 5 }} />
                    </Col>
                    <Col md={20}>
                      Address<br />Jl. Gunung Merapi Gg. Merdeka IV<br />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <Icon type="inbox" style={{ fontSize: 30, padding: 5 }} />
                    </Col>
                    <Col md={20}>
                      Have any question?
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <Icon type="phone" style={{ fontSize: 30, padding: 5 }} />
                    </Col>
                    <Col md={20}>
                      087704504919<br />087761674730<br />
                    </Col>
                  </Row>
                </Col>
                <Col md={12} lg={12}>
                  <h3>About Us</h3><br />
                  Sistem Ini memberikan suatu kemudahan informasi dalam meminjam kendaraan bagi masyarakat Universitas Mataram<br />
                  <div style={{ paddingTop: 20 }}>
                    <Icon type="facebook" style={{ fontSize: 30, padding: 5 }} />
                    <Icon type="instagram" style={{ fontSize: 30, padding: 5 }} />
                    <Icon type="twitter" style={{ fontSize: 30, padding: 5 }} />
                    <Icon type="google-plus" style={{ fontSize: 30, padding: 5 }} />
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
          {/* <Col xs={24} sm={24} lg={8}>
            <Card title="Form" bordered={false} style={{ marginTop: 10 }}>
              Form Question
                  </Card>
          </Col> */}
        </Row>
      </div>
    </div>
  )
}
export default DashboardContent;