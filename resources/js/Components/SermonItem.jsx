import React from "react";

function SermonItem() {
    return (
        <div className="w-full flex mb-[30px] gap-[19px]">
            <div className="w-[51px] h-[51px] rounded-full overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src="https://via.placeholder.com/51x51"
                />
            </div>
            <div className="flex flex-col">
                <div className="w-[266px] text-white text-[22px] font-semibold font-abhaya leading-snug">
                    Volutpat pellentesque bibendum metus nunc risus.
                </div>
                <div className="text-white text-xs font-normal font-inter leading-[18px]">
                    Pastor Henry Ajiri-Evans
                </div>
            </div>
        </div>
    );
}

export default SermonItem;
