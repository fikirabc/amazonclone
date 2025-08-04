import Classes from "./catagory.module.css";
export default function Catagory({ data }) {
  return (
    <div className={Classes.catagory}>
      <a href="/">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="im" />
        <p>shop now</p>
      </a>
    </div>
  );
}
