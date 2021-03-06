import React from 'react'
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
  function loadData() {
    if (value != null) {
      return (
        <div>
          <DKAEditForm id={props.id} platt={value && dummy.map(doc => (doc.plat))} jeniss={value && dummy.map(doc => (doc.jenis))} merkk={value && dummy.map(doc => (doc.merk))} statuss={value && dummy.map(doc => (doc.status))} />
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
export default DKAdminEditContent;