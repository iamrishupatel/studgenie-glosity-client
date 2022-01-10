import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../backend";
import Notice from "./Notice";
import Loader from "./Loader";

const NoticeBoard = () => {
  const [noticeCollection, setNoticeCollection] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/notices`)
      .then(res => {
        setNoticeCollection(res.data);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [setNoticeCollection]);

  return (
    <div className="notice-board">
      <h3>Notices</h3>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Loader show />
        </div>
      ) : (
        <Fragment>
          <div className="notice-collection">
            {noticeCollection.map(notice => (
              <Notice data={notice} key={notice._id} />
            ))}
          </div>
          <div className="notice-board__more">See All notices</div>
        </Fragment>
      )}
    </div>
  );
};

export default NoticeBoard;
