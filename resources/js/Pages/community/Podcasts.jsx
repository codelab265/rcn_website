import CommunityMenu from "@/Components/CommunityMenu";
import Event from "@/Components/Event";
import Navbar from "@/Components/Navbar";
import Subcribe from "@/Components/Subcribe";
import { Button } from "@/Components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Podcasts() {
    return (
        <MainLayout>
            <Head title="Podcasts" />
            <Navbar />
            <section className="w-full pt-[209px] pb-[252px] bg-[#2fcff2] relative mb-[430px]">
                <div className="w-full max-w-[1080px] mx-auto pl-[68px] flex flex-col z-10">
                    <CommunityMenu />
                    <div className=" text-black text-[250px] font-bold font-abhaya leading-[225px] top-4">
                        Podcasts
                    </div>
                </div>
                <div
                    className="w-[1080px] h-[549px] bg-[#a2a2a2] rounded-[30px] left-0 right-0 mx-auto absolute -bottom-[337px] flex flex-col justify-end py-[53px] px-[68px] -z-0 overflow-hidden"
                    style={{ backgroundImage: "url('/images/podcast.png')" }}
                >
                    <div className="w-[783px] text-white text-9xl font-bold font-abhaya leading-[95px]">
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
