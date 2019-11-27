import React, { useState } from 'react'
import { Form, Input, Button, Select } from 'antd'
import fconfig from '../../config/fconfig'
import Swal from 'sweetalert2'

const DKAdminAdd = () => {
  const [plat, setPlat] = useState('')
  const [jenis, setJenis] = useState('')
  const [merk, setMerk] = useState('')
  const [status, setStatus] = useState('')
  function onSubmit(e) {
    e.preventDefault()
    if (plat != '' && jenis != '' && merk != '' && status != '') {
      const doc = fconfig.firestore().collection('kendaraan').doc()
      const hasil = doc.set({ plat, jenis, merk, status, key: doc.id }).then(() => {
        setPlat('')
        setJenis('')
        setMerk('')
        setStatus('')
      })
      if (hasil != null) {
        Swal.fire(
          'Berhasil',
          ' ',
          'success'
        )
      }
    } else {
      Swal.fire(
        'Gagal',
        ' ',
        'error'
      )
    }
  }
  return (
    <div>
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} onSubmit={onSubmit}>
        <Form.Item label="Plat Kendaraan">
          <Input
            name="plat"
            type="text"
            placeholder="Plat Kendaraan"
            onChange={e => setPlat(e.currentTarget.value)}
            value={plat}
          />
        </Form.Item>
        <Form.Item label="Jenis Kendaraan">
          <Select
            name="jenis"
            size="small"
            onChange={e => setJenis(e)}
            defaultValue=""
          >
            <Select.Option value="Bus">Bus</Select.Option>
            <Select.Option value="Mobil">Mobil</Select.Option>
            <Select.Option value="Motor">Motor</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Merk Kendaraan">
          <Input
            name="merk"
            type="text"
            placeholder="Merk Kendaraan"
            onChange={e => setMerk(e.currentTarget.value)}
            value={merk}
          />
        </Form.Item>
        <Form.Item label="Status Kendaraan">
          <Select
            name="status"
            size="small"
            onChange={e => setStatus(e)}
            defaultValue=""
          >
            <Select.Option value="Tidak Dipinjam">Tidak Dipinjam</Select.Option>
            <Select.Option value="Dipinjam">Dipinjam</Select.Option>
          </Select>
          <div style={{ paddingTop: 20 }}>
            <Button htmlType="submit">Submit</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  )
}
export default DKAdminAdd;