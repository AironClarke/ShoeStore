import './normalise.css'
import './App.css'
import { Parallax } from 'react-parallax';
import { motion, useMotionValue } from 'framer-motion';
import { useState } from 'react';

const productDeckOne = [
  {
    title: 'Pure Brilliance',
    image: 'Images/item.avif',
    imageAlt: 'Produce alt one',
    details: `Lorem ipsum dolor sit amet`,
    price: '£599'
  },
  {
    title: 'Pure Brilliance',
    image: 'Images/item.avif',
    ImageAlt: 'Produce alt one',
    details: `Lorem ipsum dolor adipisicing elit.`,
    price: '£599'
  },
  {
    title: 'Pure Brilliance',
    image: 'Images/item.avif',
    ImageAlt: 'Produce alt one',
    details: `Lorem ipsum dolor adipisicing elit.`,
    price: '£599'
  }
]

const productDeckTwo = [
  {
    title: 'Pure Brilliance',
    image: 'Images/item.avif',
    imageAlt: 'Produce alt one',
    details: `Lorem ipsum dolor sit amet`,
    price: '£599'
  },
  {
    title: 'Pure Brilliance',
    image: 'Images/item.avif',
    ImageAlt: 'Produce alt one',
    details: `Lorem ipsum dolor adipisicing elit.`,
    price: '£599'
  },
  {
    title: 'Pure Brilliance',
    image: 'Images/item.avif',
    ImageAlt: 'Produce alt one',
    details: `Lorem ipsum dolor adipisicing elit.`,
    price: '£599'
  },
  {
    title: 'Pure Brilliance',
    image: 'Images/item.avif',
    ImageAlt: 'Produce alt one',
    details: `Lorem ipsum dolor sit amet, 
    adipisicing elit.`,
    price: '£599'
  }
]

const carouselDetailsOne = {
  parallaxBlur: 0,
  parallexImage: '/Images/explore-1.jpg',
  parallexImageAlt: 'freature image',
  ParallaxStrength: 200,
  carouselTitle: 'Our Products',
  direction: ''
}

const carouselDetailsTwo = {
  parallaxBlur: 0,
  parallexImage: '/Images/explore-1.jpg',
  parallexImageAlt: 'freature image',
  ParallaxStrength: 200,
  carouselTitle: 'Our Products',
  direction: 'reverse'
}

function CarouselFeature({carouselDetails,productDeck}){
  const [imgIndex, setImageIndex] = useState(0)
  const [dragging, setDragging] = useState(false)

  const dragX = useMotionValue(0)

  const DRAG_BUFFER = 50

  function onDragStart(){
    setDragging(true)
    console.log('start')
  }

  function onDragEnd(){
    setDragging(false)
    console.log('end')

    const x = dragX.get()

    // Calculate how far the user dragged, and decide whether to move to the next or previous item
    if (x <= -DRAG_BUFFER  && imgIndex < productDeck.length - 1) {
      setImageIndex((prevIndex) => prevIndex + 1); // Move 2 items forward
    } else if (x >= DRAG_BUFFER  && imgIndex > 0) {
      setImageIndex((prevIndex) => prevIndex - 1); // Move 2 items backward
    }
    // Reset drag position to align with the current item
    dragX.set(-imgIndex * 300); // Assuming each item is 300px wid
  }

  return (
    <div className={`carouselFeature ${carouselDetails.direction}`}>
      <div className='carouselFeatureImg parallax'>
        <Parallax blur={0} bgImage={carouselDetails.parallexImage} 
        bgImageAlt={carouselDetails.parallexImageAlt} 
        strength={carouselDetails.ParallaxStrength} className='lex'>
        </Parallax>
        {/* <img src="/Images/explore-1.jpg" alt="freature image" /> */}
      </div>
      <div className='carouselContent'>
        <div className='carouselContentHeader'>
          <h3 className='carouselH3'>{carouselDetails.carouselTitle}</h3>
          <div className='circle'></div>
        </div>
        <div className='carouselReel'>
          <div className={`carouselReelScreen ${carouselDetails.direction}`}>
            <motion.div
            dragMomentum={false}
            dragElastic={0.3}
              drag='x' 
              dragConstraints={{
                left: 0,
                right: 0
              }}
              style={{
                x: dragX,
              }}
              animate={{
                translateX: `-${imgIndex * 50}%`
              }}
              transition={{
                type: 'tween',
                stiffness: 0,
                damping: 0,
                ease: "easeInOut",
                duration: 0.5,  // Slightly slower for smoother snappin
                bounce: 0
              }}

              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
              className={`swiper ${carouselDetails.direction}`}
            >

              {productDeck.map((item, index) => (
                <motion.div
                  animate={{
                    transform: dragging 
                      ? "translate3d(0px, 0px, 0px) rotate(3deg) scale(0.9, 0.9)"
                      : "translate3d(0px, 0px, 0px) rotate(0deg) scale(1, 1)"
                  }}
                  transition={{
                    type: 'tween',
                    stiffness: 300,
                    damping: 20,
                    ease: "easeInOut",
                    duration: 1
                  }}
                  className="card"
                  key={index}
                >
                  <div className='cardHead'>
                    <p className='cardHeadTitle'>{item.title}</p>
                    <div className='cardCircle'></div>
                  </div>
                  <div className='cardProductDetails'>
                    <div className='cardProductImage'>
                      <img src={item.image} alt={item.imageAlt} />
                    </div>
                    <div className='cardFooter'>
                      {item.details.split('\n').map((text,ti) => (
                        <h3 key={ti}>{text}</h3>
                      ))}
                      <p className='cardPrice'>{item.price}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {

  return (
    <>
      <section>
        <CarouselFeature carouselDetails={carouselDetailsOne} productDeck={productDeckOne} />
        <CarouselFeature carouselDetails={carouselDetailsTwo} productDeck={productDeckTwo} />
      </section>
    </>
  )
}

export default App
