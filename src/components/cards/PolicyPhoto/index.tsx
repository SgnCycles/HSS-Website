import Image from "next/image";
import Button from "@/components/buttons/Button";

const PolicyPhoto = () => {
  return (
    <section className="relative bg-yellow-100">
      <article className="container">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/Icons/camera-icon.svg"
            alt=""
            width={30}
            height={30}
            className="h2-icon"
          />
          <h2 className="heading-2">Våra fotopolicy</h2>
        </div>
        <p className="paragraph-light">
          Vi fotograferar våra aktiviteter och använder bilderna på vår hemsida
          och i sociala medier för att göra reklam för vår verksamhet. Vi
          publicerar aldrig namn på våra scouter. Genom att vara medlem i HSS
          samtycker man till detta. Om ditt barn av någon anledning inte får
          vara med på bild så kontakta ledarna så att de får kännedom om det.
          <br></br>
          Om ditt barn av någon anledning inte får vara med på bild så kontakta
          ledarna så att de får kännedom om det.
        </p>

        <div className="text-end">
          <Button
            ariaLabel="mail button"
            href="mailto:info@hss-scout.org"
            variant="primaryBlue"
            text="Kontakta oss"
          />
        </div>
        <Image
          src="/Icons/caret_down.svg"
          alt=""
          width={30}
          height={30}
          className="mx-auto mt-6"
        />
      </article>
    </section>
  );
};

export default PolicyPhoto;