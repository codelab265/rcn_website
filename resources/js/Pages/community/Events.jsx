import CommunityMenu from "@/Components/CommunityMenu";
import Event from "@/Components/Event";
import Navbar from "@/Components/Navbar";
import Subcribe from "@/Components/Subcribe";
import { Button } from "@/Components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import axios from "axios";
import React, { useEffect } from "react";

function Events() {
    useEffect(() => {
        const token = "ZXHQDJK25SQ42ORQNY4C";
        const organization_id = "2346826942443";

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "x-requested-with": null, // Disable the default header
            },
        };

        axios
            .get(
                `https://www.eventbriteapi.com/v3/organizations/${organization_id}/events/`,
                config
            )
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <MainLayout>
            <Head title="Events" />
            <Navbar />
            <section className="w-full pt-[209px] pb-[252px] bg-[#ffd200] relative">
                <div className="w-full max-w-[1080px] mx-auto pl-[68px] flex flex-col z-10">
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
                <div className="left-6 right-6  max-w-[1080px] h-[300px] md:h-[549px] bg-[#a2a2a2] rounded-[30px] mx-auto absolute -bottom-[137px] md:-bottom-[337px] flex flex-col justify-end py-8 md:py-[53px] px-6 md:px-[68px] -z-0">
                    <div className="text-[#717171] text-[24px] md:text-[32px] font-bold font-abhaya leading-[30px] md:leading-[38.40px]">
                        Featured
                    </div>
                    <div className="max-w-full md:max-w-[783px] text-black text-[30px] md:text-[50px] font-bold font-abhaya leading-[36px] md:leading-[60px] mt-4">
                        Nulla ut dignissim nibh malesuada. Et amet vitae massa
                        nunc.
                    </div>
                </div>
            </section>
            <section className="w-full pt-[280px]  lg:pt-[456px]">
                <div className="container flex flex-col lg:flex-row lg:gap-[66px]">
                    <div className="w-full lg:w-1/2 lg:pl-[39px]">
                        <img
                            className="max-w-full w-full rounded-[30px]"
                            src="/images/event.png"
                            alt="Event"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="text-black text-[28px] md:text-[32px] font-normal font-abhaya leading-relaxed mt-[40px] md:mt-[60px] lg:mt-[73px]">
                            Upcoming Event
                        </div>
                        <div className="text-[#280d4a] text-[48px] md:text-[60px] lg:text-[70px] font-bold font-abhaya leading-[50px] md:leading-[55px] lg:leading-[63px] my-[20px] md:my-[30px]">
                            Healing and Prophetic
                            <br />
                            Streams
                        </div>
                        <div className="text-[#9a9a9a] text-xl md:text-2xl font-Gilroy font-medium leading-7 md:leading-9 mt-4 md:mt-6">
                            25 August, 2024
                        </div>
                        <Button className="rounded-full text-sm md:text-base font-Gilroy font-semibold mt-6 md:mt-9">
                            Register now
                        </Button>
                    </div>
                </div>
            </section>
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
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                        <Event />
                    ))}
                </div>
                <div className="flex justify-center mt-[93px] mb-[109px]">
                    <Button className="rounded-[100px] bg-black text-sm md:text-base font-inter font-semibold mt-6 md:mt-9 p-5 h-[52px]">
                        Load More
                    </Button>
                </div>
            </section>
            <Subcribe />
        </MainLayout>
    );
}

export default Events;
