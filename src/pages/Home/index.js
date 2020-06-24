import React from 'react';
import {
  Form, Input, Button, Checkbox,
} from 'antd';

import { Link } from 'react-router-dom'

import './styles.css'
import FormItem from 'antd/lib/form/FormItem';


const Home = () => {

  return (
    <section>
      <div className="container">
        <div style={{ width: "100vh", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <center >
            <Form className="login-form" >
              <img src="http://www.grupovicoabrasil.com.br/site/views/images/header_logo2.png" alt="logo" style={{ marginBottom: 20 }} />
              <FormItem>
                <Input style={{ fontSize: 13, width: 300, textAlign: "center",  }} placeholder="Username" />
              </FormItem>
              <FormItem>
                <Input style={{ fontSize: 13, width: 300, textAlign: "center" }} type="password" placeholder="Password" />
              </FormItem>
              <FormItem>
                <Checkbox style={{marginRight:50}}>Lembrar-me</Checkbox>
                <Button type="primary" htmlType="submit" className="login-form-button" >
                  <Link to="/main" >
                  Conectar-se
                  </Link>
                </Button>
              </FormItem>
            </Form>
          </center>
        </div>
      </div>
    </section>
  )
}
export default Home;