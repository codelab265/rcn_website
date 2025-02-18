import Navbar from "@/Components/Navbar";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Policy(props) {
    const { policy } = props;
    return (
        <MainLayout data={props}>
            <Head title="Policy" />
            <Navbar />
            <section className="w-full flex flex-col items-center justify-center pt-[100px] md:pt-[150px] lg:pt-[215px] pb-[120px] md:pb-[170px] relative">
                <div className="w-full max-w-[954px] text-center text-black text-[40px] leading-[40px] md:text-[60px] md:leading-[60px] lg:text-[100px] lg:leading-[90px] font-bold font-abhaya">
                    {policy.link_name}
                </div>

                <div
                    style={{
                        borderRadius: "1155px",
                        background:
                            "radial-gradient(41.76% 41.76% at 50% 50%, rgba(3, 156, 9, 0.40) 0%, rgba(255, 201, 9, 0.00) 100%)",
                        filter: "blur(150px)",
                    }}
                    className="absolute -top-[300px] md:-top-[400px] lg:-top-[458px] -right-[300px] md:-right-[400px] lg:-right-[535px] w-[600px] md:w-[800px] lg:w-[1155px] h-[600px] md:h-[800px] lg:h-[1155px]"
                ></div>
            </section>
            <section className="w-full flex flex-col items-center justify-center pb-[120px] md:pb-[170px] lg:pb-[220px]">
                <div className="w-full max-w-[954px] text-black text-[20px] leading-[30px] font-normal font-inter">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: policy.description,
                        }}
                    ></div>
                </div>
            </section>
        </MainLayout>
    );
}

export default Policy;
