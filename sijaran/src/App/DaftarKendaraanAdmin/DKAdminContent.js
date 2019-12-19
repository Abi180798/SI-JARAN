import React, { useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import fconfig from '../../config/fconfig'
import { Table, Typography, Button, Modal, Icon, Spin, Menu, Dropdown, Card } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Link } from 'react-router-dom'
import DKAdminAdd from './DKAdminAdd';
import Swal from 'sweetalert2'


const DKAdminContent = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [value, loading, error] = useCollection(
    fconfig.firestore().collection('kendaraan'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const dummy = []
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
        fconfig.firestore().collection('kendaraan').doc(isi).delete()
      }
    })
  }
  const getActionMenus = object => {
    return (
      <Menu>
        <Menu.Item key="1">
          <p onClick={e => console.log(delItem(object.key))}>Delete</p>
        </Menu.Item>
        <Menu.Item key="object-update">
          <Link to={`/${object.key}/edit/dkadmin/`}>Edit</Link>
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
      title: 'Plat',
      dataIndex: 'plat',
      key: 'plat',
    },
    {
      title: 'Jenis Kendaraan',
      dataIndex: 'jenis',
      key: 'jenis',
    },
    {
      title: 'Merk Kendaraan',
      dataIndex: 'merk',
      key: 'merk',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
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
            <span>Tambah Kendaraan</span>
          </Button>
          <Modal
            title="Tambah Kendaraan"
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
            <DKAdminAdd />
          </Modal>
          <Title>Daftar Kendaraan</Title>
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
export default DKAdminContent;