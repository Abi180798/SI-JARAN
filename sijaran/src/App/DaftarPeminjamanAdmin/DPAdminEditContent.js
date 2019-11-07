import React from 'react'
import fconfig from '../../config/fconfig'
import { useDocument } from 'react-firebase-hooks/firestore';
import DPAEditForm from './DPAEditForm'

const DPAdminEditContent = (props) => {
  const dummy = []
  const [value, loading, error] = useDocument(
    fconfig.firestore().doc(`pinjam/${props.id}`),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  function loadData() {
    if (value != null) {
      return (
        <div>
          <DPAEditForm id={props.id} peminjamm={value && dummy.map(doc => (doc.peminjam))} kegiatann={value && dummy.map(doc => (doc.kegiatan))} tgl_pinjamm={value && dummy.map(doc => (doc.tgl_pinjam))} tgl_kembalii={value && dummy.map(doc => (doc.tgl_kembali))} key_kk={value && dummy.map(doc => (doc.key_k))} />
        </div>
      )
    }
  }
  return (<div>
    <div style={{ display: 'none' }}>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Loading...</span>}
      {value && dummy.push(value.data())}
    </div>
    {loadData()}
  </div>
  )
}
export default DPAdminEditContent;