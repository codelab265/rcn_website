import CommunityMenu from "@/Components/CommunityMenu";
import Event from "@/Components/Event";
import Navbar from "@/Components/Navbar";
import Subcribe from "@/Components/Subcribe";
import UpcomingEvent from "@/Components/UpcomingEvent";
import { Button } from "@/Components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import axios from "axios";
import React, { useEffect } from "react";

function Events(props) {
    const { events, upcomingEvent } = props;

    return (
        <MainLayout>
            <Head title="Events" />
            <Navbar />
            <section className="w-full pt-[209px] pb-[252px] bg-[#ffd200] relative">
                <div className="container max-w-[1080px] mx-auto md:pl-[68px] flex flex-col z-10">
                    <CommunityMenu />
                    <div
                        className="text-black font-bold font-abhaya mt-8 
                        text-[70px] leading-[50px] 
                        md:text-[120px] md:leading-[100px] 
                        lg:text-[180px] lg:leading-[160px] 
                        xl:text-[250px] xl:leading-[225px]"
                    >
                        Events
                    </div>
                </div>
                <div className="left-6 right-6 max-w-[1080px] h-[300px] md:h-[549px] bg-black rounded-[30px] mx-auto absolute -bottom-[137px] md:-bottom-[337px]  -z-0 overflow-hidden">
                    <div className="w-full h-full flex flex-col justify-end py-8 md:py-[53px] px-6 md:px-[68px] relative">
                        <div className="text-[#717171] text-[24px] md:text-[32px] font-bold font-abhaya leading-[30px] md:leading-[38.40px] z-10">
                            Featured
                        </div>
                        <div className="max-w-full md:max-w-[783px] text-white text-[30px] md:text-[50px] font-bold font-abhaya leading-[36px] md:leading-[60px] mt-4 z-10">
                            Our Spiritual Events They Bring Life Transformation
                            By The Power of The Blood Of Jesus
                        </div>
                        <img
                            className="absolute bottom-0 right-0 w-full h-full object-cover opacity-30"
                            src="/images/events.png"
                        />
                    </div>
                </div>
            </section>
            {upcomingEvent && (
                <section className="w-full pt-[280px] md:pt-[456px]">
                    <UpcomingEvent event={upcomingEvent} />
                </section>
            )}
            {!upcomingEvent && (
                <div className="w-full pt-[280px] md:pt-[456px]" />
            )}
            <section className="container mt-[126px]">
                <div
                    className="text-[#dddddd] text-[80px] leading-[70px] 
    md:text-[150px] md:leading-[130px] 
    lg:text-[200px] lg:leading-[170px] 
    xl:text-[300px] xl:leading-[240px] font-normal font-abhaya"
                >
                    Recent
                </div>

                <div className="w-full max-w-[1080px] mx-auto grid grid-cols-12 gap-x-[30px] gap-y-[57px] mt-10">
                    {events.data.map((item) => (
                        <Event event={item} />
                    ))}
                </div>

                {events.data.length > 0 && (
                    <div className="flex justify-center mt-[93px] mb-[109px]">
                        <Button className="rounded-[100px] bg-black text-sm md:text-base font-inter font-semibold mt-6 md:mt-9 p-5 h-[52px]">
                            Load More
                        </Button>
                    </div>
                )}
            </section>
            <Subcribe />
        </MainLayout>
    );
}

export default Events;
