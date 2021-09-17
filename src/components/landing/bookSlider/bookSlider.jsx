import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import Slider from "infinite-react-carousel"
import Book from "../../work/Book/Book"

BookSlider.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    img: PropTypes.string
  }))
}

function BookSlider({ books }) {
  const [slidesToShow, setSlidesToShow] = useState(5)
  const sliderSettings =  {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    gutter: 500,
    duration: 8500,
  }

  useEffect(() => {
    window.onresize = () => {
      if (window.screen.width <= 360) {
        setSlidesToShow(1)
      } else if (window.screen.width <= 550) {
        setSlidesToShow(2)
      } else if (window.screen.width <= 700) {
        setSlidesToShow(3)
      } else {
        setSlidesToShow(5)
      }
    }
  }, [])

  return (
    <div>
      <Slider {...sliderSettings} slidesToShow={slidesToShow}>
        {
          books.map(book =>
            <div key={book.title} style={{display: "inline-block"}}>
              <Book {...book} />
            </div>
          )
        }
      </Slider>
    </div>
  )

}

export default BookSlider