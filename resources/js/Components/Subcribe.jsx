import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Subcribe() {
    return (
        <section className="container pb-[161px]">
            <div class="mx-auto max-w-[900px] w-full px-8 py-12 bg-[#280d4a] rounded-2xl shadow-inner border border-[#2d2d44] ">
                <div class="self-stretch h-[65px] flex-col justify-start items-center flex">
                    <div class="self-stretch text-center text-white text-[40px] font-bold font-abhaya leading-7">
                        Stay Connected
                    </div>
                    <div class="self-stretch text-center text-[#828894] text-base font-medium font-inter leading-snug mt-[15px]">
                        Latest news, tips, and freebies to your inbox.
                    </div>
                </div>
                <div class="flex mx-auto max-w-[370px] w-full self-stretch p-[6px] bg-white rounded-[50px] mt-5">
                    <Input
                        placeholder="Enter your email"
                        className="w-full border-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 "
                    />
                    <Button className="rounded-full text-base font-semibold font-inter">
                        Subscribe
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Subcribe;
