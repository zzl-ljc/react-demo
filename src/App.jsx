import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

import Home from './components/home/HomeContainer.jsx';
import Movie from './components/movie/MovieContainer.jsx';
import About from './components/about/AboutContainer.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '123'
        }
    }
    // componentWillMount() {
    //     console.log(window.location.hash.split('/')[1]);
    // }
    render() {
        return <HashRouter>
            <Layout className="layout" style={{ height: '100%' }}>
                <Header> 
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={ window.location.hash.split('/')[1] }>
                        <Menu.Item key="home"><Link to = "/home">首页</Link></Menu.Item>
                        <Menu.Item key="movie"><Link to = "/movie">电影</Link></Menu.Item>
                        <Menu.Item key="about"><Link to = "/about">关于</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px',flex: 1,backgroundColor: '#fff' }}>
                    <Route path="/home" component={ Home }></Route>
                    <Route path="/movie" component={ Movie }></Route>
                    <Route path="/about" component={ About }></Route>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </HashRouter>

    }
}