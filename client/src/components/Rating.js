import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Rating extends Component {
    render() {
        return (
        <div class="container w-20">
            <div class="row">
                <div class="col-md-8 offset-md-2 col-10 offset-1 mt-5">
                    <h2 class="text-center mt-5 mb-5 pb-2 text-uppercase text-dark"><strong>What Do People think?</strong></h2>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                      </ol>
                      <div class="carousel-inner mt-4">
                        <div class="carousel-item text-center active">
                            <div class="img-box p-1 border rounded-circle m-auto w-50" >
                                <img class="d-block w-100 rounded-circle" src="http://nicesnippets.com/demo/profile-1.jpg" alt="First slide"/>
                            </div>
                            <h5 class="mt-4 mb-0"><strong class="text-warning text-uppercase">Paul Mitchel</strong></h5>
                            <h6 class="text-dark m-0">Web Developer</h6>
                            <p class="m-0 pt-3 text-black">Donate For A good Cause You will feel good</p>
                        </div>
                        <div class="carousel-item text-center">
                            <div class="img-box p-1 border rounded-circle m-auto w-50">
                                <img class="d-block w-100 rounded-circle" src="http://nicesnippets.com/demo/profile-3.jpg" alt="First slide"/>
                            </div>
                            <h5 class="mt-4 mb-0"><strong class="text-warning text-uppercase">Steve Fonsi</strong></h5>
                            <h6 class="text-dark m-0">Web Designer</h6>
                            <p class="m-0 pt-3 text-black">Donation is a great act!</p>
                        </div>
                        <div class="carousel-item text-center">
                            <div class="img-box p-1 border rounded-circle m-auto w-50">
                                <img class="d-block w-100 rounded-circle" src="http://nicesnippets.com/demo/profile-7.jpg" alt="First slide"/>
                            </div>
                            <h5 class="mt-4 mb-0"><strong class="text-warning text-uppercase">Daniel vebar</strong></h5>
                            <h6 class="text-dark m-0">Seo Analyst</h6>
                            <p class="m-0 pt-3 text-black">Something waste for you can be helpful for someone else!</p>
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                </div>            
            </div>
            </div>
        )
    }
}
