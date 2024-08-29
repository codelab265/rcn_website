import Navbar from "@/Components/Navbar";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Store() {
    return (
        <MainLayout>
            <Head title="Store" />
            <Navbar />
            <section className="w-full flex flex-col items-center justify-center pt-[215px] pb-[220px] relative">
                <div className="w-[954px] text-center text-black text-[100px] font-bold font-abhaya leading-[90px]">
                    Our Shop is <br />
                    Coming Soon
                </div>
                <div className="w-[396px] text-center text-black text-base font-normal font-inter my-10">
                    Subscribe to be the first to know when we lunch, and get a
                    discount on your first order!
                </div>
                <div className="flex items-center gap-x-6">
                    <Input
                        placeholder="Email"
                        className="border border-[#8c9296] rounded-full w-[408px]"
                    />
                    <Button className="text-white text-base font-medium font-outfit leading-none rounded-full px-[50px]">
                        Subscribe
                    </Button>
                </div>

                <div
                    style={{
                        borderRadius: "1155px",
                        background:
                            "radial-gradient(41.76% 41.76% at 50% 50%, rgba(3, 156, 9, 0.40) 0%, rgba(255, 201, 9, 0.00) 100%)",
                        filter: "blur(150px)",
                    }}
                    className="absolute -top-[458px] -right-[535px] w-[1155px] h-[1155px]"
                ></div>
                <div className="right-[50px] top-[200px] absolute bottom-0 w-[51px] h-[51px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="51"
                        height="51"
                        viewBox="0 0 51 51"
                        fill="none"
                    >
                        <circle
                            cx="25.5"
                            cy="25.5"
                            r="25.5"
                            fill="url(#paint0_radial_3065_266)"
                        />
                        <defs>
                            <radialGradient
                                id="paint0_radial_3065_266"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(19.9219 17.5313) rotate(53.9726) scale(21.6773 30.2762)"
                            >
                                <stop stop-color="#BEE46C" />
                                <stop offset="1" stop-color="#9AC53F" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <div className="right-[50px] bottom-[52px] absolute w-[21px] h-[21px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                    >
                        <circle
                            cx="10.5"
                            cy="10.5"
                            r="10.5"
                            transform="matrix(-1 0 0 1 21 0)"
                            fill="url(#paint0_radial_3065_267)"
                        />
                        <defs>
                            <radialGradient
                                id="paint0_radial_3065_267"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(8.20313 7.21875) rotate(53.9726) scale(8.92597 12.4667)"
                            >
                                <stop stop-color="#BEE46C" />
                                <stop offset="1" stop-color="#9AC53F" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </section>
        </MainLayout>
    );
}

export default Store;
