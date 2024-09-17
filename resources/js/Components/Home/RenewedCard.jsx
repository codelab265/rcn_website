import React from "react";

const RenewedCard = () => {
    return (
        <div className="relative w-full  lg:w-[60%] rounded-lg overflow-hidden flex flex-col lg:justify-between z-10 ">
            <div className="text-[#280d4a] text-[64px] sm:text-[80px] md:text-[120px] lg:text-[160px] font-normal font-abhaya leading-[64px] sm:leading-[80px] md:leading-[120px] lg:leading-[175.20px]">
                Renewed
            </div>
            <div className="flex items-center gap-x-5 sm:gap-x-[25px]">
                <img
                    src="/images/hero/scrollDown.png"
                    alt=""
                    className="cursor-pointer w-[30px] md:w-auto"
                />
                <div className="text-[#280d4a] text-[64px] sm:text-[80px] md:text-[120px] lg:text-[160px] font-normal font-abhaya leading-[64px] sm:leading-[80px] md:leading-[120px] lg:leading-[175.20px] self-end">
                    in Christ
                </div>
            </div>

            <div className="flex justify-center -space-x-10 sm:-space-x-14 md:-space-x-20">
                <div className="w-[120px] sm:w-[180px] md:w-[240px] lg:w-[287px] h-[120px] sm:h-[180px] md:h-[240px] lg:h-[287px] rounded-full overflow-hidden border-white border-[8px] md:border-[11px] z-10">
                    <img
                        src="/images/hero/renewed-23.png"
                        alt="Person 3"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-[120px] sm:w-[180px] md:w-[240px] lg:w-[287px] h-[120px] sm:h-[180px] md:h-[240px] lg:h-[287px] rounded-full overflow-hidden border-white border-[8px] md:border-[11px] z-20">
                    <img
                        src="/images/hero/renewed-2.png"
                        alt="Person 2"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-[120px] sm:w-[180px] md:w-[240px] lg:w-[287px] h-[120px] sm:h-[180px] md:h-[240px] lg:h-[287px] rounded-full overflow-hidden border-white border-[8px] md:border-[11px] z-30">
                    <img
                        src="/images/hero/renewed-1.png"
                        alt="Person 1"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default RenewedCard;
