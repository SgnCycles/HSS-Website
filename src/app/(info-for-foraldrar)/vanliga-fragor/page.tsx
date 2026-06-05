import Button from "@/components/buttons/Button";
import FaqCard from "@/components/Faq";

const VanligaFragorPage = () => {
  return (
    <main
      className="bg-[url(/images/Backgrounds/blueWavyBoat2.png)] bg-top bg-no-repeat bg-cover"
      id="main-content"
    >
      <article className="container">
        <h1 className="heading-1">Vanliga frågor</h1>
        <p className="paragraph">
          Här hittar du svar på de vanligaste frågorna om medlemskap, fakturor
          och ledarskap i HSS.
        </p>
        <FaqCard />
        <section className="bg-[#EEEEEE] border border-grey-300 card mt-6">
          <h4 className="heading-3">Hittade du inte svaret?</h4>
          <p className="paragraph">
            Hör av dig till oss direkt. Vi svarar inom ett par dagar och hjälper
            dig rätt.
          </p>
          <div className="flex justify-end">
            <Button
              ariaLabel={"mail button"}
              href={"mailto:info@hss-scout.org"}
              variant={"primaryBlue"}
              text={"Maila oss"}
            />
          </div>
        </section>
      </article>
    </main>
  );
};

export default VanligaFragorPage;
