import { format } from "date-fns";

const EventItem = ({ data }) => {

  const day = format(new Date(data.date), "dd")
  const month = format(new Date(data.date), "MMM")

  return (
    <div className="event-item">
      <img src={data.thumbnailURL} alt="" />
      <div className="event-details-container">
        <div className="event-date">
          <p className="day">{day}</p>
          <p className="month">{month}</p>
        </div>
        <div className="event-dets">
          <p className="event-title">{data.title}</p>
          <p  className="read-more">Read More...</p>
        </div>
      </div>
    </div>
  );
};
export default EventItem;
