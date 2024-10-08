import Map from "@/Components/Map";
import Navbar from "@/Components/Navbar";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import MainLayout from "@/Layouts/MainLayout";
import { Head, useForm } from "@inertiajs/react";
import React from "react";
import { toast } from "sonner";

function Contact() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        message: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("contact.store"), {
            onSuccess: () => {
                reset();
                toast.success("Message sent successfully");
            },
            preserveScroll: true,
        });
    };
    return (
        <MainLayout>
            <Head title="Contact" />
            <Navbar />
            <section className="container relative w-full flex flex-col pt-[178px] pb-[119px]">
                <div className="max-w-[1080px] w-full mx-auto  flex flex-col md:flex-row gap-[70px] lg:gap-[116px] justify-center">
                    <div className="flex flex-col justify-center">
                        <div className=" text-black  md:text-[64px] font-bold font-abhaya leading-[57.60px]">
                            Get in touch
                        </div>
                        <div className=" w-full md:max-w-[504px] text-black text-base font-normal font-inter mt-[18px] leading-normal">
                            We'd love to hear from you! Whether you have a
                            question, need prayer, or just want to learn more
                            about our church, we're here to help. Reach out to
                            us through any of the channels below, and we'll get
                            back to you as soon as possible.
                        </div>
                    </div>
                    <div className="md:max-w-[460px] w-full px-7 py-10 rounded-[30px] bg-white shadow z-10 flex flex-col">
                        <div className="flex flex-col gap-2">
                            <Input
                                placeholder="Full Name"
                                className="bg-[#f4f4f4] font-outfit text-[#a5a8ab]"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            {errors.name && (
                                <span className="text-red-500 font-abhaya text-sm font-medium">
                                    {errors.name}
                                </span>
                            )}

                            <Input
                                placeholder="Email"
                                className="bg-[#f4f4f4] font-outfit text-[#a5a8ab]"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            {errors.email && (
                                <span className="text-red-500 font-abhaya text-sm font-medium">
                                    {errors.email}
                                </span>
                            )}

                            <Textarea
                                placeholder="Message"
                                className="bg-[#f4f4f4] font-outfit text-[#a5a8ab]"
                                value={data.message}
                                onChange={(e) =>
                                    setData("message", e.target.value)
                                }
                            />
                            {errors.message && (
                                <span className="text-red-500 font-abhaya text-sm font-medium">
                                    {errors.message}
                                </span>
                            )}
                        </div>
                        <div className="text-right mt-5">
                            <Button
                                className="px-[50px] py-[18px] rounded-full font-outfit"
                                onClick={submit}
                                disabled={processing}
                            >
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
            <section className="container max-w-[1080px] w-full h-[527px] mx-auto flex items-center relative mb-[172px]">
                <div className="md:max-w-[353px] w-full bg-[#df6426] rounded-[30px] flex flex-col items-center justify-center gap-8 p-10 z-10">
                    <a href="mailto:info@rcnlondon.uk">
                        <div className="w-full md:w-[255px] h-[72px] bg-white rounded-2xl flex items-center px-6 gap-3">
                            <img
                                src="/images/contact/email.png"
                                alt=""
                                srcset=""
                            />
                            <div className="text-black text-lg font-normal font-inter leading-[27px]">
                                info@rcnlondon.uk
                            </div>
                        </div>
                    </a>
                    <a href="whatsapp://send?phone=+447563305204">
                        <div className="w-full md:w-[255px] h-[72px] bg-white rounded-2xl flex items-center px-6 gap-3">
                            <img
                                src="/images/contact/whatsapp.png"
                                alt=""
                                srcset=""
                            />
                            <div className="text-black text-lg font-normal font-inter leading-[27px]">
                                +447563305204
                            </div>
                        </div>
                    </a>
                    <div className="w-full md:w-[255px] flex gap-3 ">
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
