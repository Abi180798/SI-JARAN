import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import fconfig from '../../config/fconfig'
import { useDocument } from 'react-firebase-hooks/firestore';
import DKAEditForm from './DKAEditForm'

const DKAdminEditContent = (props) => {
  const dummy = []
  const [value, loading, error] = useDocument(
    fconfig.firestore().doc(`kendaraan/${props.id}`),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const [plat, setPlat] = useState('')
  const [jenis, setJenis] = useState('')
  const [merk, setMerk] = useState('')
  const [status, setStatus] = useState('')

  // const [keyy, setKeyy] = useState('')


  // fconfig.firestore().collection('kendaraan').doc(props.id).get().then(doc => {
  //     const data = doc.data()
  //     jeniss.push(data.jenis)
  // })
  // fconfig.firestore().collection('kendaraan').doc(props.id).get().then(doc => {
  //     const data = doc.data()
  //     merkk.push(data.merk)
  // })
  // fconfig.firestore().collection('kendaraan').doc(props.id).get().then(doc => {
  //     const data = doc.data()
  //     statuss.push(data.status)
  // })

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
  // fconfig.firestore().collection('kendaraan').doc(props.id).get().then(doc => {
  //   const data = doc.data()
  //   shit.push(`${data.plat}`)
  //   // console.log(shit)
  // })
  // if (shit.length > 0) {
  //   console.log(shit)
  // }
  return (
    <div>
      < p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Loading...</span>}
        {value && dummy.push(value.data()), dummy.map(doc => (doc.plat))}
        {/* {console.log(value && value.data()} */}
        {value && dummy.map(doc => (doc.plat))}
      </p>
      <DKAEditForm datas={value && value.data()} />


    </div>
  )
}
// 
export default DKAdminEditContent;