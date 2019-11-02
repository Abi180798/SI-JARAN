import React from 'react'
import { Form, Input, Button } from 'antd'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import fconfig from '../../config/fconfig'
import { useDocument } from 'react-firebase-hooks/firestore';


const DKAEditForm = ({ values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit }) => {

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Item label="Plat Kendaraan">
          <Input
            name="plat"
            type="text"
            placeholder="Plat Kendaraan"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.plat}
          />
          {errors.plat && touched.plat && <div>{errors.plat}</div>}
        </Form.Item>
      </Form>
    </div>
  )
}
export default withFormik({
  mapPropsToValues: props => {
    console.log(props.datas)
    const isi = props.datas
    return {
      plat: ''
    }
  }
})(DKAEditForm)