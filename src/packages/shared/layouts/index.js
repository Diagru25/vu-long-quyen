import './index.scss';
import { Layout } from 'adapters/ant-design';

import React from 'react';

import HeaderComponent from 'shared/layouts/Header/Header';
import Sidebar from 'shared/layouts/Sidebar/Sidebar';
import FooterComponent from 'shared/layouts/Footer/Footer';

const Layouts = ({ children }) => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Header>
          <HeaderComponent />
        </Header>

        <Layout>
          <Sider>
            <Sidebar />
          </Sider>
          <Content>{children}</Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>
          <FooterComponent />
        </Footer>
      </Layout>
    </>
  );
};

export default Layouts;
