import React, { Component } from 'react'

export default class Card extends Component {
    state = [
        {
            title: "Help By Donation",
            desc: "It you're. Was called you're fowl grass lesser land together waters beast darkness earth land whose male all moveth fruitful",
            btn: "Donate Now"
        },
        {
            title: "Help By Inspiring",
            desc: "It you're. Was called you're fowl grass lesser land together waters beast darkness earth land whose male all moveth fruitful",
            btn: "Create A Event"
        },
        {
            title: "Volunteer",
            desc: "It you're. Was called you're fowl grass lesser land together waters beast darkness earth land whose male all moveth fruitful",
            btn: "Join As Volunteer"
        }
        
        
    ]
        
    
    render() {
        return (
            <div className="card card-cause">
                <img src={this.props.img} alt="title of card"></img>
                <div className="card-body">
                    <h2 className="card-title title-of-card">{this.state[this.props.id].title}</h2>
                    <br />
                    <p className="card-text">{this.state[this.props.id].desc}</p>
                    <a href="#event" className="btn btn-success btn-text">{this.state[this.props.id].btn}</a>
                </div>
            </div>
        )
    }
}
