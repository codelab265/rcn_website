import Demo from "@/Components/Demo";
import Hero from "@/Components/Home/Hero";
import ProgramSlider from "@/Components/Home/ProgramSlider";
import Navbar from "@/Components/Navbar";
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
            <Navbar />
            <Hero />
            <section className="container mb-[80px] md:mt-[150px] md:mb-[120px]  relative">
                <div className="max-w-[1080px] mx-auto flex flex-col-reverse lg:flex-row gap-[20px] md:gap-[63px]">
                    <div className="w-full lg:w-1/2">
                        <div className="w-[528px] text-black text-[32px] font-bold font-abhaya leading-[38.40px]">
                            Every believer is meant to be part of a community.
                            God's intention was never for us to navigate life
                            alone.
                        </div>
                        <div class="text-black text-sm sm:text-base font-normal font-inter leading-normal mt-[20px] sm:mt-[25px] md:mt-[30px] mb-5 sm:mb-6 md:mb-7">
                            Our mission is to restore the apostolic order of
                            Christianity as was seen in the days of the first
                            generation of apostles of Jesus Christ, and thereby
                            heralding the coming of the Lord Jesus Christ in
                            this end of the age.
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-[15px]">
                            <Button className="rounded-full py-4 px-6 font-Gilroy font-semibold text-sm sm:text-base">
                                Become Member
                            </Button>
                            <Button className="rounded-full py-4 px-6 text-[#272727] bg-[#f1f1f1] hover:bg-gray-200 font-Gilroy font-semibold text-sm sm:text-base">
                                About Us
                            </Button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 rounded-[30px] overflow-hidden">
                        <img
                            src="/images/believe.png"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div class="absolute text-[#dddddd] text-[100px] md:text-[200px] font-normal font-abhaya leading-[150px] sm:leading-[200px] md:leading-[240px] left-[10px] sm:left-[32px] -top-[12rem] sm:-top-[15rem] md:-top-[19rem]">
                    Believe
                </div>
            </section>

            <ProgramSlider />
            <section className="w-full mt-[80px] sm:mt-[100px] md:mt-[141px] md:pt-[80px] sm:pt-[100px] pb-[60px] sm:pb-[80px] md:pb-[98px] mb-[100px] sm:mb-[120px] md:mb-[161px] bg-[#150827] lg:bg-[#210f38]">
                <div className="md:container relative">
                    <div className="w-full md:w-[70%] relative md:static">
                        <img
                            class="md:max-w-[730px] md:max-h-[602px] w-full h-full rounded-[30px] opacity-60"
                            src="/images/seek.png"
                        />
                        <div class="absolute top-[60px] md:top-[101px] md:right-[235px] w-full md:max-w-[566px] space-y-4 md:space-y-[30px] z-10 px-5 md:px-0">
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
                        <div className="absolute bottom-[16px] right-[10px] md:right-[148px] text-[#c48efa]/20 text-[150px] md:text-[300px] font-normal font-abhaya leading-[100px] md:leading-[240px] z-10">
                            Belong
                        </div>
                    </div>
                    <div className="absolute bg-[#280D4A]/70 md:bg-[#280D4A]/40 w-full h-full top-0 left-0"></div>
                </div>
            </section>
            <section className="w-full py-[109px] sm:py-[80px] md:py-[90px] lg:py-[109px]">
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

            <section className="px-8 flex flex-col bg-[#f9f9f9] mb-[100px] sm:mb-[120px] md:mb-[140px] lg:mb-[158px]">
                <h1 className="max-w-full text-[100px] sm:text-[160px] md:text-[220px] lg:text-[260px] font-abhaya font-normal text-[#DEDEDE]">
                    Become
                </h1>
                <div className="flex flex-col-reverse lg:flex-row gap-[40px] sm:gap-[50px] lg:gap-[63px] pb-[100px] sm:pb-[120px] md:pb-[140px] lg:pb-[161px]">
                    <div className="w-full lg:w-1/2 lg:pl-[120px]">
                        <div className="w-full lg:max-w-[528px]">
                            <div className="text-black text-[24px] sm:text-[28px] md:text-[32px] font-bold font-abhaya leading-[30px] sm:leading-[34px] md:leading-[38.40px]">
                                As we believe and belong, we are also called to
                                become all that God has destined us to be.
                            </div>
                            <div className="text-black text-sm sm:text-base font-normal font-inter leading-normal mt-[20px] sm:mt-[25px] md:mt-[30px] mb-5 sm:mb-6 md:mb-7">
                                Our journey doesn’t end at salvation; it
                                continues as we grow in the knowledge of Christ
                                and are transformed into His likeness. At RCN
                                London, we are committed to equipping every
                                believer to become a mature disciple of Christ,
                                fully equipped for every good work.
                                <br />
                                <br />
                                Through discipleship, mentoring, and a life
                                rooted in the Word, we encourage each person to
                                rise to their God-given potential, becoming a
                                vessel of honour in the service of our Lord.
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img
                            src="/images/become.png"
                            className="w-full max-w-full lg:max-w-[516px] h-auto"
                            alt="Become"
                        />
                    </div>
                </div>
            </section>

            <Subcribe />
        </MainLayout>
    );
}

export default Home;
