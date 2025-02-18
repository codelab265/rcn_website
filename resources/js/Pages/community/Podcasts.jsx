import CommunityMenu from "@/Components/CommunityMenu";
import Event from "@/Components/Event";
import Navbar from "@/Components/Navbar";
import Subcribe from "@/Components/Subcribe";
import { Button } from "@/Components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Podcasts(props) {
    return (
        <MainLayout data={props}>
            <Head title="Podcasts" />
            <Navbar />
            <section className="w-full pt-[209px] pb-[252px] bg-[#2fcff2] relative mb-[430px]">
                <div className="container max-w-[1080px] mx-auto md:pl-[68px] flex flex-col z-10">
                    <CommunityMenu />
                    <div
                        className="text-black font-bold font-abhaya mt-8 
                        text-[70px] leading-[50px] 
                        md:text-[120px] md:leading-[100px] 
                        lg:text-[180px] lg:leading-[160px] 
                        xl:text-[250px] xl:leading-[225px]"
                    >
                        Podcasts
                    </div>
                </div>
                <div
                    className="left-6 right-6  max-w-[1080px] h-[300px] md:h-[549px] bg-[#a2a2a2] rounded-[30px] mx-auto absolute -bottom-[137px] md:-bottom-[337px] flex flex-col justify-end py-8 md:py-[53px] px-6 md:px-[68px] -z-0"
                    style={{ backgroundImage: "url('/images/podcast.png')" }}
                >
                    <div
                        className="w-full max-w-[783px] text-white text-[50px] leading-[55px] 
    md:text-[80px] md:leading-[85px] 
    lg:text-[100px] lg:leading-[95px] 
    xl:text-9xl xl:leading-[95px] font-bold font-abhaya"
                    >
                        Coming <br />
                        Soon
                    </div>
                </div>
            </section>

            <Subcribe />
        </MainLayout>
    );
}

export default Podcasts;
