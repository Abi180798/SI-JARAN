import React from 'react'
import { Layout, Card, Table, Divider, Tag } from 'antd'
import Header from '../../Components/Header'
import { Switch, Route } from 'react-router-dom'
import Footer from '../../Components/Footer'


const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: text => <a>{text}</a>,
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: 'Tags',
		key: 'tags',
		dataIndex: 'tags',
		render: tags => (
			<span>
				{tags.map(tag => {
					let color = tag.length > 5 ? 'geekblue' : 'green';
					if (tag === 'loser') {
						color = 'volcano';
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					);
				})}
			</span>
		),
	},
	{
		title: 'Action',
		key: 'action',
		render: (text, record) => (
			<span>
				<a>Invite {record.name}</a>
				<Divider type="vertical" />
				<a>Delete</a>
			</span>
		),
	},
];

const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: ['loser'],
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
	},
];


const DaftarPeminjaman = () => {
	return (
		<div>
			<Layout className="layout">
				<Header kunci='2' />
				<Layout.Content style={{ padding: '50px 50px' }}>
					<Switch>
						<Route path="/daftarpeminjaman">
							<div style={{ background: '#ECECEC', padding: '30px' }}>
								<Card title="Daftar Peminjaman" bordered={false} style={{ height: '100vh' }}>
									<Table columns={columns} dataSource={data} />
								</Card>
							</div>,
                        </Route>
					</Switch>
				</Layout.Content>
				<Footer />
			</Layout>,
        </div >
	)
}
export default DaftarPeminjaman;