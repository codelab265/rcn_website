import CommunityMenu from "@/Components/CommunityMenu";
import Event from "@/Components/Event";
import Navbar from "@/Components/Navbar";
import Subcribe from "@/Components/Subcribe";
import { Button } from "@/Components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function News() {
    return (
        <MainLayout>
            <Head title="News" />
            <Navbar />
            <section className="w-full pt-[209px] pb-[252px] bg-[#bee46c] relative">
                <div className="w-full max-w-[1080px] mx-auto pl-[68px] flex flex-col z-10">
                    <CommunityMenu />
                    <div className=" text-black text-[250px] font-bold font-abhaya leading-[225px] top-4">
                        News
                    </div>
                </div>
                <div className="w-[1080px] h-[549px] bg-[#a2a2a2] rounded-[30px] left-0 right-0 mx-auto absolute -bottom-[337px] flex flex-col justify-end py-[53px] px-[68px] -z-0">
                    <div className="text-[#717171] text-[32px] font-bold font-abhaya leading-[38.40px]">
                        Featured
                    </div>
                    <div className="max-w-[783px]  text-black text-[50px] font-bold font-abhaya leading-[60px]">
                        Nulla ut dignissim nibh malesuada. Et amet vitae massa
                        nunc{" "}
                    </div>
                </div>
            </section>

            <section className="container mt-[458px]">
                <div className="text-[#dddddd] text-[300px] font-normal font-abhaya leading-[240px]">
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

export default News;
