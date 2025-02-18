import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { Button } from "./ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { Menu } from "lucide-react";

function Navbar() {
    const { url } = usePage();

    const LinkItems = [
        {
            name: "Home",
            link: "/",
            active: route().current("home"),
        },
        {
            name: "About",
            link: "/about",
            active: route().current("about"),
        },

        {
            name: "Programmes",
            link: "/programmes",
            active: route().current("programmes"),
        },

        {
            name: "Community",
            link: "/community/events",
            active: route().current("community**"),
        },
        {
            name: "Store",
            link: "/store",
            active: route().current("store"),
        },

        {
            name: "Partnership",
            link: "/partnership",
            active: route().current("partnership"),
        },
        {
            name: "Contact Us",
            link: "/contact",
            active: route().current("contact"),
        },
    ];
    return (
        <div className="absolute top-[20px] sm:top-[30px] md:top-[47px] right-0 left-0 container flex justify-between items-center z-30">
            <div className="">
                <img
                    src="/images/logo.png"
                    className="w-[80px] h-[48px] sm:w-[90px] sm:h-[54px] md:w-[101px] md:h-[60.68px]"
                    alt="Logo"
                />
            </div>
            <div className="hidden lg:flex items-center space-x-5">
                {LinkItems.map((item) => (
                    <Link
                        href={item.link}
                        className={`text-lg font-Gilroy leading-[27px] hover:text-gray-900 ${
                            item.active
                                ? "text-black font-black"
                                : "text-black/90 font-semibold"
                        }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <Sheet>
                    <SheetTrigger className="lg:hidden">
                        <div className="p-[9px] bg-black rounded-lg text-white">
                            <Menu />
                        </div>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className="text-3xl">Menu</SheetTitle>
                            <SheetDescription className="flex flex-col gap-4 pt-4">
                                {LinkItems.map((item) => (
                                    <Link
                                        href={item.link}
                                        className={`text-lg font-Gilroy leading-[27px] hover:text-gray-900 ${
                                            url == item.link
                                                ? "text-black font-bold"
                                                : "text-black font-semibold"
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
                <Link href="/donate">
                    <Button className="px-[20px] sm:px-[25px] md:px-[30px] text-sm sm:text-base md:text-lg rounded-full bg-white text-black hover:text-white uppercase font-Gilroy font-semibold">
                        Give
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
