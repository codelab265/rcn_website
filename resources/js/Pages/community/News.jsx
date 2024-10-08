import CommunityMenu from "@/Components/CommunityMenu";
import Event from "@/Components/Event";
import Navbar from "@/Components/Navbar";
import Subcribe from "@/Components/Subcribe";
import { Button } from "@/Components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function News(props) {
    const { news } = props;
    return (
        <MainLayout>
            <Head title="News" />
            <Navbar />
            <section className="w-full pt-[209px] pb-[252px] bg-[#bee46c] relative">
                <div className="container max-w-[1080px] mx-auto md:pl-[68px] flex flex-col z-10">
                    <CommunityMenu />
                    <div
                        className="text-black font-bold font-abhaya mt-8 
                        text-[70px] leading-[50px] 
                        md:text-[120px] md:leading-[100px] 
                        lg:text-[180px] lg:leading-[160px] 
                        xl:text-[250px] xl:leading-[225px]"
                    >
                        News
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

            <section className="container mt-[258px] md:mt-[458px]">
                <div
                    className="text-[#dddddd] text-[80px] leading-[70px] 
    md:text-[150px] md:leading-[130px] 
    lg:text-[200px] lg:leading-[170px] 
    xl:text-[300px] xl:leading-[240px] font-normal font-abhaya"
                >
                    Recent
                </div>
                <div className="w-full max-w-[1080px] mx-auto grid grid-cols-12 gap-x-[30px] gap-y-[57px] mt-10">
                    {news.data.map((item) => (
                        <Event event={item} />
                    ))}
                </div>
                {news.data.length > 0 && (
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

export default News;
