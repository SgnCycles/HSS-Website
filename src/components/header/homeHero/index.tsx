"use client";

import Image from "next/image";
import Link from "next/link";
interface HeroProps {
  img: string;
}

export default function HomeHero({ img }: HeroProps) {
  return (
    <div
      className="bg-cover relative bg-no-repeat w-full h-[288px] md:h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "left bottom",
      }}
    >
      <div className="hidden md:flex flex-col text-center relative -translate-y-65">
        <h1 className="font-body font-extrabold text-[64px] leading-none text-center">
          <span className="block text-white">Välkommen till </span>
          <span className="block text-accent">Hässelby Strand Sjöscoutkår</span>
        </h1>
      </div>
      <div
        className="hidden px-32 mt-3 md:flex justify-between items-center bg-cover w-full h-[258px] absolute bottom-0"
        style={{
          backgroundImage: "url('/images/Backgrounds/homewavy.svg')",
        }}
      >
        <p>
          <span className="block font-bold font-body text-background">
            Vi är en stolt sjöscoutkår som ger barn och ungdomar en trygg plats
          </span>
          <span className="block font-bold font-body text-background">
            att växa, lära sig sjömanskap och skapa livslånga vänner.
          </span>
        </p>
        <Link
          href="/vad-gor-vi"
          className="cursor-pointer pt-[19px] pr-[64px] pb-[22px] pl-[64px] font-body bg-primary rounded-sm rounded-lg rounded-lg text-accent border-accent border-2"
        >
          Bli scout
        </Link>
      </div>
      <Image
        src="/images/Backgrounds/homewavy.svg"
        alt=""
        width={393}
        height={55}
        className="md:hidden relative top-[119px]"
      ></Image>
      <div className="md:hidden w-[396px] h-[190px] bg-primary absolute top-[288px] flex flex-col justify-center items-center">
        <span className="block font-heading text-background font-bold">
          Välkommen till
        </span>
        <span className="block font-heading text-accent font-bold">
          Hässelby Strand Sjöscoutkår
        </span>
        <div className="mt-2">
          <span className="block text-sm font-medium left-[16px] font-body text-background">
            Vi är en sjöscoutkår där barn och ungdomar får växa,
          </span>
          <span className="block font-medium font-body text-background left-[16px]">
            lära sig sjömanskap och skapa vänner för livet.
          </span>
        </div>
        <Link
          href="/vad-gor-vi"
          className="w-[357px] h-[48px] mt-2 md:hidden cursor-pointer pt-[19px] pr-[64px] pb-[22px] pl-[64px] font-body bg-primary rounded-sm rounded-lg rounded-lg text-accent border-accent border-2 flex justify-center items-center"
        >
          Bli scout
        </Link>
      </div>
    </div>
  );
}
