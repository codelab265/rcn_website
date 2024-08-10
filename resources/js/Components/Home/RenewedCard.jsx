import React from "react";

const RenewedCard = () => {
    return (
        <div className="relative w-[60%]  rounded-lg overflow-hidden flex flex-col justify-between">
            <div className="text-[#280d4a] text-[160px] font-normal font-abhaya leading-[175.20px]">
                Renewed
            </div>

            <div className="flex justify-center -space-x-20">
                <div className="w-[287px] h-[287px] rounded-full overflow-hidden border-white border-[11px] z-10">
                    <img
                        src="/images/hero/renewed-1.png"
                        alt="Person 1"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-[287px] h-[287px] rounded-full overflow-hidden border-white border-[11px] z-20">
                    <img
                        src="/images/hero/renewed-2.png"
                        alt="Person 2"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-[287px] h-[287px] rounded-full overflow-hidden border-white border-[11px] z-30">
                    <img
                        src="/images/hero/renewed-23.png"
                        alt="Person 3"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="text-[#280d4a] text-[160px] font-normal font-abhaya leading-[175.20px] self-end">
                in Christ
            </div>
        </div>
    );
};

export default RenewedCard;
