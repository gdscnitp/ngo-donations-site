import React, { Component } from 'react'

export default class Review extends Component {
    state= [

       {name: "Rishabh Mishra",
        time: " Fri 16, 17:25:33",
        review: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."},
        {name: "Kartik Singh",
        time: " Fri 16, 17:25:33",
        review: "loremipsum dolar cimet"},
        {name: "Ayush Jain",
        time: " Fri 14, 18:25:33", 
        review: "Woooahah what a great website that is just superb!!"},
    ]

    render() {
        var i= Math.ceil(Math.random()*8);
        var str ="http://bootdey.com/img/Content/avatar/avatar"+i+".png";
        return (
        <div>
            <div class="reviews-members pt-4 pb-4">
                        <div class="media">
                            <div className="image">
                            <img alt="Generic placeholder" src={str} class="mr-3 rounded-pill" />
                            </div>
                                <div class="reviews-members-header">
                                    <h6 class="mb-1"><a class="text-black">{this.state[this.props.id].name}</a></h6>
                                    <p class="text-gray">{this.state[this.props.id].time}</p>
                                </div>
                                <div class="reviews-members-body">
                                    <h3>  {this.state[this.props.id].review}</h3>
                                </div>
                        </div>
                    </div>
             </div>
        )
    }
}
