import React from 'react'
import { Card, Form, Input, Button, Row, Col, Spin, Icon } from 'antd'
import { withFormik, } from 'formik'
import * as Yup from 'yup'
import fconfig from '../../config/fconfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Redirect, Link } from 'react-router-dom'


const Login = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit }) => {
  const [user, initialising] = useAuthState(fconfig.auth());
  if (initialising) {
    return (
      <div style={{ textAlign: "center", paddingTop: 300, fontWeight: "italic", fontSize: 30 }}>
        <Spin size="large" />
        <p>Loading...</p>
      </div>
    );
  }
  if (user) {
    return <Redirect to='/dashboardadmin'></Redirect>
  }
  return (
    <div style={{ background: '#bdc3c7', paddingTop: 150, paddingBottom: 150 }}>
      <Row>
        <Col span={8} offset={8}>
          <Card>
            <Form onSubmit={handleSubmit}>
              <h1>Login</h1>
              <Form.Item label="Email">
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name="email"
                  autoComplete="off"
                  placeholder="Masukkan Email"
                />
                {errors.email && touched.email && <div>{errors.email}</div>}
              </Form.Item>
              <Form.Item label="Password">
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                  placeholder="Masukkan Password"
                />
                {errors.password && touched.password && <div>{errors.password}</div>}
              </Form.Item>
              <Button htmlType='button' style={{
                float: "right"
              }}><Link to="/">Kembali</Link></Button>
              <Button htmlType="submit">Submit</Button>

            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
const FormikApp = withFormik({
  mapPropsToValues: ({ email, password }) => ({ email: email || '', password: password || '' }),
  validationSchema: () => {
    const message = "Harus di isi"
    return Yup.object().shape({
      email: Yup.string().email("email harus valid").required(message),
      password: Yup.string().min(5, "minimal 5 karakter").required(message)
    })
  },
  handleSubmit: (values, { setSubmitting, props }) => {

    setTimeout(() => {
      try {
        console.log(values);
        fconfig.auth().signInWithEmailAndPassword(values.email, values.password);
      } catch (e) {
        setSubmitting(false);
      }
    }, 1000);
  },

})(Login);
export default FormikApp;
