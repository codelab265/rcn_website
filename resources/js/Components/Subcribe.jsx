import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "@inertiajs/react";
import { toast } from "sonner";

function Subcribe() {
    const { data, setData, post, errors, reset, processing, onSubmit } =
        useForm({
            email: "",
        });

    const submit = (e) => {
        e.preventDefault();

        post(route("subscribe"), {
            onSuccess: () => {
                reset();
                toast.success("Subscribed successfully");
            },
            preserveScroll: true,
        });
    };
    return (
        <section className="container pb-[100px] sm:pb-[120px] md:pb-[140px] lg:pb-[161px]">
            <div className="mx-auto max-w-full md:max-w-[900px] w-full px-6 sm:px-8 py-8 sm:py-10 md:py-12 bg-[#280d4a] rounded-2xl shadow-inner border border-[#2d2d44]">
                <div className="self-stretch h-auto flex-col justify-start items-center flex">
                    <div className="self-stretch text-center text-white text-[28px] sm:text-[32px] md:text-[40px] font-bold font-abhaya leading-7">
                        Stay Connected
                    </div>
                    <div className="self-stretch text-center text-[#828894] text-sm sm:text-base font-medium font-inter leading-snug mt-3 sm:mt-4 md:mt-[15px]">
                        Latest news, tips, and freebies to your inbox.
                    </div>
                </div>
                <div className="flex mx-auto max-w-full sm:max-w-[370px] w-full self-stretch p-[4px] sm:p-[6px] bg-white rounded-[50px] mt-4 sm:mt-5 overflow-hidden">
                    <Input
                        placeholder="Enter your email"
                        className="w-full border-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <Button
                        className="rounded-full text-sm sm:text-base font-semibold font-inter"
                        disabled={processing || !data.email}
                        onClick={submit}
                    >
                        Subscribe
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Subcribe;
