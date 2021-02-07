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
    caption: 'Slide 1',
    src:'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2017/11/autumn_fireball/17255671-1-eng-GB/Autumn_fireball.jpg'
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    src:'https://th.bing.com/th/id/R45dde45b850a8429f40ecb47e97f0c6f?rik=DVpNGAfnIVecWg&riu=http%3a%2f%2fwww.nordicvisitor.com%2fimages%2ficeland%2fsummer%2fseljalandsfoss_waterfall_summer.jpg&ehk=SE3Kne8xj7RQtSCBijoHr%2fbjzYsl7n7jUpbTHfxjykc%3d&risl=&pid=ImgRaw'
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    src:'https://th.bing.com/th/id/R2115275712667e2bc08378303f78a01b?rik=GDyGOBebjCK0lw&riu=http%3a%2f%2fwallpapersdsc.net%2fwp-content%2fuploads%2f2016%2f09%2fBruges-Images.jpg&ehk=mKg2KlzYjXPkRBQaN1inZJurTxhI6p%2blZVXwwm1J%2fIw%3d&risl=&pid=ImgRaw'
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
