import Navbar from "@/Components/Navbar";
import PartnershipForm from "@/Components/PartnershipForm";
import Subcribe from "@/Components/Subcribe";
import { Button } from "@/Components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Partnership(props) {
    return (
        <MainLayout data={props}>
            <Head title="Partnership" />
            <Navbar />
            <section className="flex items-center justify-center h-[710px] md:h-[910px] w-full   relative bg-white">
                <div
                    className="w-[1263px] h-[1263px] rounded-full absolute -top-[657px] -right-[496px]"
                    style={{
                        background:
                            "radial-gradient(86.22% 86.22% at 50% -10.49%, rgba(40, 57, 206, 0.20) 0%, rgba(47, 207, 242, 0.20) 100%)",
                        filter: "blur(150px)",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1067"
                        height="912"
                        viewBox="0 0 1067 912"
                        fill="none"
                    >
                        <g filter="url(#filter0_f_3154_556)">
                            <path
                                d="M300 -19.5C300 329.268 582.732 612 931.5 612C1280.27 612 1563 329.268 1563 -19.5C1563 -368.268 1280.27 -651 931.5 -651C582.732 -651 300 -368.268 300 -19.5Z"
                                fill="url(#paint0_radial_3154_556)"
                                fill-opacity="0.2"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_f_3154_556"
                                x="0"
                                y="-951"
                                width="1863"
                                height="1863"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                />
                                <feGaussianBlur
                                    stdDeviation="150"
                                    result="effect1_foregroundBlur_3154_556"
                                />
                            </filter>
                            <radialGradient
                                id="paint0_radial_3154_556"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(931.5 -783.5) rotate(90) scale(1089)"
                            >
                                <stop stop-color="#2839CE" />
                                <stop offset="1" stop-color="#2FCFF2" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <div className="w-[794px] text-center text-black text-3xl md:text-5xl lg:text-8xl font-bold font-abhaya leading-tight md:leading-snug lg:leading-[86.40px]">
                    Be a part of the Remnant Kingdom Steward
                </div>
                <div
                    className="w-[21px] h-[21px] bg-[#2838ce] rounded-full absolute left-[312px] bottom-[313px]"
                    z-10
                />
                <div className="w-[21px] h-[21px] bg-[#2838ce] rounded-full absolute left-[171px] top-[202px] z-10" />
            </section>
            <section className="pt-[100px] md:pt-[200px] pb-[60px] md:pb-[104px] bg-[#2838ce] relative">
                <div className="container ">
<<<<<<< HEAD
                    <div className="w-[80%] sm:w-[600px] md:w-[750px] lg:w-[892px] h-[200px] sm:h-[300px] md:h-[369px] bg-[#a2a2a2] rounded-[20px] absolute left-0 right-0 mx-auto -top-[120px] sm:-top-[180px] md:-top-[230px]">
=======
                    <div className="w-[80%] sm:w-[600px] md:w-[750px] lg:w-[892px] h-[200px] sm:h-[300px] md:h-[369px] bg-[#a2a2a2] rounded-[20px] absolute left-0 right-0 mx-auto -top-[120px] sm:-top-[180px] md:-top-[230px] overflow-hidden">
>>>>>>> 8b70df998462ebe65274c02afa8594dab72c6aad
                        <img
                            src="/images/partnership/partnership.png"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="text-[#5564ea] text-[70px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-normal font-abhaya  md:leading-[140px] lg:leading-[160px]">
                        Our Mission
                    </div>

                    <div className="w-full max-w-[1080px] mx-auto">
                        <div className="w-[90%] sm:w-[600px] md:w-[700px] lg:w-[619px] text-white text-sm sm:text-base font-normal font-inter leading-normal mt-[30px] md:mt-[52px]">
                            At our ministry, we are committed to fulfilling the
                            divine mandate entrusted to us, and we invite you to
                            join hands with us in this sacred mission. With a
                            wide range of ongoing projects, both within and
                            beyond the church, we are strategically building a
                            storehouse of resources to meet the day-to-day
                            demands of this great work.
                            <br />
                            <br />
                            As we walk side by side with the Master, we
                            recognize the importance of creating a platform that
                            accommodates the many aspects of our ministry—both
                            in-reach and outreach. This initiative allows
                            partners to contribute their time, skills, and
                            financial resources to support the ministry’s growth
                            and impact.
                        </div>
                    </div>

                    <div className="w-[200px] sm:w-[300px] md:w-[351px] h-[130px] sm:h-[180px] md:h-[221px] bg-[#a2a2a2] rounded-[20px] absolute right-[30px] sm:right-[100px] md:right-[202px] -bottom-[80px] md:-bottom-[83px]">
                        <img
                            src="/images/partnership/partnership2.png"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="px-8 pt-[100px] md:pt-[150px] pb-[60px] md:pb-[107px]">
                <div className="max-w-full md:max-w-[825px] w-full mx-auto rounded-[30px]">
                    <div className="w-full px-5 md:pl-[109px]">
                        <div className="w-full md:w-[707px] text-black text-xl md:text-[28px] lg:text-[34px] font-bold font-abhaya leading-snug md:leading-[36px] lg:leading-[40.80px]">
                            We welcome your involvement, whether through
                            volunteering your expertise to meet in-house needs
                            or through periodic financial contributions as you
                            are able. Together, we can expand the reach of the
                            gospel and fulfill this divine assignment.
                        </div>
                        <PartnershipForm />
                    </div>
<<<<<<< HEAD
                    <div className="w-full h-[250px] sm:h-[350px] md:w-[825px] md:h-[418px] bg-[#a2a2a2] rounded-[30px] mt-[50px] md:mt-[80px]">
=======
                    <div className="w-full h-[250px] sm:h-[350px] md:w-[825px] md:h-[418px] bg-[#a2a2a2] rounded-[30px] mt-[50px] md:mt-[80px] overflow-hidden">
>>>>>>> 8b70df998462ebe65274c02afa8594dab72c6aad
                        <img
                            src="/images/partnership/partnership3.png"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="pt-[60px] md:pt-[103px] pb-[60px] md:pb-[116px] bg-[#ce2c28]/5">
                <div className="container flex flex-col lg:flex-row space-y-[40px] lg:space-y-0 lg:space-x-[72px] relative">
<<<<<<< HEAD
                    <div className="w-full lg:w-[455px] h-[300px] sm:h-[450px] md:h-[632px] bg-[#a2a2a2] rounded-[30px]">
=======
                    <div className="w-full lg:w-[455px] h-[300px] sm:h-[450px] md:h-[632px] bg-[#a2a2a2] rounded-[30px] overflow-hidden">
>>>>>>> 8b70df998462ebe65274c02afa8594dab72c6aad
                        <img
                            src="/images/partnership/partnership4.png"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="w-full lg:w-auto pt-[30px] md:pt-[46px]">
                        <div className="w-full lg:w-[619px] text-black text-sm sm:text-base font-normal font-inter leading-relaxed">
                            RCN Remnant Kingdom Stewards (RKS) is a global
                            network of believers committed to the Biblical
                            principles of righteous living. Our goal is to
                            connect with the dedicated pillars of the ministry,
                            provide a comprehensive reporting system, and
                            reinforce the ministry’s objectives.
                            <br />
                            <br />
                            Through this platform, we foster a framework for
                            various forms of financial engagement, strengthening
                            the covenant relationship we share, as outlined in 2
                            Corinthians 9:6-14. The early church demonstrated
                            such unity in Acts 4:32, which amplified the
                            Apostles' power in Acts 4:33 and ensured that no one
                            among them lacked, as seen in Acts 4:34.
                            <br />
                            <br />
                            Our committee members are individuals within the
                            ministry who share the vision of the Set Man,
                            committed to actualizing the Lord’s mandate to build
                            a strong Apostolic Christian Community.
                        </div>
                    </div>

                    <div className="text-[#dddddd] text-[120px] sm:text-[200px] md:text-[250px] font-normal font-abhaya leading-[120px] sm:leading-[180px] md:leading-[200px] absolute right-[20px] sm:right-[50px] md:right-[88px] bottom-[28px] hidden lg:flex">
                        Stewards
                    </div>
                </div>
            </section>

            <section className="pt-[60px] md:pt-[95px] pb-[80px] md:pb-[156px]">
                <div className="container">
                    <div className="text-[#dddddd] text-[100px] md:text-[200px] lg:text-[300px] font-normal font-abhaya leading-[100px] sm:leading-[180px] md:leading-[240px]">
                        Become
                    </div>

                    <div className="max-w-[1080px] w-full mx-auto mt-8 flex flex-col-reverse md:flex-row gap-[30px] md:gap-[43px]">
                        <div className="w-full md:max-w-[546px] flex flex-col gap-[20px] md:gap-[30px]">
                            <div className="text-black text-xl md:text-[28px] lg:text-[32px] font-bold font-abhaya leading-[28px] md:leading-[34px] lg:leading-[38.40px]">
                                Becoming an RKS Partner requires a sacrificial
                                commitment, beginning with a consecrated
                                lifestyle dedicated to God.
                            </div>

                            <div className="text-black text-sm md:text-base font-normal font-inter leading-relaxed md:leading-normal">
                                Every act of generosity should stem from a place
                                of righteous and honest living. Each partner
                                must be intentional and Spirit-led in their
                                contributions. We are committed to supporting
                                the mandate given to Apostle Arome Osayi by
                                uplifting him and the ministry in prayer, so
                                that God's work may continually advance.
                                <br />
                                <br />
                                We welcome your volunteered time and skills to
                                meet the ministry’s in-house needs, along with
                                periodic financial support as each partner is
                                able to give. A robust line of communication
                                will be maintained with every partner, ensuring
                                you receive timely notifications about our
                                events, outreaches, and ministry progress.
                            </div>

                            <div className="mt-4">
                                <PartnershipForm />
                            </div>
                        </div>

                        <div className="w-full md:max-w-[516px]">
<<<<<<< HEAD
                            <div className="w-full h-[300px] sm:h-[400px] md:h-[544px] bg-[#a2a2a2] rounded-[30px]">
=======
                            <div className="w-full h-[300px] sm:h-[400px] md:h-[544px] bg-[#a2a2a2] rounded-[30px] overflow-hidden">
>>>>>>> 8b70df998462ebe65274c02afa8594dab72c6aad
                                <img
                                    src="/images/partnership/partnership5.png"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Subcribe />
        </MainLayout>
    );
}

export default Partnership;
