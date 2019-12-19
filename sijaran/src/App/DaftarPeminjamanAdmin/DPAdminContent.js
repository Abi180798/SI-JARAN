import React, { useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import fconfig from '../../config/fconfig'
import { Table, Typography, Button, Modal, Icon, Spin, Menu, Dropdown, Card } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Link } from 'react-router-dom'
import DPAdminAdd from './DPAdminAdd';
import Swal from 'sweetalert2'
import { format } from 'date-fns'
const DPAdminContent = () => {
  const [dateNow, setDateNow] = useState("")
  const [visible, setVisible] = useState(false);
  const [value, loading, error] = useCollection(
    fconfig.firestore().collection('pinjam'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const dummy = []
  var tgl = format(new Date(), 'yyyy-MM-dd')
  function delItem(isi) {
    Swal.fire({
      title: 'Apakah Anda Yakin?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Hapus!',
      cancelButtonText: 'Kembali'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Terhapus!',
          ' ',
          'success'
        )
        fconfig.firestore().collection('pinjam').doc(isi).delete()
      }
    })
  }
  // console.log(tgl)
  // dummy.filter(doc => doc.tgl_kembali == tgl).map(doc => dummy.filter(doc => doc.tgl_kembali == tgl).map(fconfig.firestore().collection('pinjam').doc(doc.key).delete()))
  const getActionMenus = object => {
    return (
      <Menu>
        <Menu.Item key="1">
          <p onClick={e => delItem(object.key)}>Delete</p>
        </Menu.Item>
        <Menu.Item key="object-update">
          <Link to={`/${object.key}/edit/dpadmin/`}>Edit</Link>
        </Menu.Item>
      </Menu>
    );
  };
  const waitData = () => {

    if (!dummy === []) {
      return (

        <Spin />
      )
    }
  }
  const columns = [
    {
      title: 'Key',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Key_Kendaraan',
      dataIndex: 'key_k',
      key: 'key_k',
    },
    {
      title: 'Peminjam',
      dataIndex: 'peminjam',
      key: 'peminjam',
    },
    {
      title: 'Kegiatan',
      dataIndex: 'kegiatan',
      key: 'kegiatan',
    },
    {
      title: 'Tanggal Pinjam',
      dataIndex: 'tgl_pinjam',
      key: 'tgl_pinjam',
    },
    {
      title: 'Tanggal Kembali',
      dataIndex: 'tgl_kembali',
      key: 'tgl_kembali',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, object) => (
        <Dropdown overlay={getActionMenus(object)} trigger={["click"]}>
          <Button shape="round" icon="more"></Button>
        </Dropdown>
      ),
    },
  ];
  return (
    <div>
      <Card>
        <Typography>
          <Button type="primary" onClick={() => setVisible(!visible)} style={{ float: "right" }}>
            <Icon type="plus" />
            <span>Tambah Peminjam</span>
          </Button>
          <Modal
            title="Tambah Peminjam"
            visible={visible}
            onCancel={() => setVisible(!visible)}
            footer={null}
          // footer={[
          // <Button key="back" onClick={() => setVisible(!visible)}>
          //   Cancel
          // </Button>,
          // <Button key="submit" type="primary" onClick={() => setVisible(!visible)}>
          //   Submit
          // </Button>,
          // ]}
          >
            <DPAdminAdd />
          </Modal>
          <Title>Daftar Peminjam</Title>
          <Table columns={columns} dataSource={dummy} />

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
        </Typography>
      </Card>
    </div>
  )
}
export default DPAdminContent;