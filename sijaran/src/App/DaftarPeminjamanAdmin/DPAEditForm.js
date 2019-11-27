import React, { useState } from 'react'
// import { Form, Input, Button, Select, Spin } from 'antd'
// import fconfig from '../../config/fconfig'
// import { useCollection } from 'react-firebase-hooks/firestore';
// import { DatePicker } from 'antd';
// var moment = require('moment');

// const { RangePicker } = DatePicker;
// const DPAdminAdd = (props) => {
//   const [peminjam, setPeminjam] = useState('')
//   const [kegiatan, setKegiatan] = useState('')
//   const [key_k, setKey_K] = useState('')
//   const [sdate, setSDate] = useState('')
//   const [edate, setEDate] = useState('')

//   const [value, loading, error] = useCollection(
//     fconfig.firestore().collection('kendaraan'),
//     {
//       snapshotListenOptions: { includeMetadataChanges: true },
//     }
//   );
//   const dummy = []

//   function onSubmit(e) {
//     e.preventDefault()
//     if (peminjam !== '' && kegiatan !== '' && key_k !== '' && sdate !== '' && edate !== '') {
//       console.log(peminjam)
//       console.log(kegiatan)
//       console.log(key_k)
//       console.log(sdate)
//       console.log(edate)
//       if (props.key_kk !== key_k) {
//         const doc = fconfig.firestore().collection('pinjam').doc()
//         const hasil = doc.set({ peminjam, kegiatan, key_k, tgl_pinjam: sdate[0], tgl_kembali: edate[1], key: doc.id }).then(() => {
//           setPeminjam('')
//           setKegiatan('')
//           setKey_K('')
//           setSDate('')
//           setEDate('')
//         })
//         if (hasil !== null) {
//           alert('berhasil')
//           { dummy.filter((doc => doc.key === key_k)).map(doc => fconfig.firestore().collection('kendaraan').doc(key_k).set({ key: key_k, plat: doc.plat, jenis: doc.jenis, merk: doc.merk, status: "Dipinjam" })) }

//         }
//       }
//     } else {
//       console.log(peminjam)
//       console.log(kegiatan)
//       console.log(key_k)
//       console.log(sdate)
//       console.log(edate)
//       alert('gagal')
//     }
//   }
//   const waitData = () => {

//     if (!dummy === []) {
//       return (

//         <Spin />
//       )
//     }
//   }
//   function onChange(date, dateString) {
//     setSDate(dateString[0])
//     setEDate(dateString[1])
//     // console.log(dateString[0])
//     // console.log(dateString[1])
//     console.log(date)
//   }
//   console.log(props.id)
//   return (
//     <div>
//       {waitData()}
//       < p style={{ display: 'none' }}>
//         {error && <strong>Error: {JSON.stringify(error)}</strong>}
//         {loading && <span>Loading...</span>}
//         {value && (
//           <span>
//             Collection:
//               {value.docs.map(doc => (
//               <React.Fragment key={doc.id}>
//                 {dummy.push(doc.data())},{''}
//               </React.Fragment>
//             ))}
//           </span>
//         )}
//       </p>
//       <Form onSubmit={onSubmit}>
//         <Form.Item label="Nama Peminjam">
//           <Input
//             name="peminjam"
//             type="text"
//             placeholder="Nama Peminjam"
//             onChange={e => setPeminjam(e.currentTarget.value)}
//             value={peminjam || props.peminjamm}
//           />
//         </Form.Item>
//         <Form.Item label="Kegiatan">
//           <Input
//             name="kegiatan"
//             type="text"
//             placeholder="Kegiatan"
//             onChange={e => setKegiatan(e.currentTarget.value)}
//             value={kegiatan || props.kegiatann}
//           />
//         </Form.Item>
//         <Form.Item label="Pilih Kendaraan">
//           <Select
//             name="key_k"
//             size="large"
//             onChange={e => setKey_K(e)}
//             defaultValue={props.key_kk}
//           >
//             {dummy.filter((doc => doc.key === props.key_kk.toString())).map(doc => (<Select.Option value={doc.key} key={doc.key}>Plat:{doc.plat}, Jenis:{doc.jenis}, Merk:{doc.merk}</Select.Option>))}
//             {dummy.filter((doc => doc.status === "Tidak Dipinjam")).map(doc => (<Select.Option value={doc.key} key={doc.key}>Plat:{doc.plat}, Jenis:{doc.jenis}, Merk:{doc.merk}</Select.Option>))}
//           </Select>
//         </Form.Item>
//         <Form.Item label="Pilih tanggal peminjaman">
//           <RangePicker onChange={e => onChange} defaultValue={[moment(props.tgl_pinjamm.toString()),
//           moment(props.tgl_kembalii.toString())]} />
//           <div style={{ paddingTop: 20 }}>
//             <Button htmlType="submit">Submit</Button>
//           </div>
//         </Form.Item>

//       </Form>
//     </div>
//   )
// }
// export default DPAdminAdd;
// import React from 'react'
import { Form, Input, Button, Select, Typography, Spin, Divider } from 'antd'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import fconfig from '../../config/fconfig'
import Title from 'antd/lib/typography/Title'
import FormikErrorFocus from 'formik-error-focus'
import Swal from 'sweetalert2'
import { useCollection } from 'react-firebase-hooks/firestore';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

var moment = require('moment');

const DPAEditForm = ({ values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue
}) => {
  const [sdate, setSDate] = useState('')
  const [edate, setEDate] = useState('')
  const [value, loading, error] = useCollection(
    fconfig.firestore().collection('kendaraan'),
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
  function onChange(date, dateString) {
    setSDate(dateString[0])
    setEDate(dateString[1])

    // console.log(dateString[0])
    // console.log(dateString[1])
    console.log(date)
  }
  // console.log(dummy)
  return (
    <div>
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
      <Typography>
        <Title>Edit Kendaraan</Title>
        <Form onSubmit={handleSubmit} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} style={{ margin: "50px 50px 0px" }}>
          <Form.Item label="Nama Peminjam">
            <Input
              name="peminjam"
              type="text"
              placeholder="Nama Peminjam"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.peminjam}
            />
            {errors.peminjam && touched.peminjam && <div>{errors.peminjam}</div>}
          </Form.Item>
          <Form.Item label="Kegiatan">
            <Input
              name="kegiatan"
              type="text"
              placeholder="Kegiatan"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.kegiatan}
            />
            {errors.kegiatan && touched.kegiatan && <div>{errors.kegiatan}</div>}

          </Form.Item>
          <Form.Item label="Pilih Kendaraan">
            <Select
              name="key_k"
              size="large"
              onChange={e => setFieldValue('key_k', e)}
              defaultValue={values.key_k}
              value={values.key_k}
            >
              {/* {dummy.filter((doc => doc.key === props.key_kk.toString())).map(doc => (<Select.Option value={doc.key} key={doc.key}>Plat:{doc.plat}, Jenis:{doc.jenis}, Merk:{doc.merk}</Select.Option>))} */}
              {dummy.filter((doc => doc.status === "Dipinjam")).map(doc => (<Select.Option value={doc.key} key={doc.key}>Plat:{doc.plat}, Jenis:{doc.jenis}, Merk:{doc.merk}</Select.Option>))}
              {dummy.filter((doc => doc.status === "Tidak Dipinjam")).map(doc => (<Select.Option value={doc.key} key={doc.key}>Plat:{doc.plat}, Jenis:{doc.jenis}, Merk:{doc.merk}</Select.Option>))}
            </Select>
            {errors.key_k && touched.key_k && <div>{errors.key_k}</div>}

          </Form.Item>
          <Form.Item label="Pilih tanggal peminjaman">
            {/* <RangePicker
              // name="tgl"
              // onChange={e => onChange}
            // defaultValue={[moment(props.tgl_pinjamm.toString()),
            // moment(props.tgl_kembalii.toString())]} 
            /> */}
            {/* {errors.peminjam && touched.peminjam && <div>{errors.peminjam}</div>} */}
            <DatePicker
              name="tgl_pinjam"
              onChange={e => setFieldValue('tgl_pinjam', moment(e).format("YYYY-MM-DD"))}
              defaultValue={moment(values.tgl_pinjam, "YYYY-MM-DD")}
            /> ~
            <DatePicker
              name="tgl_kembali"
              onChange={e => setFieldValue('tgl_kembali', moment(e).format("YYYY-MM-DD"))}
              defaultValue={moment(values.tgl_kembali, "YYYY-MM-DD")}
            />
            <div style={{ paddingTop: 20 }}>
              <Button htmlType="submit">Submit</Button>
            </div>
          </Form.Item>
          <FormikErrorFocus
            // See scroll-to-element for configuration options: https://www.npmjs.com/package/scroll-to-element
            offset={0}
            align={'top'}
            focusDelay={200}
            ease={'linear'}
            duration={1000}
          />
        </Form>
      </Typography>
    </div>
  )
}
export default withFormik({
  mapPropsToValues: (props) => {
    if (props !== []) {
      // console.log(props)
      const peminjam = props.peminjamm.toString()
      const kegiatan = props.kegiatann.toString()
      const key_k = props.key_kk.toString()
      const tgl_pinjam = props.tgl_pinjamm.toString()
      const tgl_kembali = props.tgl_kembalii.toString()
      const id = props.id.toString()
      return {
        peminjam: peminjam || '',
        kegiatan: kegiatan || '',
        key_k: key_k || '',
        tgl_pinjam: tgl_pinjam || '',
        tgl_kembali: tgl_kembali || '',
        key: id || ''
      }
    }
  },
  validationSchema: () => {
    const message = "Harus di isi"
    return Yup.object().shape({
      peminjam: Yup.string().required(message),
      kegiatan: Yup.string().required(message),
      key_k: Yup.string().required(message),
      tgl_pinjam: Yup.string().required(message),
      tgl_kembali: Yup.string().required(message),
    })
  },
  handleSubmit: (values, { setSubmitting, props }) => {

    setTimeout(() => {
      try {
        // console.log(values)
        // const doc = fconfig.firestore().collection('pinjam').doc()
        // const hasil = doc.set({ peminjam, kegiatan, key_k, tgl_pinjam: sdate[0], tgl_kembali: edate[1], key: doc.id })
        const editgan = fconfig.firestore().collection('pinjam').doc(props.id).set(values)
        // console.log(editgan)
        if (editgan != null) {
          Swal.fire(
            'Berhasil',
            ' ',
            'success'
          )
          fconfig.firestore().collection('kendaraan').doc(values.key_k).get().then(doc => {
            const data = doc.data()
            if (data.key === values.key_k) {
              console.log(data.key)
              fconfig.firestore().collection('kendaraan').doc(values.key_k).set({ key: values.key_k, plat: data.plat, jenis: data.jenis, merk: data.merk, status: "Dipinjam" })
              if (values.key_k !== props.key_kk) {
                fconfig.firestore().collection('kendaraan').doc(props.key_kk.toString()).set({ key: props.key_kk.toString(), plat: data.plat, jenis: data.jenis, merk: data.merk, status: "Tidak Dipinjam" })
              }
            }
          })
        }
      } catch (e) {
        setSubmitting(false);
      }
    }, 1000);
  },
})(DPAEditForm)