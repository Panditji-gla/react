import React from 'react'

const About = () => {
  return (
    <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt08ADSBsRRxQ2xzvxjADA0SCVuwEwY6gASg&amp;usqp=CAU" className="img-fluid rounded b-shadow-a" alt=""/>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p>
                            <span className="title-s">Name: </span>
                            <span>Shiva Gautam</span>
                          </p>
                          <p>
                            <span className="title-s">Profile: </span>
                            <span>Student</span>
                          </p>
                          <p>
                            <span className="title-s">Email: </span>
                            <span>ShivaGautam*****@gmail.com</span>
                          </p>
                          <p>
                            <span className="title-s">Phone: </span>
                            <span>+91 9456****82</span>
                          </p>
                          <p>
                            <span className="title-s">Religion: </span>
                            <span>Hindu</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skill</p>
                      <span>HTML</span> <span className="pull-right">99%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{"width": "99%"}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>CSS3</span> <span className="pull-right">60%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{"width": "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>Python</span> <span className="pull-right">40%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{"width": "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>JAVASCRIPT</span>
                      <span className="pull-right">90%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{"width": "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About me</h5>
                      </div>
                      <p className="lead">
                        <span className="title-s">Welcome!</span><br/><br/>
                        every person has their own unique story. Here is glimpse
                        into mine.
                      </p>
                      <p className="lead">
                        My name is Shiva Gautam i am currently the Graduate
                        Fellow for GLA University situated in Mathura ( Sapta
                        Mahapuris ). I am completing my B-Tech CSE.
                      </p>
                      <p className="lead">
                        So far in just 1 months, i have come to learn many new
                        and worked on portfolio like this on which you currently
                        are.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About