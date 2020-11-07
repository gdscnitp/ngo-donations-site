import React from 'react';



const Carousel1 = () => {
    return(
        <>
     <section id="slider">
  <input type="radio" name="slider" id="s1" checked />
  <input type="radio" name="slider" id="s2" checked />
  <input type="radio" name="slider" id="s3" checked />
  <input type="radio" name="slider" id="s4" checked />
  <input type="radio" name="slider" id="s5" checked />

  <label for="s1" id="slide1"><img src="https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg" alt="img" className="img1" /></label>
  <label for="s2" id="slide2"><img src="https://wallpapersdsc.net/wp-content/uploads/2016/09/Cape-Town-Images.jpeg" alt="img" className="img2"/></label>
  <label for="s3" id="slide3"><img src="http://www.latestwall.com/images/wallpaper/beautiful-nature-photography-hd-background-jpg" alt="img" className="img3"/></label>
  <label for="s4" id="slide4"><img src="http://thewowstyle.com/wp-content/uploads/2015/01/nature-images-wallpaper.jpg" alt="img" className="img4"/></label>
  <label for="s5" id="slide5"><img src="https://thewowstyle.com/wp-content/uploads/2015/07/natural-water-bridge-hd-pictures.jpg.jpg" alt="img" className="img5" /></label>
</section>
        </>
    )
  
}

export default Carousel1;