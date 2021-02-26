import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    altText: 'Slide 1',
    src:'https://3blaws.s3.amazonaws.com/images/poverty-education-facts.jpg'
  },
  {
    id: 2,
    altText: 'Slide 2',
    src:'https://thefunquotes.com/wp-content/uploads/2020/10/best-practices-for-ngo-websites.jpg'
  },
  {
    id: 3,
    altText: 'Slide 3',
    src:'https://reliefindiatrustngoinindia.files.wordpress.com/2014/12/15eda-happy-childrens2bmaking2bresponsible2bat2brelief2bindia2btrust.jpg'
  },
   {
    id: 4,
    altText: 'Slide 4',
    src:'https://wallpapercave.com/wp/wp6608514.jpg'
  },
   {
    id: 5,
    altText: 'Slide 5',
    src:'https://c0.wallpaperflare.com/preview/977/488/918/alliance-blue-daylight-facial-expression.jpg'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} style={{ width: "100%", height:"100%"}} />
        <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 590px;
              background:black;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Example;
