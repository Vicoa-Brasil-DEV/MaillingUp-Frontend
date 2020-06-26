import React from 'react';
import { Layout, Menu, Select, InputNumber, Avatar, Button, Table, Upload, message, } from 'antd';
import {
  FilterFilled, UploadOutlined
} from '@ant-design/icons';

import { Link } from 'react-router-dom'
import Form from 'antd/lib/form/Form';

const { Header, Content, Footer, Sider } = Layout;
const { Option, OptGroup } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
function onChange(value) {
  console.log('changed', value);
}

// Upload props
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

// END Upload props
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    cpf: 32,
    campanha: 'Stand Alone Alto',
  },
  {
    key: '2',
    name: 'John',
    cpf: 42,
    campanha: 'Stand Alone Alto',
  },
  {
    key: '3',
    name: 'Tony',
    cpf: 90,
    campanha: 'Stand Alone Médio',
  },
  {
    key: '4',
    name: 'Junior',
    cpf: 42,
    campanha: 'Stand Alone Médio',
  },
];

const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'CPF',
    dataIndex: 'cpf',
    key: 'cpf',
  },
  {
    title: 'Campanha',
    dataIndex: 'campanha',
    key: 'campanha',
  },
];

const Main = () => {
  return (
    <Layout>
      <Sider style={{
        background: '#fff',
        overflow: 'auto',
        height: '100%',
        position: 'fixed',
        left: 0,
        width: '230px'
      }}>
        
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} >

          <div>
            <Avatar shape="square" size={52} src="https://www.grupovicoabrasil.com.br/site/views/images/header_logo2.png" style={{ width: 200 }} />
          </div>
          
          <div>
            <Upload {...props} name="file"  >
              <Button style={{ width: 194, marginTop: 10 }} >
                <UploadOutlined /> Carregar CSV
              </Button>
            </Upload>
          </div>

          <Select defaultValue="Selecione" style={{ width: 194, marginTop: 10 }} onChange={handleChange}>
            <Option> Selecione </Option>
            <OptGroup label="Stand">
              <Option value="Stand_Alto">Stand Alto</Option>
              <Option value="Stand_Medio">Stand Médio</Option>
            </OptGroup>
            <OptGroup label="Gravado">
              <Option value="Gravado_Alto">Gravado Alto</Option>
              <Option value="Gravado_Alto">Gravado Médio</Option>
              <Option value="Gravado_Alto">Gravado Gov</Option>
              <Option value="Gravado_Alto">Gravado Pan Seguro</Option>
              <Option value="Gravado_Alto">Gravado Premium</Option>
            </OptGroup>
          </Select>
          <Menu.Item key='2' icon={<FilterFilled />}>
            Limite
        </Menu.Item>
          <InputNumber size="small" min={0} defaultValue={0} onChange={onChange} style={{ marginLeft: 6 }} />
          <InputNumber size="small" min={0} defaultValue={0} onChange={onChange} style={{ marginLeft: 6 }} />
          <Menu.Item key='3' icon={<FilterFilled />}>
            Margem
        </Menu.Item>
          <InputNumber size="small" min={0} defaultValue={0} onChange={onChange} style={{ marginLeft: 6 }} />
          <InputNumber size="small" min={0} defaultValue={0} onChange={onChange} style={{ marginLeft: 6 }} /><Menu.Item key='4' icon={<FilterFilled />}>
            Seguro
        </Menu.Item>
          <InputNumber size="small" min={0} defaultValue={0} onChange={onChange} style={{ marginLeft: 6 }} />
          <InputNumber size="small" min={0} defaultValue={0} onChange={onChange} style={{ marginLeft: 6 }} />


          <Select defaultValue="Ordenar por" style={{ width: 194, marginTop: 50 }} onChange={handleChange}>
            <Option value="Limite_ord">Limite</Option>
            <Option value="Margem_ord">Margem</Option>
            <Option value="Seguro_ord">Seguro</Option>
            <Option value="Prio_ord">( Limite / Margem )</Option>

          </Select>

          <div>
            <InputNumber size="small" min={0} defaultValue={0} onChange={onChange} style={{ marginLeft: 6, marginTop: 5 }} />
            <InputNumber size="small" min={0} defaultValue={0} onChange={onChange} style={{ marginLeft: 6, marginTop: 5 }} />
          </div>
          <div>
            <InputNumber size="small" min={0} defaultValue={0} onChange={onChange} style={{ marginLeft: 6, marginTop: 5 }} />
            <InputNumber size="small" min={0} defaultValue={0} onChange={onChange} style={{ marginLeft: 6, marginTop: 5 }} />
          </div>
          <div>
            <InputNumber size="small" min={0} defaultValue={0} onChange={onChange} style={{ marginLeft: 6, marginTop: 5 }} />
            <InputNumber size="small" min={0} defaultValue={0} onChange={onChange} style={{ marginLeft: 6, marginTop: 5 }} />
          </div>
          <div>
            <InputNumber size="small" min={0} defaultValue={0} onChange={onChange} style={{ marginLeft: 6, marginTop: 5 }} />
            <InputNumber size="small" min={0} defaultValue={0} onChange={onChange} style={{ marginLeft: 6, marginTop: 5 }} />
          </div>

          <div style={{ marginTop: 20 }}>
            <Button style={{ marginTop: 5, marginLeft: 6, width: 90 }}>Executar</Button>
            <Button type="primary" style={{ marginTop: 5, marginLeft: 6, width: 90 }}>Gerar</Button>
          </div>

        </Menu>


      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0, height: 62, background: '#fff' }} >
          <Button style={{ position: "absolute", right: 15, top: 15, background: 'red', color: '#fff' }}>
            <Link to="/">Logout</Link>
          </Button>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 5, textAlign: 'center' }}>
            <Table dataSource={dataSource} columns={columns} />
            <label > Registros: xxx </label>
          </div>
        </Content>
        <center>
          <Footer style={{ textAlign: 'center', bottom: 0, position: "flex", flex: 1 }}>Grupo Vicoa Brasil ©2020</Footer>
        </center>
      </Layout>
    </Layout>
  )
}

export default Main;