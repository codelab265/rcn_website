import React from "react";
import Navbar from "../Navbar";
import RenewedCard from "./RenewedCard";

function Hero() {
    return (
        <section className="w-full relative h-[500px] sm:h-[700px] md:h-[900px] lg:h-[1157px] overflow-hidden bg-white">
            <Navbar />
            <img
                src="/images/hero/vector.png "
                className="absolute w-full -top-[47px] md:-top-[57px] lg:-top-[67px] lg:-right-[111px] bottom-0 "
            />
            <img
                src="/images/hero/texture.png"
                className="absolute w-full bg-blend-overlay mix-blend-overlay top-0 "
            />
            <img
                src="/images/hero/pastor.png"
                className="absolute mix-blend-overlay -right-[66px] top-[67px] "
            />
            <div className="absolute container h-full left-0 top-0 right-0 flex items-center md:pl-[110px]">
                <RenewedCard />
            </div>
            <div className="absolute top-[63px] right-[357px] w-[11px] h-[11px] bg-white rounded-full" />
            <div className="absolute top-[135px] right-[521px] w-[17px] h-[17px] bg-white rounded-full" />
            <div className="absolute top-[387px] right-[195px] w-[11px] h-[11px] bg-white rounded-full" />
            <img
                src="/images/hero/circle.png"
                className="absolute -top-[66.62px] right-[95.38px] w-[342.10px] h-[342.10px]"
            />
            <div className="z-0 absolute -top-[197.96px] -right-[35.95px] w-[639px] h-[639px] rotate-[-83.12deg] rounded-full border border-white/70" />
            <div className="z-0 absolute -right-[122px] -top-[284px] w-[883px] h-[883px] rounded-full border border-white" />
        </section>
    );
}

export default Hero;
