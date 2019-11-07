import React from 'react'
import { Carousel, Row, Col, Card } from 'antd'
import img1 from '../../Static/img/img1.jpg'
import img2 from '../../Static/img/img2.jpg'
import img3 from '../../Static/img/img3.jpg'
import img4 from '../../Static/img/img4.jpg'


const DashboardContent = () => {
  return (
    <div style={{ background: '#fff', padding: 24, minHeight: 280, height: "100%" }}>
      <Carousel autoplay style={{
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
              Muat sekitar 30 orang
                  </Card>
          </Col>
          <Col xs={24} sm={24} lg={8}>
            <Card title="Mobil" bordered={false} style={{ marginTop: 10 }}>
              Muat sekitar 4 orang
                  </Card>
          </Col>
          <Col xs={24} sm={24} lg={8}>
            <Card title="Motor" bordered={false} style={{ marginTop: 10 }}>
              Muat sekitar 2 orang
                  </Card>
          </Col>
        </Row>
      </div>
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16} >
          <Col xs={24} sm={24} lg={16}>
            <Card title="Penjelasan" bordered={false} style={{ marginTop: 10 }}>
              Penjelasan Sistem
                  </Card>
          </Col>
          <Col xs={24} sm={24} lg={8}>
            <Card title="Form" bordered={false} style={{ marginTop: 10 }}>
              Form Question
                  </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default DashboardContent;