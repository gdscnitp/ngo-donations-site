import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Newslist from './subComponents/newslist';

export default class News extends Component {
    render() {
        return (
            <div>
                <div className="news-container">
                    <div className="news-display">
   
                    </div>
                    <div className="news-list">
                        <Newslist />
                    </div>
                </div>
            </div>
        )
    }
}
