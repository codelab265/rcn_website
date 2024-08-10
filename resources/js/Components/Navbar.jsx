import { Link } from "@inertiajs/react";
import React from "react";
import { Button } from "./ui/button";

function Navbar() {
    const LinkItems = [
        {
            name: "About",
            link: "/",
        },

        {
            name: "Programs",
            link: "/",
        },

        {
            name: "E-Church",
            link: "/",
        },

        {
            name: "Partnership",
            link: "/",
        },
    ];
    return (
        <div className="absolute top-[47px] right-0 left-0 container  flex justify-between items-center z-30">
            <div className="">
                <img src="/images/logo.png" className="w-[101px] h-[60.68px]" />
            </div>
            <div className="flex items-center space-x-5">
                {LinkItems.map((item) => (
                    <Link
                        href={item.link}
                        className="text-black text-lg font-normal font-inter leading-[27px]"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className="">
                <Button className="px-[30px] py-[15px] text-base rounded-full bg-white text-black hover:text-white uppercase">
                    Give
                </Button>
            </div>
        </div>
    );
}

export default Navbar;
