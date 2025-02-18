import React from "react";
import { Button } from "./ui/button";
import { Link } from "@inertiajs/react";

function UpcomingEvent({ event }) {
    let upcomingEvent = event?.data;
    return (
        <div className="container flex flex-col lg:flex-row lg:gap-[66px] bg-gray-50">
            <div className="w-full lg:w-1/2 lg:pl-[39px] relative">
                <img
                    className="max-w-full w-full rounded-[30px]"
                    src={`/storage/${upcomingEvent.image}`}
                    alt="Event"
                />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="text-black text-[28px] md:text-[32px] font-normal font-abhaya leading-relaxed mb-[30px] ">
                    Upcoming Event
                </div>
                <div className="text-[#280d4a] text-[48px] md:text-[60px] lg:text-[70px] font-bold font-abhaya leading-[50px] md:leading-[55px] lg:leading-[63px] mb-[20px] w-full max-w-[360px]">
                    {upcomingEvent.title}
                </div>
                <div className="w-full max-w-[360px] text-black text-base font-normal font-inter leading-normal line-clamp-3">
                    {upcomingEvent.description}
                </div>
                <div className="text-[#9a9a9a] text-xl md:text-2xl font-Gilroy font-medium leading-7 md:leading-9 mt-4 md:mt-6">
                    {upcomingEvent.event_date}
                </div>
                <a href={upcomingEvent.link} target="_blank">
                    <Button className="rounded-full text-sm md:text-base font-Gilroy font-semibold mt-6 md:mt-9">
                        Register now
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default UpcomingEvent;
