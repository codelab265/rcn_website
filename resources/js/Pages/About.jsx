import Navbar from "@/Components/Navbar";
import Subcribe from "@/Components/Subcribe";
import { Button } from "@/Components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function About() {
    return (
        <MainLayout>
            <Head title="About us" />
            <section
                className="w-full relative h-[739px] overflow-hidden  bg-white overflow-hidden
            "
            >
                <Navbar />

                <div
                    className="w-[1155px] h-[1155px] rounded-full absolute -top-[458px] -right-[535px]"
                    style={{
                        background:
                            "radial-gradient(41.76% 41.76% at 50% 50%, #095DFF 0%, rgba(191, 9, 255, 0.00) 100%)",
                        filter: "blur(150px)",
                    }}
                />
                <div
                    style={{
                        borderRadius: "30px",
                        backgroundImage: "url('/images/about/hero.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: "lightgray",
                        mixBlendMode: "overlay",
                        width: "995px",
                        height: "739px",
                        position: "absolute",
                        top: "0",
                        right: "-190px",
                    }}
                ></div>
                {/* <img
                    className="absolute w-[995px] h-[739px] mix-blend-overlay rounded-[30px] top-0 -right-[90px]"
                    src="/images/about/hero.png"
                /> */}
                <div className="max-w-[1080px] w-full mx-auto flex items-center h-full">
                    <div className="w-[650px] text-black text-[64px] font-bold font-abhaya leading-[70.40px]">
                        We are a people helped by God, united by His grace, and
                        strengthened by His love.
                    </div>
                </div>
            </section>
            <section className="container pb-[154px]">
                <div className="w-full max-w-[1080px] mx-auto  flex items-center space-x-[25px] ">
                    <div className="w-[30%] bg-[#836BC1] rounded-[30px] h-[271px]"></div>
                    <div className="w-[40%] bg-[#836BC1] rounded-[32px] h-[361px]"></div>
                    <div className="w-[30%] bg-[#836BC1] rounded-[30px] h-[271px]"></div>
                </div>
                <div className="w-full max-w-[1080px] mx-auto flex space-x-[25px] mt-[51px]">
                    <div className="w-[30%]">
                        <h1 className="text-base uppercase font-medium font-abhaya text-[#161722]">
                            OUR VALUES
                        </h1>
                        <div className="max-w-[266px] text-black text-3xl font-extrabold font-abhaya uppercase leading-9 my-4">
                            Guided by our core values of
                        </div>
                        <div className="max-w-[286px] text-black text-base font-normal font-inter leading-normal">
                            Dedication, Relevance, Excellence, Accountability,
                            Resilience, Forbearance, and Faithfulness, we strive
                            to embody these principles in every aspect of our
                            journey."
                        </div>
                    </div>
                    <div className="w-[40%]">
                        <div className="flex flex-col max-w-[321px] w-full mx-auto">
                            <h1 className="text-base uppercase font-medium font-abhaya text-[#161722]">
                                OUR VISION
                            </h1>
                            <div className="max-w-[321px] text-black text-3xl font-extrabold font-abhaya uppercase leading-9 my-4">
                                We are committed to equipping ministers
                            </div>
                            <div className="max-w-[286px] text-black text-base font-normal font-inter leading-normal">
                                of the gospel of our Lord Jesus Christ across
                                the world, enabling them to excel in their
                                ministry work with greater effectiveness.
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%]">
                        <h1 className="text-base uppercase font-medium font-abhaya text-[#161722]">
                            OUR VISION
                        </h1>
                        <div className="max-w-[266px] text-black text-3xl font-extrabold font-abhaya uppercase leading-9 my-4">
                            We strive for the rebirth of
                        </div>
                        <div className="max-w-[286px] text-black text-base font-normal font-inter leading-normal">
                            Apostolic Christianity in our generation, committed
                            to preserving biblical doctrine and living out the
                            truth of God's word as revealed in the Holy
                            Scriptures.
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#bf0987] h-[634px] flex items-center justify-center relative">
                <div className="max-w-[827px] text-center text-white text-[50px] font-bold font-abhaya leading-[60px]">
                    Transforming worldly systems and nurturing ministers with
                    the knowledge and strength to lead with purpose.
                </div>
                <img
                    className="w-[477px] h-[254px] rounded-[20px] absolute -bottom-[88px] right-[244px]"
                    src="/images/about/transform.png"
                />
            </section>
            <section className="pt-[197px] pb-[135px] max-w-[1080px] mx-auto">
                <div className="max-w-[910px] w-full mx-auto">
                    <div className="text-[#dddddd] text-[200px] font-normal font-abhaya leading-[160px] pl-[40px]">
                        The
                    </div>
                    <div className="text-[#dddddd] text-[200px] font-normal font-abhaya leading-[160px]">
                        Leadership
                    </div>
                </div>
                <div className="flex gap-x-[82px] mx-auto justify-center mt-[74px]">
                    <div className="flex flex-col items-center">
                        <div className="w-[225px] h-56 bg-[#836bc1] rounded-full" />
                        <div className="text-black text-[28px] font-normal font-abhaya leading-[33.60px] mt-[47px]">
                            Apostle
                        </div>
                        <div className="text-black text-[32px] font-extrabold font-abhaya leading-[38.40px]">
                            Arome Osayi
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[225px] h-56 bg-[#836bc1] rounded-full" />
                        <div className="text-black text-[28px] font-normal font-abhaya leading-[33.60px] mt-[47px]">
                            Apostle
                        </div>
                        <div className="text-black text-[32px] font-extrabold font-abhaya leading-[38.40px]">
                            Arome Osayi
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[225px] h-56 bg-[#836bc1] rounded-full" />
                        <div className="text-black text-[28px] font-normal font-abhaya leading-[33.60px] mt-[47px]">
                            Apostle
                        </div>
                        <div className="text-black text-[32px] font-extrabold font-abhaya leading-[38.40px]">
                            Arome Osayi
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#836bc1]/20 pt-[110px] pb-[121px]">
                <div className="text-[#d2c6e1] text-[200px] font-normal font-abhaya leading-[160px] ml-[60px]">
                    Who we are
                </div>
                <div className="max-w-[1080px] mx-auto relative mt-[72px]">
                    <div className="max-w-[619px] text-black text-base font-normal font-inter leading-normal">
                        Remnant Christian Network (RCN) is a non-denominational
                        ministry headquartered in Makurdi, Benue State, Nigeria,
                        with apostolic centers apostolic centers and mission
                        outreaches across Africa, North America and Europe.
                    </div>

                    <div className="max-w-[619px] text-black text-base font-normal font-inter leading-normal mt-4">
                        RCN is singularly focused on restoring the prayer
                        commission of the Church, in fulfillment of Jesus’
                        proclamation in Matthew 21:13: “My house shall be called
                        a house of prayer.” As an apostolic movement, we aim to
                        challenge worldly systems and raise up capable ministers
                        from among Nigeria’s youth. These ministers will carry
                        the gospel to every corner of the earth, fulfilling the
                        divine mandate for the last apostolic dispensation, as
                        revealed by the ancients: "Nigeria is the trigger."
                    </div>
                    <div className="absolute w-[351px] h-[221px] bg-[#836bc1] rounded-[20px] right-0 -bottom-[100px]" />
                </div>
                <div className="max-w-[707px] text-black text-[34px] font-bold font-abhaya leading-[40.80px] mx-auto mt-[191px]">
                    If the glory of the Lord is to fill the earth as the waters
                    cover the sea, and if revival must precede the second coming
                    of the Lord, then men must watch, pray, and spread the good
                    news. This is RCN’s mandate: to raise intercessors,
                    prophets, evangelists, and teachers.
                </div>
                <div className="max-w-[825px] w-full h-[418px] bg-black/40 rounded-[30px] mx-auto overflow-hidden mt-[86px]">
                    <img
                        src="/images/about/rename.png"
                        className="w-full h-full bg-cover"
                    />
                </div>
            </section>
            <section className="max-w-[1080px] mx-auto pt-[128px] flex items-center gap-x-[91px] mb-[226px]">
                <div className="max-w-[351px] w-full h-[485px] bg-[#836bc1] rounded-[20px]" />
                <div className="flex flex-col">
                    <div className="max-w-[619px] text-black text-base font-normal font-inter leading-normal">
                        Are you fed up with playing church? Tired of a church
                        overtaken by mammon and Babylon? Are you seeking
                        spiritual growth and deeper revelation in Christ? Do you
                        want to move beyond spiritual milk to chew on strong
                        meat? Are you looking to discern truth and stand out as
                        light in these dark days?
                        <br />
                        <br />
                        Welcome to Remnant Christian Network, London, where you
                        will be taught to access and navigate the immortal
                        realm. Here, you will receive the training and equipping
                        needed to stand as a soldier in the army of God.
                        <br />
                        <br />
                        For more information, feel free to call us or send an
                        email. We would be glad to see you at one of our weekly
                        meetings. You are welcome.
                    </div>
                    <div className="mt-[53px]">
                        <Button className="rounded-full font-Gilroy p-5">
                            Become Member
                        </Button>
                    </div>
                </div>
            </section>
            <Subcribe />
        </MainLayout>
    );
}

export default About;
