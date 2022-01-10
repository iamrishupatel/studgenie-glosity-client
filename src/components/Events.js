import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../backend";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Slider from "react-slick";
import EventItem from "./EventItem";
import Loader from "./Loader";

const Events = () => {
  const [eventsCollection, setEventsCollection] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/events`)
      .then(res => {
        setEventsCollection(() => [...new Set(res.data)]);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [setEventsCollection]);

  let settings = {
    className: "slider",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "1rem",
        }}
      >
        <Loader show />
      </div>
    );

  return (
    <Slider {...settings}>
      {eventsCollection.map(event => (
        <EventItem data={event} key={event._id} />
      ))}
    </Slider>
  );
};

export default Events;

const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <AiOutlineRight
      onClick={onClick}
      className={className}
      style={{ ...style, display: "block", color: "black" }}
    />
  );
};

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <AiOutlineLeft
      onClick={onClick}
      className={className}
      style={{ ...style, display: "block", color: "black" }}
    />
  );
};
