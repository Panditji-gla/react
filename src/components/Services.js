import React from "react";

const Services = () => {
  return (
    <section id="services" className="services-mf pt-5 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Services</h3>
              <p className="subtitle-a">
              Services are activities or functions that are performed for the benefit of others, often in exchange for money. 
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="bi bi-briefcase"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Design</h2>
                <p className="s-description text-center">
                  Web design is the process of creating and organizing the
                  visual and functional elements of a website to meet the needs
                  of a specific audience and achieve specific goals.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="bi bi-card-checklist"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Development</h2>
                <p className="s-description text-center">
                  Web development is the process of building and maintaining
                  websites, which involves coding and programming languages such
                  as HTML, CSS, and JavaScript, as well as server-side
                  technologies like PHP, Ruby, or Python.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="bi bi-bar-chart"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Photography</h2>
                <p className="s-description text-center">
                  Photography is the art and practice of creating still or
                  moving images through the use of a camera and other
                  photographic equipment.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="bi bi-binoculars"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Responsive Design</h2>
                <p className="s-description text-center">
                  Responsive design is a design approach that ensures that a
                  website looks and works well on a variety of devices,
                  including desktop computers, laptops, tablets, and
                  smartphones, by using flexible layouts, grids, and CSS media
                  queries.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="bi bi-brightness-high"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Graphic Design</h2>
                <p className="s-description text-center">
                  Graphic design is the art and practice of creating visual
                  content, such as logos, branding materials, advertisements,
                  and packaging, to communicate information and ideas to a
                  specific audience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="bi bi-calendar4-week"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Marketing Services</h2>
                <p className="s-description text-center">
                  Marketing services are an important part of the overall
                  marketing mix and can help businesses reach their target
                  audience and achieve their marketing and sales goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
