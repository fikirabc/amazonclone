// @ts-ignore
import Classes from "./catagory.module.css";
import { Link } from "react-router-dom";
export default function Catagory({ data }) {
  return (
    <div className={Classes.catagory}>
      <Link to={`/catagory/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="im" />
        <p>shop now</p>
      </Link>
    </div>
  );
}
