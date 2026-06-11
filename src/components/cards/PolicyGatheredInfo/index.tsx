import { collectedInformation } from "@/data/collectedInformation";

const PolicyGatheredInfo = () => {
  return (
    <section className="bg-blue-100 card border border-blue-500 container">
      <h3 className="heading-4 mb-3">Uppgifter som samlas in</h3>
      <ul className="pl-5">
        {collectedInformation.map((item) => {
          return (
            <li className="list-disc" key={item.id}>
              <p className="paragraph-light">{item.information}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PolicyGatheredInfo;