import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Card, Col, Spin } from 'antd'
import { useCollection } from 'react-firebase-hooks/firestore';
import fconfig from '../../config/fconfig'

const JmlK = props => {
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

            <b>{dummy.length}</b>
        </div>
    )
}
export default JmlK;