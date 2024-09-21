import CommunityMenu from "@/Components/CommunityMenu";
import Navbar from "@/Components/Navbar";
import SermonItem from "@/Components/SermonItem";
import Subcribe from "@/Components/Subcribe";
import { ScrollArea } from "@/Components/ui/scroll-area";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import { Search } from "lucide-react";
import React from "react";

function Sermons() {
    return (
        <MainLayout>
            <Head title="Sermons" />
            <Navbar />
            <section className="w-full pt-[209px] bg-[#FF5E00] relative">
                <div className="w-full max-w-[1080px] mx-auto pl-[68px] flex flex-col z-10">
                    <CommunityMenu />
                    <div className=" text-black text-[250px] font-bold font-abhaya leading-[225px] top-4">
                        Sermons
                    </div>
                </div>
                <div className="w-full flex flex-wrap h-[526px] mt-12 mb-[88px]">
                    <div className="w-2/5 h-full relative">
                        <div className="w-full h-full bg-cover opacity-50 bg-black" />
                        <img
                            src="/images/playButton.png"
                            className="absolute inset-0 m-auto cursor-pointer"
                            alt=""
                            srcset=""
                        />
                    </div>
                    <div className="w-1/5 flex flex-col">
                        <div className="w-full h-1/2">
                            <img
                                className="w-full h-full object-cover"
                                src="https://via.placeholder.com/350x264"
                            />
                        </div>
                        <div className="flex flex-col px-[29px] pt-[32px] pb-[26px]">
                            <img
                                className="w-[37.48px] h-[35.65px]"
                                src="/images/arrowUpLeft.png"
                            />
                            <div className="text-white/50 text-sm font-semibold font-abhaya leading-[16.80px] mt-[23px] mb-[14px]">
                                10 Hours Prayer
                            </div>
                            <div className="w-[292px] text-white text-[34px] font-bold font-abhaya leading-[30px]">
                                Duis justo ut neque libero ac sagittis mi.
                            </div>
                            <div className=" text-white text-sm font-normal font-inter leading-[21px] mt-4">
                                Pastor Henry Ajiri-Evans
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5 px-[38px] pt-11 bg-black">
                        <div className="flex justify-between items-center">
                            <div className="text-white text-[32px] font-bold font-abhaya leading-[38.40px]">
                                Latest
                            </div>
                            <Search className="text-white" />
                        </div>

                        <div className="w-full mt-[30px]">
                            <ScrollArea className="h-[400px] w-full text-white">
                                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                                    <SermonItem key={item} />
                                ))}
                            </ScrollArea>
                        </div>
                    </div>
                </div>
            </section>
            <Subcribe />
        </MainLayout>
    );
}

export default Sermons;
