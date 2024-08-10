import React from "react";
import Navbar from "../Navbar";
import RenewedCard from "./RenewedCard";

function Hero() {
    return (
        <section className="w-full relative h-[1157px] overflow-hidden  bg-white">
            <Navbar />
            <img
                src="/images/hero/vector.png "
                className="absolute w-full -top-[67px] -right-[111px] bottom-0 "
            />
            <img
                src="/images/hero/texture.png"
                className="absolute w-full bg-blend-overlay mix-blend-overlay top-0 "
            />
            <img
                src="/images/hero/pastor.png"
                className="absolute mix-blend-overlay -right-[66px] top-[67px] "
            />
            <div className="absolute container h-full left-0 top-0 right-0 flex items-center pl-[110px]">
                <RenewedCard />
            </div>
        </section>
    );
}

export default Hero;
