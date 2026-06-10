import Button from "../buttons/Button";

export default function GDPR({ handelGdpr }: { handelGdpr: () => void }) {
  return (
    <div className="bg-background fixed inset-0 w-screen mx-auto overflow-y-auto z-50">
      <div className="container">
        <p className="paragraph-light ">
          Vi är måna om att du ska känna dig trygg i dina kontakter med oss.
          Därför vill vi berätta om vår hantering av personuppgifter och om den
          nya dataskyddsförordningen (GDPR) som gäller i hela EU från och med
          den 25 maj 2018.<br></br>
          Scouterna (802006-2942) är tillsammans med din lokala scoutkår
          gemensamt personuppgiftsansvarig för de uppgifter du lämnar till oss.
          <br></br>
          De personuppgifter vi samlar in och behandlar är framför allt sådana
          som du själv uppger till oss (som personnummer, namn, adress,
          e-postadress, telefonnummer) när du ansöker om medlemskap. Vi behöver
          dessa uppgifter för att hantera din medlemsansökan och administrera
          ditt medlemskap hos oss. Dessutom skickar vi dig medlemstidning,
          nyhetsbrev, erbjudandet från scoutshopen, erbjudanden om deltaganden i
          olika aktiviteter som t.ex. läger, kurser och arrangemang. Dina
          uppgifter behöver behandlas av oss för att vi ska kunna fullgöra våra
          skyldigheter gentemot dig som medlem.<br></br>
          Vi delar inte dina personuppgifter med andra, utom när vi har ett
          avtal med en tredje part. Det kan vara företag som förmedlar
          betalningar, trycker och skickar vår medlemstidning, beviljar bidrag
          till oss, eller på annat sätt är viktiga för vår verksamhet.<br></br>
          Du har rätt att begära tillgång till, rättelse eller under vissa
          förutsättningar radering av personuppgifter eller begränsning av
          behandling som rör dig. Tänk då på att det kan innebära att vi inte
          kan fullgöra våra förpliktelser gentemot dig som medlem. Du har vidare
          rätt att invända mot behandlingen. Som medlem med en registrerad
          e-postadress, kan du skapa en inloggning och logga in i
          medlemssystemet Scoutnet och kontrollera att vi har rätt uppgifter om
          dig. Då kan du också korrigera dina uppgifter om någonting ändrats,
          t.ex. om byter adress m.m.<br></br>
          Om du har frågor om vår behandling av personuppgifter är du välkommen
          att kontakta oss på scoutnet@scouterna.se<br></br>
          Utöver detta kan din lokala scoutkår behöva behandla dina
          personuppgifter för andra ändamål som i så fall specificeras här
          nedan. Kårspecifik information kring personuppgiftshantering
        </p>
        <div className="flex justify-end ">
          <button
            className="bg-primary text-accent px-6 py-3 rounded-sm font-bold"
            onClick={handelGdpr}
          >
            Stäng
          </button>
        </div>
      </div>
    </div>
  );
}
