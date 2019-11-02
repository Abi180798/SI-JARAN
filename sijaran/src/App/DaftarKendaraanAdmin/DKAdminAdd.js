import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import fconfig from '../../config/fconfig'
import { useCollection } from 'react-firebase-hooks/firestore';

const DKAdminAdd = () => {
  const [plat, setPlat] = useState('')
  const [jenis, setJenis] = useState('')
  const [merk, setMerk] = useState('')
  const [status, setStatus] = useState('')
  // const [keyy, setKeyy] = useState('')
  function onSubmit(e) {
    e.preventDefault()
    const doc = fconfig.firestore().collection('kendaraan').doc()
    doc.set({ plat, jenis, merk, status, key: doc.id }).then(() => {
      setPlat('')
      setJenis('')
      setMerk('')
      setStatus('')
    })
    // console.log(key)
  }
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Item label="Plat Kendaraan">
          <Input
            name="plat"
            type="text"
            placeholder="Plat Kendaraan"
            onChange={e => setPlat(e.currentTarget.value)}
            // onBlur={handleBlur}
            value={plat}
          />
          {/* {errors.plat && touched.plat && <div>{errors.plat}</div>} */}

        </Form.Item>
        <Form.Item label="Jenis Kendaraan">
          <Input
            name="jenis"
            type="text"
            placeholder="Jenis Kendaraan"
            onChange={e => setJenis(e.currentTarget.value)}
            // onBlur={handleBlur}
            value={jenis}
          />
          {/* {errors.jenis && touched.jenis && <div>{errors.jenis}</div>} */}

        </Form.Item>
        <Form.Item label="Merk Kendaraan">
          <Input
            name="merk"
            type="text"
            placeholder="Merk Kendaraan"
            onChange={e => setMerk(e.currentTarget.value)}
            // onBlur={handleBlur}
            value={merk}
          />
          {/* {errors.merk && touched.merk && <div>{errors.merk}</div>} */}

        </Form.Item>
        <Form.Item label="Status Kendaraan">
          <Input
            name="status"
            type="text"
            placeholder="Status Kendaraan"
            onChange={e => setStatus(e.currentTarget.value)}
            // onBlur={handleBlur}
            value={status}
          />
          {/* <Input
            style={{ display: 'none' }}
            name="status"
            type="text"
            placeholder="Status Kendaraan"
            onChange={e => setKeyy(e.currentTarget.value)}
            // onBlur={handleBlur}
            value={keyy}
          /> */}
          {/* {errors.status && touched.status && <div>{errors.status}</div>} */}
          <div style={{ paddingTop: 20 }}>

            <Button htmlType='button' style={{
              float: "right"
            }}><Link to="/">Kembali</Link></Button>
            <Button htmlType="submit">Submit</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  )
}
// const FormikApp = withFormik({
//   mapPropsToValues: ({ plat, jenis, merk, status }) => ({
//     plat: plat || '',
//     jenis: jenis || '',
//     merk: merk || '',
//     status: status || ''
//   }),
//   validationSchema: () => {
//     const message = "Harus di isi"
//     return Yup.object().shape({
//       plat: Yup.string().max(8, "Plat harus valid").required(message),
//       jenis: Yup.string().required(message),
//       merk: Yup.string().required(message),
//       status: Yup.string().required(message),
//     })
//   },
//   handleSubmit: (values, { setSubmitting, props }) => {

//     setTimeout(() => {
//       try {
//         console.log(values);
//       } catch (e) {
//         setSubmitting(false);
//       }
//     }, 1000);
//   },

// })(DKAdminAdd);
export default DKAdminAdd;