import React from 'react'

const Testimonials = () => {
  return (
    <div className="testimonials paralax-mf bg-image" style={{"background-image": "url(assets/img/overlay-bg.jpg)"}}>
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonials-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper-wrapper" id="swiper-wrapper-4e9ddb72dc3bfb44" aria-live="off" style={{"transform": "translate3d(-2088px, 0px, 0px); transition-duration: 0ms;"}}><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="0" role="group" aria-label="1 / 2">
                    <div className="testimonial-box">
                      <div className="author-test">
                        <img src="assets/img/testimonial-2.jpg" alt="" className="rounded-circle b-shadow-a"/>
                        <span className="author">Xavi Alonso</span>
                      </div>
                      <div className="content-test">
                        <p className="description lead">
                          Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at sem. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="1" role="group" aria-label="2 / 2">
                    <div className="testimonial-box">
                      <div className="author-test">
                        <img src="assets/img/testimonial-4.jpg" alt="" className="rounded-circle b-shadow-a"/>
                        <span className="author">Marta Socrate</span>
                      </div>
                      <div className="content-test">
                        <p className="description lead">
                          Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at sem. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="0" role="group" aria-label="1 / 2">
                    <div className="testimonial-box">
                      <div className="author-test">
                        <img src="assets/img/testimonial-2.jpg" alt="" className="rounded-circle b-shadow-a"/>
                        <span className="author">Xavi Alonso</span>
                      </div>
                      <div className="content-test">
                        <p className="description lead">
                          Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at sem. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="1" role="group" aria-label="2 / 2">
                    <div className="testimonial-box">
                      <div className="author-test">
                        <img src="assets/img/testimonial-4.jpg" alt="" className="rounded-circle b-shadow-a"/>
                        <span className="author">Marta Socrate</span>
                      </div>
                      <div className="content-test">
                        <p className="description lead">
                          Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at sem. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                <div className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="0" role="group" aria-label="1 / 2">
                    <div className="testimonial-box">
                      <div className="author-test">
                        <img src="assets/img/testimonial-2.jpg" alt="" className="rounded-circle b-shadow-a"/>
                        <span className="author">Xavi Alonso</span>
                      </div>
                      <div className="content-test">
                        <p className="description lead">
                          Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at sem. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="1" role="group" aria-label="2 / 2">
                    <div className="testimonial-box">
                      <div className="author-test">
                        <img src="assets/img/testimonial-4.jpg" alt="" className="rounded-circle b-shadow-a"/>
                        <span className="author">Marta Socrate</span>
                      </div>
                      <div className="content-test">
                        <p className="description lead">
                          Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at sem. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </div></div>
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 2" aria-current="true"></span></div>
              <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Testimonials