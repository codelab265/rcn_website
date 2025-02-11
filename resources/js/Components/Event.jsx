import React from "react";

function Event({ event }) {
    return (
        <div className="flex flex-col col-span-12 md:col-span-6 lg:col-span-4">
            <div className="w-full h-[283px] bg-[#a2a2a2] rounded-[30px] overflow-hidden">
                <img
                    src={`/storage/${event.image}`}
                    alt=""
                    srcset=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="text-black text-[34px] font-bold font-abhaya leading-[34px] mt-5 line-clamp-2">
                {event.title}
            </div>
            <div className=" text-black text-base font-normal font-inter leading-normal line-clamp-3">
                {event.description}
            </div>
            <div className="text-[#a8a8a8] text-base font-medium font-inter leading-normal mt-3">
                {event.event_date}
            </div>
        </div>
    );
}

export default Event;
