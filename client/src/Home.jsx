import React from 'react';
import cover from '../src/images/cover.jpg';

const Home = () => {
    return(
        <>
        <section id="header" className="">
        
                <div className="row">
                <div className="col-lg-12 order-1 order-lg-2">
                    <img src={ cover } className="img" alt="Cover Image" />
                </div>
                </div>
               


        </section>
        </>
    )
}

export default Home;