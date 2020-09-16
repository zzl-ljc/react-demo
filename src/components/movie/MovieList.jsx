import React from 'react';
import fetchJSONP from 'fetch-jsonp';

import MovieItem from './MovieItem.jsx';
import { Spin, Pagination, Alert } from 'antd';
import styles from '../../css/movie_list.scss';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            nowPage: parseInt(props.match.params.page) || 1,
            pageSize: 12,
            total: 0,
            isLoading: true,
            movieType: props.match.params.type
        }
    }
    componentWillMount() {
        this.loadMovieListByTypeAndPage();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isLoading: true,
            nowPage: parseInt(nextProps.match.params.page) || 1,
            movieType: nextProps.match.params.type
        }, function() {
            this.loadMovieListByTypeAndPage();
        })
    }
    render() {
        return <div>
            {this.renderList()}
        </div>
    }

    loadMovieListByTypeAndPage = () => {
        const start = this.state.pageSize * (this.state.nowPage - 1);
        const url = `http://api.douban.com/v2/movie/${this.state.movieType}?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=${this.state.pageSize}`;
        fetchJSONP(url)
            .then(response => {
                response.json();
            })
            .then(data => {
                this.setState({
                    isLoading: false,
                    movie: data.subject,
                    total: data.total
                })
            })
    }

    renderList = () => {
        if (this.state.isLoading) {
            return <Spin tip="Loading...">
                <Alert
                    message="数据请求中..."
                    description="精彩内容，即将呈现"
                    type="info"
                />
            </Spin>
        } else {
            return <div>
                <div className={styles.itemWrap}>
                {
                    this.state.movies.map(item => {
                        return <MovieItem key={item.id} {...item} history={this.props.history}></MovieItem>
                    })
                }
                </div>
                <Pagination onChange={this.pageChanged} defaultCurrent={this.state.nowPage} total={this.state.total} pageSize={this.state.pageSize} />
            </div>
        }
    }
    pageChanged = (page) => {
        this.props.history.push('/movie/' + this.state.movieType + '/' + page);
    }
}