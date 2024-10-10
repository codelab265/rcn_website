import { Link } from "@inertiajs/react";
import React from "react";

function CommunityMenu() {
    const CommunityLinks = [
        {
            name: "Events",
            link: "/community/events",
            active: route().current("community.events"),
        },
        {
            name: "Sermons",
            link: "/community/sermons",
            active: route().current("community.sermons"),
        },
        {
            name: "News",
            link: "/community/news",
            active: route().current("community.news"),
        },
        {
            name: "Podcasts",
            link: "/community/podcasts",
            active: route().current("community.podcasts"),
        },
        {
            name: "Gallery",
            link: "/community/gallery",
            active: route().current("community.gallery"),
        },
    ];
    return (
        <div className="flex flex-wrap items-center gap-5 z-10">
            {CommunityLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.link}
                    className={`text-black/30 text-xl font-bold font-abhaya leading-[18px] ${
                        link.active
                            ? "text-black/80 !text-[28px] !font-bold !leading-[25.20px]"
                            : "text-[#6B7280] font-normal"
                    }`}
                >
                    {link.name}
                </Link>
            ))}
        </div>
    );
}

export default CommunityMenu;
