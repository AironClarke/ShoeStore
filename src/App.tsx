import './normalise.css'
import './App.css'
import { Parallax } from 'react-parallax';

function App() {

  return (
    <>
      <section>
        <div className='carouselFeature'>
          <div className='carouselFeatureImg parallax'>
            <Parallax blur={0} bgImage="/Images/explore-1.jpg" bgImageAlt="freature image" strength={300} className='lex'>
            </Parallax>
            {/* <img src="/Images/explore-1.jpg" alt="freature image" /> */}
          </div>
          <div className='carouselContent'>
            <div className='carouselContentHeader'>
              <h3 className='carouselH3'>Our Products</h3>
              <div className='circle'></div>
            </div>
            <div className='carouselReel'>
              <div className='carouselReelScreen'>
                <div className='swiper'>
                  <div className='card'>
                    <div className='cardHead'>
                      <p className='cardHeadTitle'>Pure Brilliance</p>
                      <div className='cardCircle'></div>
                    </div>
                    <div className='cardProductDetails'>
                      <div className='cardProductImage'>
                        <img src="Images/item.avif" alt="" />
                      </div>
                      <div className='cardFooter'>
                        <h3>Lorem ipsum dolor <br/>sit amet, 
                          consectetur adipisicing elit. 
                        </h3>
                        <p className='cardPrice'>
                          £599
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='cardHead'>
                      <p className='cardHeadTitle'>Pure Brilliance</p>
                      <div className='cardCircle'></div>
                    </div>
                    <div className='cardProductDetails'>
                      <div className='cardProductImage'>
                        <img src="Images/item.avif" alt="" />
                      </div>
                      <div className='cardFooter'>
                        <h3>Lorem ipsum dolor <br/>sit amet, 
                          consectetur adipisicing elit. 
                        </h3>
                        <p className='cardPrice'>
                          £599
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='cardHead'>
                      <p className='cardHeadTitle'>Pure Brilliance</p>
                      <div className='cardCircle'></div>
                    </div>
                    <div className='cardProductDetails'>
                      <div className='cardProductImage'>
                        <img src="Images/item.avif" alt="" />
                      </div>
                      <div className='cardFooter'>
                        <h3>Lorem ipsum dolor <br/>sit amet, 
                          consectetur adipisicing elit. 
                        </h3>
                        <p className='cardPrice'>
                          £599
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='cardHead'>
                      <p className='cardHeadTitle'>Pure Brilliance</p>
                      <div className='cardCircle'></div>
                    </div>
                    <div className='cardProductDetails'>
                      <div className='cardProductImage'>
                        <img src="Images/item.avif" alt="" />
                      </div>
                      <div className='cardFooter'>
                        <h3>Lorem ipsum dolor <br/>sit amet, 
                          consectetur adipisicing elit. 
                        </h3>
                        <p className='cardPrice'>
                          £599
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='carouselFeature reverse'>
          <div className='carouselFeatureImg parallax'>
            <Parallax blur={0} bgImage="/Images/explore-1.jpg" bgImageAlt="freature image" strength={300} className='lex'>
            </Parallax>
              {/* <img src="/Images/explore-1.jpg" alt="freature image" /> */}
          </div>
            <div className='carouselContent'>
              <div className='carouselContentHeader'>
                <h3 className='carouselH3'>Our Products</h3>
                <div className='circle'></div>
              </div>
              <div className='carouselReel'>
                <div className='carouselReelScreen reverse'>
                  <div className='swiper'>
                    <div className='card'>
                      <div className='cardHead'>
                        <p className='cardHeadTitle'>Pure Brilliance</p>
                        <div className='cardCircle'></div>
                      </div>
                      <div className='cardProductDetails'>
                        <div className='cardProductImage'>
                          <img src="Images/item.avif" alt="" />
                        </div>
                        <div className='cardFooter'>
                          <h3>Lorem ipsum dolor <br/>sit amet, 
                            consectetur adipisicing elit. 
                          </h3>
                          <p className='cardPrice'>
                            £599
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='cardHead'>
                        <p className='cardHeadTitle'>Pure Brilliance</p>
                        <div className='cardCircle'></div>
                      </div>
                      <div className='cardProductDetails'>
                        <div className='cardProductImage'>
                          <img src="Images/item.avif" alt="" />
                        </div>
                        <div className='cardFooter'>
                          <h3>Lorem ipsum dolor <br/>sit amet, 
                            consectetur adipisicing elit. 
                          </h3>
                          <p className='cardPrice'>
                            £599
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='cardHead'>
                        <p className='cardHeadTitle'>Pure Brilliance</p>
                        <div className='cardCircle'></div>
                      </div>
                      <div className='cardProductDetails'>
                        <div className='cardProductImage'>
                          <img src="Images/item.avif" alt="" />
                        </div>
                        <div className='cardFooter'>
                          <h3>Lorem ipsum dolor <br/>sit amet, 
                            consectetur adipisicing elit. 
                          </h3>
                          <p className='cardPrice'>
                            £599
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='cardHead'>
                        <p className='cardHeadTitle'>Pure Brilliance</p>
                        <div className='cardCircle'></div>
                      </div>
                      <div className='cardProductDetails'>
                        <div className='cardProductImage'>
                          <img src="Images/item.avif" alt="" />
                        </div>
                        <div className='cardFooter'>
                          <h3>Lorem ipsum dolor <br/>sit amet, 
                            consectetur adipisicing elit. 
                          </h3>
                          <p className='cardPrice'>
                            £599
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default App
