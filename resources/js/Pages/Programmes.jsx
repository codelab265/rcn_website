import Navbar from "@/Components/Navbar";
import Subcribe from "@/Components/Subcribe";
import { Button } from "@/Components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { SidebarClose } from "lucide-react";

function Programmes() {
    const data = [
        {
            image: "/images/program.png",
            title: "Weekly Service",
            description:
                "This arm of the ministry is specifically tailored for our teenagers where anything and everything is laid bare, discussed and prayed over according to His leading. If you are or have a teenager and would like to be a part of this meeting, kindly inbox us.",
            time: "Every Sunday",
        },
        {
            image: "/images/program.png",
            title: "10 Hours Prayers",
            description:
                "This arm of the ministry is specifically tailored for our teenagers where anything and everything is laid bare, discussed and prayed over according to His leading. If you are or have a teenager and would like to be a part of this meeting, kindly inbox us.",
            time: "Every Sunday",
        },
        {
            image: "/images/program.png",
            title: "Night Prayers",
            description:
                "This arm of the ministry is specifically tailored for our teenagers where anything and everything is laid bare, discussed and prayed over according to His leading. If you are or have a teenager and would like to be a part of this meeting, kindly inbox us.",
            time: "Every Sunday",
        },
        {
            image: "/images/program.png",
            title: "Power Start",
            description:
                "This arm of the ministry is specifically tailored for our teenagers where anything and everything is laid bare, discussed and prayed over according to His leading. If you are or have a teenager and would like to be a part of this meeting, kindly inbox us.",
            time: "Every Sunday",
        },
        {
            image: "/images/program.png",
            title: "TTP",
            description:
                "This arm of the ministry is specifically tailored for our teenagers where anything and everything is laid bare, discussed and prayed over according to His leading. If you are or have a teenager and would like to be a part of this meeting, kindly inbox us.",
            time: "Every Sunday",
        },
        {
            image: "/images/program.png",
            title: "Mini Vigil",
            description:
                "This arm of the ministry is specifically tailored for our teenagers where anything and everything is laid bare, discussed and prayed over according to His leading. If you are or have a teenager and would like to be a part of this meeting, kindly inbox us.",
            time: "Every Sunday",
        },
        {
            image: "/images/program.png",
            title: "Children’s Ministry",
            description:
                "This arm of the ministry is specifically tailored for our teenagers where anything and everything is laid bare, discussed and prayed over according to His leading. If you are or have a teenager and would like to be a part of this meeting, kindly inbox us.",
            time: "Every Sunday",
        },
        {
            image: "/images/program.png",
            title: "Next Generation Remnants",
            description:
                "This arm of the ministry is specifically tailored for our teenagers where anything and everything is laid bare, discussed and prayed over according to His leading. If you are or have a teenager and would like to be a part of this meeting, kindly inbox us.",
            time: "Every Sunday",
        },
        {
            image: "/images/program.png",
            title: "The Contenders",
            description:
                "This arm of the ministry is specifically tailored for our teenagers where anything and everything is laid bare, discussed and prayed over according to His leading. If you are or have a teenager and would like to be a part of this meeting, kindly inbox us.",
            time: "Every Sunday",
        },
    ];
    return (
        <MainLayout>
            <Head title="Programmes" />
            <Navbar />
            <section className="h-[585px] md:h-[685px] w-full   relative bg-white">
                <div className="container max-w-[1080px] mx-auto flex items-center h-full w-full">
                    <div className="max-w-[1080px] w-full mx-auto h-full relative">
                        <div className="w-full md:max-w-[565px] text-black text-[54px] md:text-[100px] font-bold font-abhaya leading-[90px] absolute bottom-[139px] left-0 right-0 mx-auto lg:mx-0 text-center lg:text-left">
                            Quis cras cursus turpis enim nunc
                        </div>
                    </div>

                    <div
                        className="w-[963px] h-[963px] md:w-[1063px] md:h-[1063px] rounded-full absolute -top-[657px] -right-[496px]"
                        style={{
                            background:
                                "radial-gradient(86.22% 86.22% at 50% -10.49%, rgba(170, 43, 16, 0.60) 0%, rgba(228, 194, 108, 0.60) 100%)",
                            filter: "blur(150px)",
                            borderRadius: "1263px",
                        }}
                    />
                    <img
                        src="/images/programmes/hero.png"
                        className="w-full h-full object-cover"
                        style={{
                            mixBlendMode: "overlay",
                            width: "100%",
                            height: "685px",
                            position: "absolute",
                            top: "0",
                            right: "0",
                        }}
                    />
                </div>
            </section>
            <section className="w-full py-[109px] sm:py-[80px] md:py-[90px] lg:py-[109px]">
                <div className="container max-w-[1080px] mx-auto flex flex-col lg:flex-row lg:gap-[66px]">
                    <div className="w-full lg:w-1/2">
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

            <section className="w-full bg-[#f0c23c]">
                <div className="container max-w-[1080px] mx-auto pt-[60px] md:pt-[100px] pb-[120px] md:pb-[237px] relative flex justify-center">
                    <div className="max-w-[827px] text-center text-black text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold font-abhaya leading-tight">
                        Id congue sollicitudin scelerisque venenatis sed sed
                        quis morbi. Hendrerit etiam malesuada erat semper. Sed.
                    </div>
                    <img
                        className="max-w-[80%] md:max-w-[637px] h-auto absolute -bottom-[112px] right-5 md:right-[124px]lg:right-[184px] rounded-[20px]"
                        src="/images/programmes/id.png"
                    />
                </div>
            </section>
            <section className="pt-[221px] pb-[175px] container mx-auto">
                <div className="text-[#dddddd] text-[64px] sm:text-[80px] md:text-[120px] lg:text-[200px] font-normal font-abhaya leading-[72px] sm:leading-[90px] md:leading-[120px] lg:leading-[160px] text-center">
                    Programmes
                </div>
                <div className="max-w-[1080px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-[30px] sm:mt-[40px] md:mt-[50px] lg:mt-[57px]">
                    {data.map((item) => (
                        <AlertDialog>
                            <AlertDialogTrigger>
                                <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[463px] bg-[#a2a2a2] rounded-[30px] flex flex-col justify-end pb-[51px] px-[31px] cursor-pointer">
                                    <div className="text-black text-[34px] font-bold font-abhaya leading-[34px]">
                                        {item.title}
                                    </div>
                                    <div className="text-black text-2xl font-extrabold font-abhaya leading-[34px] mt-[2px]">
                                        {item.time}
                                    </div>
                                </div>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="max-w-[1130px]">
                                <AlertDialogHeader>
                                    <AlertDialogDescription className="px-4  lg:px-[111px] lg:py-[90px]">
                                        <div className="text-gray-300 hidden lg:block">
                                            Press ESC to close
                                        </div>
                                        <div className="flex flex-col-reverse lg:flex-row  gap-12">
                                            <div className="flex-1 flex flex-col justify-center">
                                                <div className="text-black text-[50px] lg:text-[70px] font-bold font-abhaya leading-[63px]">
                                                    {item.title}
                                                </div>
                                                <div className="lg:max-w-[439px] text-black text-base font-normal font-['Inter'] leading-normal mt-[26px]">
                                                    {item.description}
                                                </div>
                                                <div className="text-black text-[32px] font-bold font-abhaya leading-relaxed mt-[53px]">
                                                    {item.time}
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-[360.36px] h-[263.86px] md:h-[363.86px] lg:h-[463.86px] bg-[#a2a2a2] rounded-[30px]" />
                                        </div>
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Close</AlertDialogCancel>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    ))}
                </div>
            </section>
            <Subcribe />
        </MainLayout>
    );
}

export default Programmes;
