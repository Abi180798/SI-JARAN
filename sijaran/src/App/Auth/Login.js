import React from 'react'
import { Card, Form, Input, Button } from 'antd'

const Login = () => {
	return (
		<div className="login">
			<Card>
				<Form>
					<Form.Item>Login</Form.Item>
					<Form.Item>
						<Input placeholder="Email" />
					</Form.Item>
					<Form.Item>
						<Input placeholder="Password" />
					</Form.Item>
					<Button type="primary">Masuk</Button>
				</Form>
			</Card>
		</div>
	)
}
export default Login;