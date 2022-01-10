import { format } from "date-fns";

const Notice = ({ data }) => {
  const isssuedDate = format(new Date(data.createdAt), "dd MMMM yyyy");

  return (
    <div className="notice">
      <p className="title">{data.title}</p>
      <div className="meta-data">
        <p className="date">{isssuedDate}</p>
        <p className="issued-by">{data.issuedBy}</p>
      </div>
      <p className="desc">{data.description}</p>
    </div>
  );
};

export default Notice;
