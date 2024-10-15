import { Link } from "@inertiajs/react";
import React from "react";

function Footer({ policies, socialLinks }) {
    const LinkItems = [
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

    const LegalLinks = [
        {
            name: "Privacy Policy",
            link: "/privacy-policy",
        },
        {
            name: "Cookie Policy",
            link: "/cookie-policy",
        },

        {
            name: "Terms of Use/Service",
            link: "/terms-and-conditions",
        },
        {
            name: "Copyright Notice",
            link: "/copyright-notice",
        },
        {
            name: "Accessibility Statement",
            link: "/accessibility-statement",
        },
        {
            name: "Data Protection Policy",
            link: "/data-protection-policy",
        },
        {
            name: "Donation/Refund Policy",
            link: "/donation-refund-policy",
        },
    ];
    return (
        <footer className="container grid grid-cols-2 lg:grid-cols-4 pt-[82px] pb-[77px] bg-[#f9f9f9] gap-10 md:gap-[60px]">
            <div className="flex flex-col justify-between">
                <img
                    src="/images/logo.png"
                    className="w-[80px] h-[48px] sm:w-[90px] sm:h-[54px] md:w-[101px] md:h-[60.68px]"
                    alt="Logo"
                />
                <div className="text-[#c4c4c4] text-base md:text-lg font-medium font-inter leading-tight lg:pb-[29px]">
                    © {new Date().getFullYear()} <br />
                    RCN LONDON
                </div>
            </div>
            <div className="flex flex-col">
                <div className="text-black text-xl font-bold font-abhaya leading-normal">
                    NAVIGATION
                </div>
                <div className="w-full h-[2px] bg-[#d2d2d2] mt-[9px] mb-[25px]"></div>
                <div className="flex flex-col gap-[5px]">
                    {LinkItems.map((item) => (
                        <Link
                            href={item.link}
                            className="text-black text-base font-normal font-inter leading-normal"
                            key={item.name}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex flex-col">
                <div className="text-black text-xl font-bold font-abhaya leading-normal">
                    SOCIALS
                </div>
                <div className="w-full h-[2px] bg-[#d2d2d2] mt-[9px] mb-[25px]"></div>
                <div className="flex flex-col gap-[5px]">
                    {socialLinks.map((item) => (
                        <a
                            href={item.link}
                            className="text-black text-base font-normal font-inter leading-normal"
                            key={item.name}
                            target="_blank"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex flex-col">
                <div className="text-black text-xl font-bold font-abhaya leading-normal">
                    LEGAL
                </div>
                <div className="w-full h-[2px] bg-[#d2d2d2] mt-[9px] mb-[25px]"></div>
                <div className="flex flex-col gap-[5px]">
                    {policies.map((item) => (
                        <Link
                            href={item.link_name}
                            className="text-black text-base font-normal font-inter leading-normal"
                            key={item.link_name}
                        >
                            {item.link_name}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
