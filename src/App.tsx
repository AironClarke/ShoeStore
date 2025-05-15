import './normalise.css'
import './App.css'
import { Parallax } from 'react-parallax';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

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
  const controls = useAnimation();

  const boundary = useRef(null)
  const [constraints, setConstraints] = useState({left: 0, right: 0}) 

  // const DRAG_BUFFER = 50
  const [itemWidth, setItemWidth] = useState(0)
  const SNAP_THRESHOLD = itemWidth / 2; // Adjust as needed

  useEffect(() => {
    if (boundary.current) {
      const containerWidth = boundary.current.offsetWidth;
      const calculatedWidth = containerWidth * 0.49;
      setItemWidth(calculatedWidth);
    }
  }, [boundary]);


  function onDragStart(){
    setDragging(true)
    console.log('start')
    console.log(constraints)
  }

  const onDragEnd = (event, info) => {
    const { offset } = info;
    setDragging(false)
    const maxIndex = Math.floor(productDeck.length / 2) - 1;

    if (offset.x <= -SNAP_THRESHOLD && imgIndex < maxIndex) {
      setImageIndex((prev) => prev + 1);
    } else if (offset.x >= SNAP_THRESHOLD && imgIndex > 0) {
      setImageIndex((prev) => prev - 1);
    }

    // Calculate the new target position
    const targetX = -imgIndex * itemWidth;

    // Animate to the snapped position
    controls.start({
      x: targetX,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.5,
      },
    });
  };

  // function onDragEnd(){
  //   setDragging(false)
  //   console.log('end')
  //   console.log(constraints)

  //   const x = dragX.get()

  //   // Calculate how far the user dragged, and decide whether to move to the next or previous item
  //   if (x <= -DRAG_BUFFER  && imgIndex < ((productDeck.length /2)- 1)) {
  //     setImageIndex((prevIndex) => prevIndex + 1); // Move 2 items forward
  //   } else if (x >= DRAG_BUFFER  && imgIndex > 0) {
  //     setImageIndex((prevIndex) => prevIndex - 1); // Move 2 items backward
  //   }
  //   // Reset drag position to align with the current item
  //   dragX.set(-imgIndex * 300); // Assuming each item is 300px wid
  // }



  useEffect(() => {
    function updateConstraint(){
      if(boundary.current){
        const width = boundary.current.offsetWidth;
        setConstraints({left: -width/2, right: width/2})
      }
    }

    updateConstraint(); //why run the function before the adding event lister?
    window.addEventListener("resize", updateConstraint);

    return () => {
      window.removeEventListener("resize", updateConstraint);
    };

  },[]) //how does it update with nothing here?

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
          <div className={`carouselReelScreen ${carouselDetails.direction}`} ref={boundary}>
            <motion.div
            ref={boundary}
            dragMomentum={true}
            dragElastic={0.3}
              drag='x' 
              dragConstraints={boundary}
              style={{
                x: dragX,
              }}
              animate={
                controls
              }
              transition={{
                type: 'tween',
                stiffness: 0,
                damping: 0,
                ease: "easeInOut",
                duration: 0.5,  // Slightly slower for smoother snappin
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
                    duration: 0.3
                  }}
                  className="card"
                  key={index}
                  style={{ width: itemWidth }}
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
