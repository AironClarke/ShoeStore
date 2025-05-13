import './normalise.css'
import './App.css'
import { Parallax } from 'react-parallax';

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
            <div className='swiper'>

              {productDeck.map((item, index) => (
                <div className='card' key={index}>
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
                </div>
              ))}

            </div>
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
