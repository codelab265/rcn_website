import Demo from "@/Components/Demo";
import Hero from "@/Components/Home/Hero";
import ProgramSlider from "@/Components/Home/ProgramSlider";
import Subcribe from "@/Components/Subcribe";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Home() {
    return (
        <MainLayout>
            <Head title="Home" />
            <Hero />
            <section className="container mt-[214px] mb-[120px] flex gap-[63px] relative">
                <div className="w-1/2 pl-[120px]">
                    <div className="max-w-[528px]">
                        <div class=" text-black text-[32px] font-bold font-abhaya leading-[38.40px]">
                            Every believer is meant to be part of a community.
                            God's intention was never for us to navigate life
                            alone.
                        </div>
                        <div class=" text-black text-base font-normal font-inter leading-normal mt-[30px] mb-7">
                            Our mission is to restore the apostolic order of
                            Christianity as was seen in the days of the first
                            generation of apostles of Jesus Christ, and thereby
                            heralding the coming of the Lord Jesus Christ in
                            this end of the age.
                        </div>
                        <div className="flex space-x-[15px]">
                            <Button className="rounded-full p-5 font-Gilroy font-semibold text-base">
                                Become Member
                            </Button>
                            <Button className="rounded-full p-5 text-[#272727] bg-[#f1f1f1] hover:bg-gray-200 font-Gilroy font-semibold text-base">
                                About Us
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <img
                        src="/images/believe.png"
                        className="w-full max-w-[599px] h-auto"
                    />
                </div>
                <div class="absolute text-[#dddddd] text-[300px] font-normal font-abhaya leading-[240px] left-[32px] -top-[19rem] ">
                    Believe
                </div>
            </section>
            <ProgramSlider />
            <section className="w-full mt-[141px] pt-[123px] pb-[98px] mb-[161px] bg-[#280D4A]">
                <div className="container relative">
                    <div className="w-[70%]">
                        <img
                            class="max-w-[730px] max-h-[602px] w-full rounded-[30px]"
                            src="/images/seek.png"
                        />
                        <div class="absolute top-[101px] right-[235px] max-w-[566px] space-y-[30px] z-10">
                            <div className="text-white text-[32px] font-bold font-abhaya leading-[38.40px]">
                                We seek only to see the coming of the King and
                                His Kingdom until His reality is furnished in
                                the hearts of the sons of men.
                            </div>

                            <div class="text-white text-base font-normal font-inter leading-normal">
                                Our major instruments of realizing this vision
                                are Prayers, the Study of the Word, and Breaking
                                of Bread with one another
                            </div>
                        </div>
                        <div class="absolute -bottom-[17px] right-[148px] text-[#c48efa]/20 text-[300px] font-normal font-abhaya leading-[240px] z-10">
                            Belong
                        </div>
                    </div>
                    <div className="absolute bg-[#280D4A]/40 w-full h-full top-0 left-0"></div>
                </div>
            </section>
            <section className="w-full py-[109px]">
                <div className="container flex  gap-[66px]">
                    <div className="w-1/2 pl-[39px]">
                        <img
                            class="max-w-[599px] w-full rounded-[30px]"
                            src="/images/event.png"
                        />
                    </div>
                    <div className="w-1/2">
                        <div class=" text-black text-[32px] font-normal font-abhaya leading-relaxed mt-[73px]">
                            Upcoming Event
                        </div>
                        <div class=" text-[#280d4a] text-[70px] font-bold font-abhaya leading-[63px] my-[30px]">
                            Healing and Prophetic
                            <br />
                            Streams
                        </div>
                        <div class="text-[#9a9a9a] text-2xl font-Gilroy font-medium leading-9 mt-6">
                            25 August, 2024
                        </div>
                        <Button className="rounded-full text-base font-Gilroy font-semibold mt-9">
                            Register now
                        </Button>
                    </div>
                </div>
            </section>
            <section className="container flex flex-col bg-[#f9f9f9] mb-[158px]">
                <h1 className="max-w-[962px] text-[260px] font-abhaya font-normal text-[#DEDEDE]">
                    Become
                </h1>
                <div className="flex gap-[63px] pb-[161px]">
                    <div className="w-1/2 pl-[120px]">
                        <div className="max-w-[528px]">
                            <div class=" text-black text-[32px] font-bold font-abhaya leading-[38.40px]">
                                Urna diam luctus platea platea aliquet amet
                                elementum. Praesent lectus luctus auctor velit
                                urna a sagittis.
                            </div>
                            <div class=" text-black text-base font-normal font-inter leading-normal mt-[30px] mb-7">
                                Ipsum mus orci justo nunc odio. Sit sagittis in
                                ac sem mi faucibus. Faucibus id est sed molestie
                                lacus nibh auctor fringilla. Vestibulum
                                tristique ornare morbi egestas placerat mauris.
                                Integer odio vivamus lacus nibh at at senectus
                                faucibus.
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img
                            src="/images/become.png"
                            className="w-full max-w-[516px] h-auto"
                        />
                    </div>
                </div>
            </section>

            <Subcribe />
        </MainLayout>
    );
}

export default Home;
