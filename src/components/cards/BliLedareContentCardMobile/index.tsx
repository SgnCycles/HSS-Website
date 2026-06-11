import Image from "next/image";
import Button from "@/components/buttons/Button";

const BliLedareContentCardMobile = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-6 font-bold pb-6 pt-6 lg:hidden">
      <div className="text-primary flex flex-col lg:hidden">
        <p className="paragraph-light">
          För att fler barn och unga ska få uppleva scouting behöver vi fler
          engagerade ledare. Som scoutledare får du utveckla ditt ledarskap,
          skapa minnen och göra skillnad för barn och ungdomar.
        </p>
        <p className="paragraph-light">
          Du behöver varken vara erfaren seglare eller tidigare scout. Det
          viktigaste är att du gillar att arbeta med unga och vill engagera dig
          ideellt.
        </p>
        <p className="paragraph-light">
          Vi välkomnar särskilt fler kvinnliga ledare eftersom vi idag har fler
          manliga ledare i kåren.
        </p>
      </div>
      <div className="w-screen lg:w-auto">
        <Image
          className="lg:rounded-md w-full lg:w-75 h-auto"
          src={"/images/Body/bliLedare_body1.png"}
          height={600}
          width={600}
          alt=""
        />
      </div>
      <div>
        <Button
          ariaLabel=""
          href="https://www.scoutnet.se/register/in/group/764"
          variant="primaryBlue"
          text="Anmäl ditt intresse här &#8594;"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default BliLedareContentCardMobile;