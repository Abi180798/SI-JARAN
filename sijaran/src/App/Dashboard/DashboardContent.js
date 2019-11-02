import React from 'react'
import { Carousel, Row, Col, Card } from 'antd'


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
          <img src="https://www.pscoaches.com.au/wp-content/uploads/2019/02/port-stephens-coaches-5-star-coach-3-1024x683.jpg" style={{ height: 460, width: '100%' }}></img>
        </div>
        <div>
          <img src="https://hpa2015unram.files.wordpress.com/2015/02/transportation-in-lombok-transportasi-bis-bus-damri-di-lombok_4.jpg" style={{ height: 460, width: "100%" }}></img>
        </div>
        <div>
          <img src="http://news.unair.ac.id/wp-content/uploads/2018/12/WhatsApp-Image-2018-12-21-at-16.23.52-1-1024x709.jpeg" style={{ height: 460, width: "100%" }}></img>
        </div>
        <div>
          <img src="https://1.bp.blogspot.com/-y4uZGzcyuqY/XLmiHs8L24I/AAAAAAAAAFw/VdnFHrN6IuYEZpvW5DPaTLfABobHCPwjgCEwYBhgL/s1600/abiyyu_wijaya410-1555329748274.jpg" style={{ height: 460, width: "100%" }}></img>
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