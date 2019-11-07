import React from 'react'
import { Form, Input, Button, Select, Typography } from 'antd'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import fconfig from '../../config/fconfig'
import Title from 'antd/lib/typography/Title'


const DKAEditForm = ({ values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue
}) => {

  return (
    <div>
      <Typography>
        <Title>Edit Kendaraan</Title>
        <Form onSubmit={handleSubmit} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} style={{ margin: "50px 200px 0px" }}>
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
          <Form.Item label="Jenis Kendaraan">
            <Select
              name="jenis"
              size="small"
              onChange={e => setFieldValue('jenis', e)}
              defaultValue=""
              value={values.jenis}
            >
              <Select.Option value="Bus">Bus</Select.Option>
              <Select.Option value="Mobil">Mobil</Select.Option>
              <Select.Option value="Motor">Motor</Select.Option>
            </Select>
            {errors.jenis && touched.jenis && <div>{errors.jenis}</div>}
          </Form.Item>
          <Form.Item label="Merk Kendaraan">
            <Input
              name="merk"
              type="text"
              placeholder="Merk Kendaraan"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.merk}
            />
            {errors.merk && touched.merk && <div>{errors.merk}</div>}
          </Form.Item>
          <Form.Item label="Status Kendaraan">
            <Select
              name="status"
              size="small"
              onChange={e => setFieldValue('status', e)}
              defaultValue=""
              value={values.status}
            >
              <Select.Option value="Tidak Dipinjam">Tidak Dipinjam</Select.Option>
              <Select.Option value="Dipinjam">Dipinjam</Select.Option>
            </Select>
            <Input
              name="id"
              type="text"
              placeholder="ID Kendaraan"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.key}
              style={{ display: 'none' }}
            />
            {errors.status && touched.status && <div>{errors.status}</div>}
            <div style={{ paddingTop: 20 }}>

              <Button htmlType='button' style={{
                float: "right"
              }}><Link to="/dkadmin">Kembali</Link></Button>
              <Button htmlType="submit">Submit</Button>
            </div>
          </Form.Item>
        </Form>
      </Typography>
    </div>
  )
}
export default withFormik({
  mapPropsToValues: props => {
    if (props !== []) {
      const platt = props.platt.toString()
      const jeniss = props.jeniss.toString()
      const merkk = props.merkk.toString()
      const statuss = props.statuss.toString()
      const id = props.id.toString()
      return {
        plat: platt || '',
        jenis: jeniss || '',
        merk: merkk || '',
        status: statuss || '',
        key: id || ''
      }
    }
  },
  validationSchema: () => {
    const message = "Harus di isi"
    return Yup.object().shape({
      plat: Yup.string().max(8, "Plat harus valid").required(message),
      jenis: Yup.string().required(message),
      merk: Yup.string().required(message),
      status: Yup.string().required(message),
    })
  },
  handleSubmit: (values, { setSubmitting, props }) => {

    setTimeout(() => {
      try {
        const editgan = fconfig.firestore().collection('kendaraan').doc(props.id).set(values)
        if (editgan != null) {
          alert('berhasil')
        }
      } catch (e) {
        setSubmitting(false);
      }
    }, 1000);
  },
})(DKAEditForm)