import { categoryInfos } from "./catagoryFullInfo";
import CatagoryCard from "./catagoryCard"; // Component should be exported as default or use named import
import Classes from "./catagory.module.css";

export default function Catagory() {
  return (
    <section className={Classes.catagory_container}>
      {categoryInfos.map((infos, index) => (
        <CatagoryCard key={index} data={infos} />
      ))}
    </section>
  );
}
