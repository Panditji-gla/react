import React, { useEffect, useState } from "react";

import Typewriter from "typewriter-effect";
const Blog = () => {
  const [selected, setselected] = useState("");
  const [start, setstart] = useState(false);
  const [aut, setaut] = useState(false);
  var used = false;
  const call = () => {
    used = true;
    function generateRandom(maxLimit = 100) {
      let rand = Math.random() * maxLimit;
      rand = Math.floor(rand); // 99

      return rand;
    }
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        function generateRandom(maxLimit = data.length) {
          let rand = Math.random() * maxLimit;
          rand = Math.floor(rand);
          return rand;
        }
        let qt = data[generateRandom()];
        setselected(qt);
        setstart(true);
        setInterval(() => {
          setaut(false);
          // alert("hello")
          let qt = data[generateRandom()];
          setselected(qt);
          setstart(true);
        }, 60000);
      });
  };
  useEffect(() => {
    if (used) {
    } else {
      call();
    }
  }, []);
  return (
    <section id="blog" className="blog-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Thaught of the minute</h3>
              <p className="subtitle-a">
                {start ? (
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(selected.text)
                        .callFunction(() => {
                          setstart(false);
                          setaut(true);
                        })
                        .start();
                    }}
                  />
                ) : (
                  <>{selected.text}</>
                )}
                {aut && selected.author ? (
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(`(✍️ ${selected.author})`)
                        .callFunction(() => {
                          setstart(false);
                        })
                        .start();
                    }}
                  />
                ) : (
                  ""
                )}
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Blog</h3>
              <p className="subtitle-a">
                A blog is a website or section of a website that features
                regularly updated content, typically in the form of written
                articles or posts, with the purpose of sharing information,
                ideas, or personal reflections with an audience.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card card-blog">
              <div className="card-img">
                <a href="blog-single.html">
                  <img
                    src="assets/img/post-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">
                    <h6 className="category">Travel</h6>
                  </div>
                </div>
                <h3 className="card-title">
                  <a href="blog-single.html">See more ideas about Travel</a>
                </h3>
                <p className="card-description">
                  Here are a few ideas for travel-related content that you might
                  consider for your website or blog
                </p>
              </div>
              <div className="card-footer">
                <div className="post-author">
                  <a href="#">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt08ADSBsRRxQ2xzvxjADA0SCVuwEwY6gASg&usqp=CAU"
                      alt=""
                      className="avatar rounded-circle"
                    />
                    <span className="author">Shiva </span>
                  </a>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> 10 min
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-blog">
              <div className="card-img">
                <a href="blog-single.html">
                  <img
                    src="assets/img/post-2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">
                    <h6 className="category">Web Design</h6>
                  </div>
                </div>
                <h3 className="card-title">
                  <a href="blog-single.html">See more ideas about Travel</a>
                </h3>
                <p className="card-description">
                  Destination guides: Create detailed guides for popular travel
                  destinations, including information on things to do, where to
                  stay, and how to get around.
                </p>
              </div>
              <div className="card-footer">
                <div className="post-author">
                  <a href="#">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt08ADSBsRRxQ2xzvxjADA0SCVuwEwY6gASg&usqp=CAU"
                      alt=""
                      className="avatar rounded-circle"
                    />
                    <span className="author">Shiva</span>
                  </a>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> 10 min
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-blog">
              <div className="card-img">
                <a href="blog-single.html">
                  <img
                    src="assets/img/post-3.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">
                    <h6 className="category">Web Design</h6>
                  </div>
                </div>
                <h3 className="card-title">
                  <a href="blog-single.html">See more ideas about Travel</a>
                </h3>
                <p className="card-description">
                  Travel tips: Share practical advice on topics such as packing,
                  budgeting, and staying safe while traveling.
                </p>
              </div>
              <div className="card-footer">
                <div className="post-author">
                  <a href="#">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt08ADSBsRRxQ2xzvxjADA0SCVuwEwY6gASg&usqp=CAU"
                      alt=""
                      className="avatar rounded-circle"
                    />
                    <span className="author">Shiva </span>
                  </a>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> 10 min
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
