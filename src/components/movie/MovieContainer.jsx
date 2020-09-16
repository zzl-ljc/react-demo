import React from 'react';

import { Layout, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { Sider, Content } = Layout;
import { HashRouter, Link, Route } from 'react-router-dom';

import MovieList from "./MovieList.jsx";
import MovieDetail from './MovieDetail.jsx';

export default class MovieContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return <Layout style={{ height: '100%' }}>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key="1"><Link to="/movie/in_theaters/1">正在上映</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/movie/coming_soon/1">即将上映</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/movie/top250/1">Top250</Link></Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px', backgroundColor: '#fff' }}>

                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <Switch>
                        <Route path="/movie/:type/:page" component={MovieList}></Route>
                        <Route path="/movie/detail/:id" component={MovieDetail}></Route>
                    </Switch>

                </Content>
            </Layout>
        </Layout>
    }
}