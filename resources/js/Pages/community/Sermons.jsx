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
            <section className="w-full pt-[209px] bg-purple-400 relative">
                <div className="container w-full max-w-[1080px] mx-auto pl-[68px] flex flex-col z-10">
                    <CommunityMenu />
                    <div
                        className="text-black font-bold font-abhaya mt-8 
    text-[70px] leading-[50px] 
    md:text-[120px] md:leading-[100px] 
    lg:text-[180px] lg:leading-[160px] 
    xl:text-[250px] xl:leading-[225px]"
                    >
                        Sermons
                    </div>
                </div>
                <div className="w-full flex flex-wrap md:h-[526px] mt-12 mb-[88px]">
                    <div className="w-full md:w-2/5 h-[300px] md:h-full relative overflow-hidden">
                        <div className="w-full h-full opacity-50 bg-black  object-cover" />
                        <img
                            src="/images/playButton.png"
                            className="absolute inset-0 m-auto cursor-pointer "
                            alt=""
                        />
                    </div>

                    <div className="w-full md:w-1/5 flex flex-col">
                        <div className="w-full h-[300px] md:h-1/2">
                            <img
                                className="w-full h-full object-cover"
                                src="https://via.placeholder.com/350x264"
                            />
                        </div>
                        <div className="flex flex-col px-6 pt-8 pb-6">
                            <img
                                className="w-[37px] h-[36px]"
                                src="/images/arrowUpLeft.png"
                            />
                            <div className="text-white/50 text-sm font-semibold font-abhaya leading-[16px] mt-6 mb-4">
                                10 Hours Prayer
                            </div>
                            <div className="w-full text-white text-xl md:text-[34px] font-bold font-abhaya leading-[30px]">
                                Duis justo ut neque libero ac sagittis mi.
                            </div>
                            <div className="text-white text-sm font-normal font-inter leading-[21px] mt-4">
                                Pastor Henry Ajiri-Evans
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-2/5 px-6 md:px-[38px] pt-6 md:pt-11 bg-black">
                        <div className="flex justify-between items-center">
                            <div className="text-white text-lg md:text-[32px] font-bold font-abhaya leading-[38px]">
                                Latest
                            </div>
                            <Search className="text-white" />
                        </div>

                        <div className="w-full mt-6 md:mt-[30px]">
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
