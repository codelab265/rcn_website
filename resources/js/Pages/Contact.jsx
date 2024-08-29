import Map from "@/Components/Map";
import Navbar from "@/Components/Navbar";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Contact() {
    return (
        <MainLayout>
            <Head title="Contact" />
            <section className="relative w-full flex flex-col pt-[178px] pb-[119px]">
                <Navbar />

                <div className="max-w-[1080px] w-full mx-auto  flex gap-[116px] justify-center">
                    <div className="flex flex-col justify-center">
                        <div className=" text-black text-[64px] font-bold font-abhaya leading-[57.60px]">
                            Get in touch
                        </div>
                        <div className="max-w-[504px] text-black text-base font-normal font-inter mt-[18px] leading-normal">
                            We'd love to hear from you! Whether you have a
                            question, need prayer, or just want to learn more
                            about our church, we're here to help. Reach out to
                            us through any of the channels below, and we'll get
                            back to you as soon as possible.
                        </div>
                    </div>
                    <div className="max-w-[460px] w-full px-7 py-10 rounded-[30px] bg-white shadow z-10 flex flex-col">
                        <div className="flex flex-col gap-2">
                            <Input
                                placeholder="Full Name"
                                className="bg-[#f4f4f4] font-outfit text-[#a5a8ab]"
                            />
                            <Input
                                placeholder="Email"
                                className="bg-[#f4f4f4] font-outfit text-[#a5a8ab]"
                            />
                            <Textarea
                                placeholder="Message"
                                className="bg-[#f4f4f4] font-outfit text-[#a5a8ab]"
                            />
                        </div>
                        <div className="text-right mt-5">
                            <Button className="px-[50px] py-[18px] rounded-full font-outfit">
                                Send
                            </Button>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        borderRadius: "1155px",
                        background:
                            "radial-gradient(41.76% 41.76% at 50% 50%, rgba(223, 100, 38, 0.40) 0%, rgba(255, 201, 9, 0.00) 100%)",
                        filter: "blur(150px)",
                    }}
                    className="absolute -top-[458px] -right-[535px] w-[1155px] h-[1155px]"
                />
            </section>
            <section className="max-w-[1080px] w-full h-[527px] mx-auto flex items-center relative mb-[172px]">
                <div className="max-w-[353px] w-full bg-[#df6426] rounded-[30px] flex flex-col items-center justify-center gap-8 p-10 z-10">
                    <div className="w-[255px] h-[72px] bg-white rounded-2xl flex items-center px-6 gap-3">
                        <img src="/images/contact/email.png" alt="" srcset="" />
                        <div className="text-black text-lg font-normal font-inter leading-[27px]">
                            info@rcnlondon.uk
                        </div>
                    </div>
                    <div className="w-[255px] h-[72px] bg-white rounded-2xl flex items-center px-6 gap-3">
                        <img
                            src="/images/contact/whatsapp.png"
                            alt=""
                            srcset=""
                        />
                        <div className="text-black text-lg font-normal font-inter leading-[27px]">
                            +447563305204
                        </div>
                    </div>
                    <div className="w-[255px] flex gap-3 ">
                        <img
                            src="/images/contact/location.png"
                            className="w-[32.46px] h-[37.50px]"
                            alt=""
                            srcset=""
                        />
                        <div className="text-white text-base font-normal font-inter leading-normal">
                            1 HIGGS Industrial Estate, <br />
                            Herne Hill Road, London, <br />
                            SE24 0AU
                        </div>
                    </div>
                </div>
                <Map />
            </section>
        </MainLayout>
    );
}

export default Contact;
