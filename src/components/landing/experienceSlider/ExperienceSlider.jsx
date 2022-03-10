import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import Slider from "infinite-react-carousel"
import JOBS from "../about/jobs.json"
import OpenInNewIcon from "@material-ui/icons/OpenInNew"
import "./ExperienceSlider.scss"
import device from "../../../utils/device"

function ExperienceSlider() {
  const [slidesToShow, setSlidesToShow] = useState(window.screen.width <= 1024 ? 1 : 2)
  const scroll = 2
  const sliderSettings =  {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 25000,
    shift: 50,
    duration: 500,
    autoplayScroll: scroll,
    dotsScroll: scroll,
    centerMode: true,
    dots: device.is("phone"),
    initialSlide: device.is("phone")? 0 : 1
  }

  useEffect(() => {
    window.onresize = () => {
      if (window.screen.width <= 1024) {
        setSlidesToShow(1)
      } else {
        setSlidesToShow(2)
      }
    }
  }, [])

  const sortedJobs = [...JOBS].sort((a, b) => {
    if (a.priority && b.priority) return (a.priority - b.priority)
    if (a.priority) return -1
    else if (b.priority) return 1
    return 0
  })

  return (
    <div style={{ width: "100%"}}>
      <Slider {...sliderSettings}
        slidesToShow={slidesToShow}
      >
        {sortedJobs.map(job => 
          <div key={job.period} className="experience-item" >
            <h2>
              { job.title }
            </h2>
            <h5>
              {job.companyWebsite && 
                // eslint-disable-next-line react/jsx-no-target-blank
                <a className="primary-color" href={job.companyWebsite} target="_blank" >
                  {job.company} <OpenInNewIcon style={{fontSize: 14}} />
                </a>
              }
              {!job.companyWebsite && 
                job.company
              }
            </h5>
            <small>
              ({job.period})
            </small>
            <ul className="achievements">
              {job.achievements.slice(0,3).map(
                (ach, i) => <li key={i} dangerouslySetInnerHTML={{ __html: ach}}/>
              )}
            </ul>
          </div>
        )}

      </Slider>
    </div>
  )
}

export default ExperienceSlider