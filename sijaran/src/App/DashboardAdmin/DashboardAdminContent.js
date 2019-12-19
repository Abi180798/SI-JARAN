import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Card, Col, Spin } from 'antd'
import { useCollection } from 'react-firebase-hooks/firestore';
import fconfig from '../../config/fconfig'
import JmlK from './JmlK';

const DashboardAdminContent = props => {
	const [value, loading, error] = useCollection(
		fconfig.firestore().collection('pinjam'),
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
			<p style={{ fontSize: 20 }}>Selamat Datang <b>Admin</b> Kunjungi situs User
			<Link to="/"> Disini</Link></p>
			<Row>
				<Col md={12} lg={12}>
					<Card title={<div style={{ color: '#fff' }}>Jumlah Kendaraan</div>} bordered={true} style={{ color: "#fff", fontSize: 30, margin: 5, background: '#001529' }}>
						<JmlK />
					</Card>
				</Col>
				<Col md={12} lg={12} style={{ color: "#fff" }}>
					<Card title={<div style={{ color: "#fff" }}>Jumlah Peminjaman</div>} bordered={true} style={{ color: "#fff", fontSize: 30, margin: 5, background: '#001529' }}>
						<b>{dummy.length}</b>
					</Card>
				</Col>
			</Row>
		</div>
	)
}
export default DashboardAdminContent;