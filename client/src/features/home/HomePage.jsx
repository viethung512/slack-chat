import React from 'react';
import './style.css';
import { Spin, Layout, Breadcrumb } from 'antd';
import { useSelector } from 'react-redux';
import { LoadingIcon } from '../../app/layout/common/Icons';
import SidePanel from '../panel/SidePanel';

const { Header, Content, Footer } = Layout;

function HomePage(props) {
  const { loading, type } = useSelector(state => state.async);
  const tip =
    type === 'signIn' || type === 'fetchCurrentUser'
      ? 'Preparing chat...'
      : 'Signing out...';

  return (
    <Spin
      spinning={loading}
      indicator={LoadingIcon}
      tip={tip}
      className='loading'
    >
      <Layout style={{ minHeight: '100vh' }}>
        <SidePanel />
        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className='site-layout-background'
              style={{ padding: 24, minHeight: 360 }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Spin>
  );
}

export default HomePage;
