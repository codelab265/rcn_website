import React from "react";

function Event() {
    return (
        <div className="flex flex-col col-span-12 md:col-span-6 lg:col-span-4">
            <div className="w-full h-[283px] bg-[#a2a2a2] rounded-[30px]" />
            <div className="text-black text-[34px] font-bold font-abhaya leading-[34px] mt-5">
                Nunc nunc vitae non turpis lectus
            </div>
            <div className=" text-black text-base font-normal font-inter leading-normal ">
                Rhoncus etiam semper malesuada maecenas. Nulla cras semper
                tincidunt aenean arcu diam sit bibendum lacus. Sem.
            </div>
            <div className="text-[#a8a8a8] text-base font-medium font-inter leading-normal mt-3">
                18 Sept 2024
            </div>
        </div>
    );
}

export default Event;
