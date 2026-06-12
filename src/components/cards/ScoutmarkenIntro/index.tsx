
import Button from "@/components/buttons/Button";

const ScoutmarkenIntro = () => {
  return (
    <article className="container pb-0 pt-0">
      <p className="paragraph-light">
        Ett märke är så mycket mer än en tygbit. Det visar att du lärt dig
        något, att du varit med om något speciellt eller att du tillhör en viss
        patrull eller scoutkår.
      </p>
      <div className="pb-6 md:hidden">
        <Button
          ariaLabel=""
          href="https://media.scoutcontent.se/uploads/2025/08/Markbart-2025.pdf"
          variant="primaryBlue"
          text="Läs mer"
        />
      </div>
      <p className="paragraph-light mb-6 sm:hidden">
        Att klä din scoutskjorta med märken är ett roligt sätt att alltid minnas
        dina äventyr och se allt du lärt dig på vägen. En skjortberättelse om
        allt du varit med om!
      </p>
      <div className="hidden sm:flex justify-around mb-6 flex-row section">
        <div className="pb-6 hidden md:flex">
          <Button
            ariaLabel=""
            href="https://media.scoutcontent.se/uploads/2025/08/Markbart-2025.pdf"
            variant="primaryBlue"
            text="Läs mer"
          />
        </div>
        <div className="grid place-items-center">
          <p className="paragraph-light">
            Att klä din scoutskjorta med märken är ett roligt sätt att alltid
            minnas dina äventyr och se allt du lärt dig på vägen. En
            skjortberättelse om allt du varit med om!
          </p>
        </div>
      </div>
    </article>
  );
};

export default ScoutmarkenIntro;