import './normalise.css'
import './App.css'

function App() {

  return (
    <>
      <section>
        <div className='carouselFeature'>
          <div className='carouselFeatureImg parallax'>
            <img src="/Images/explore-1.jpg" alt="freature image" />
          </div>
          <div className='carouselContent'>
            <div className='carouselContentHeader'>
              <h3 className='carouselH3'>Our Products</h3>
              <div className='circle'></div>
            </div>
            <div className='carouselReel'>
              <div className='carouselReelScreen'>
                <div className='swiper'>
                  <div className='card'></div>
                  <div className='card'></div>
                  <div className='card'></div>
                  <div className='card'></div>
                  <div className='card'></div>
                  <div className='card'></div>
                  <div className='card'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='carouselFeature'>


        </div>
      </section>
    </>
  )
}

export default App
