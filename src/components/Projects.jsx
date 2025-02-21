import React from 'react'
import project from './data/projects.json'
const Projects = () => {
  return (
    <>
      <div className="container projects-my-3" id='projects'>
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (<>
            <div key={data.id} className='my-4 col-sm-6 col-md-4 col-lg-3 mx-3 '>
              <div className="card bg-dark text-light" style={{width:'19rem', border:"2.3px solid mediumvioletred"}}
              data-aos="flip-left"
              data-aos-duration="1000"
              >

                <div className="img d-flex justify-content-center align-content-center p-3" >
                <img src={data.imageSrc} className="card-img-top" alt="..." style={{width: "250px", height:"200px", border:"3px solid mediumvioletred"}}/>
                </div>

                  <div className="card-body text-center">
                    <h5 className="card-title">
                      {data.title}
                    </h5>
                    <p className="card-text">
                      {data.description}
                    </p>
                    <div className="btns">
                    <a href={data.demo} className="btn btn-primary demo mx-2 ">Demo</a>
                    <a href={data.demo} className="btn btn-primary mx-3 code">Code</a>
                    </div>
                    
                  </div>
              </div>
            </div>
          </>))}
        </div>
      </div>
    </>
  )
}

export default Projects
