import React, { useState } from 'react'
import { Form, Input, Button, Select, Spin } from 'antd'
import fconfig from '../../config/fconfig'
import { useCollection } from 'react-firebase-hooks/firestore';
import { DatePicker } from 'antd';
import Swal from 'sweetalert2'

const { RangePicker } = DatePicker;
const DPAdminAdd = () => {
  const [peminjam, setPeminjam] = useState('')
  const [kegiatan, setKegiatan] = useState('')
  const [key_k, setKey_K] = useState('')
  const [date, setDate] = useState([])

  const [value, loading, error] = useCollection(
    fconfig.firestore().collection('kendaraan'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const dummy = []

  function onSubmit(e) {
    e.preventDefault()
    if (peminjam !== '' && kegiatan !== '' && key_k !== '' && date !== '') {
      const doc = fconfig.firestore().collection('pinjam').doc()
      const hasil = doc.set({ peminjam, kegiatan, key_k, tgl_pinjam: date[0], tgl_kembali: date[1], key: doc.id }).then(() => {
        setPeminjam('')
        setKegiatan('')
        setKey_K('')
        setDate({})
      })
      if (hasil !== null) {
        Swal.fire(
          'Berhasil',
          ' ',
          'success'
        )
        { dummy.filter((doc => doc.key === key_k)).map(doc => fconfig.firestore().collection('kendaraan').doc(key_k).set({ key: key_k, plat: doc.plat, jenis: doc.jenis, merk: doc.merk, status: "Dipinjam" })) }

      }
    } else {
      Swal.fire(
        'Gagal',
        ' ',
        'warning'
      )
    }
  }
  const waitData = () => {

    if (!dummy === []) {
      return (

        <Spin />
      )
    }
  }
  function onChange(date, dateString) {
    setDate(dateString)
    // console.log(dateString[0])
  }
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
      <Form onSubmit={onSubmit}>
        <Form.Item label="Nama Peminjam">
          <Input
            name="peminjam"
            type="text"
            placeholder="Nama Peminjam"
            onChange={e => setPeminjam(e.currentTarget.value)}
            value={peminjam}
          />
        </Form.Item>
        <Form.Item label="Kegiatan">
          <Input
            name="kegiatan"
            type="text"
            placeholder="Kegiatan"
            onChange={e => setKegiatan(e.currentTarget.value)}
            value={kegiatan}
          />
        </Form.Item>
        <Form.Item label="Pilih Kendaraan">
          <Select
            name="key_k"
            size="large"
            onChange={e => setKey_K(e)}
            defaultValue=""
          >
            {dummy.filter((doc => doc.status === "Tidak Dipinjam")).map(doc => (<Select.Option value={doc.key} key={doc.key}>Plat:{doc.plat}, Jenis:{doc.jenis}, Merk:{doc.merk}</Select.Option>))}

            {/* <Select.Option value="Mobil">Mobil</Select.Option>
            <Select.Option value="Motor">Motor</Select.Option> */}
          </Select>
        </Form.Item>
        <Form.Item label="Pilih tanggal peminjaman">
          <RangePicker onChange={onChange} />
          {console.log(date)}
          <div style={{ paddingTop: 20 }}>
            <Button htmlType="submit">Submit</Button>
          </div>
        </Form.Item>

      </Form>
    </div>
  )
}
export default DPAdminAdd;