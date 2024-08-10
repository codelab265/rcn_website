import React, { useRef, useState } from "react";

import Slider from "react-slick";

const ProgramSlider = () => {
    const programs = [
        {
            title: "Sunday Worship",
            description:
                "Join us for our weekly worship service filled with inspiring messages and uplifting music.",
            time: "Every Sunday 10 AM",
            image: "/images/program.png",
        },
        {
            title: "Weekly Service",
            description:
                "Congue suspendisse suscipit elementum magna sinapet. Venenatis fringilla et et mattis orci mi.",
            time: "Every Thursday 7 PM",
            image: "/images/program.png",
        },
        {
            title: "Youth Group",
            description:
                "Engaging activities and discussions for teenagers to grow in faith and fellowship.",
            time: "Every Friday 6 PM",
            image: "/images/program.png",
        },
        {
            title: "Community Outreach",
            description:
                "Volunteer opportunities to serve and make a difference in our local community.",
            time: "First Saturday of each month 9 AM",
            image: "/images/program.png",
        },
        {
            title: "Bible Study",
            description:
                "In-depth exploration of scripture to deepen your understanding and faith.",
            time: "Every Wednesday 7 PM",
            image: "/images/program.png",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    let sliderRef = useRef(null);

    const nextSlide = () => {
        sliderRef.slickNext();
    };

    const prevSlide = () => {
        sliderRef.slickPrev();
    };

    var settings = {
        className: "center slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        initialSlide: 0,
        beforeChange: function (old, index) {
            setCurrentIndex(index);
        },
    };

    return (
        <div className="w-full py-10">
            <h2 className="text-center text-[#280d4a] font-abhaya text-[64px] font-bold mb-[52px]">
                Our Programs
            </h2>
            <div className="slider-container relative">
                <Slider
                    ref={(slider) => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className={`w-full px-[60px] box-border transition-all duration-500 ease-in-out ${
                                index === currentIndex
                                    ? "transform scale-100 opacity-100"
                                    : "transform scale-75 opacity-30"
                            }`}
                        >
                            <div className="relative bg-white rounded-[30px] overflow-hidden shadow-lg">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-[617px] object-cover"
                                />
                                <div className="absolute bottom-[72px]  right-8 bg-white pt-[58px] pb-[51px] pl-[41px] pr-[37px] rounded-lg shadow w-[444px]">
                                    <div class="text-black text-[64px] font-bold font-abhaya leading-[51.20px]">
                                        {program.title}
                                    </div>

                                    <p className="max-w-[366px] text-black text-base font-normal font-inter leading-normal mt-2">
                                        {program.description}
                                    </p>
                                    <p className="text-black text-xl font-bold font-gilroyBold leading-[30px] mt-[14px]">
                                        {program.time}
                                    </p>
                                </div>
                            </div>
                            {index === currentIndex && (
                                <>
                                    <button
                                        className="absolute top-1/2 transform -translate-y-1/2 -left-[102px] bg-white/75 rounded-full w-[102px] h-[102px] flex items-center justify-center shadow border-2 border-[#3C3C3C] z-10"
                                        onClick={prevSlide}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-10 h-10"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 19l-7-7 7-7"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        className="absolute top-1/2 transform -translate-y-1/2 -right-[102px] bg-white/75 rounded-full w-[102px] h-[102px] flex items-center justify-center shadow border-2 border-[#3C3C3C] z-10"
                                        onClick={nextSlide}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-10 h-10"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>
                    ))}
                </Slider>
            </div>
            {/* <div className="relative overflow-hidden w-full mt-[52px]">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={updateSliderPosition()}
                >
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className={`flex-none w-[70%] px-[90px] box-border transition-all duration-500 ease-in-out ${
                                index === currentIndex
                                    ? "transform scale-100 opacity-100"
                                    : "transform scale-90 opacity-50"
                            }`}
                        >
                            <div className="relative bg-white rounded-[30px] overflow-hidden shadow-lg">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-[617px] object-cover"
                                />
                                <div className="absolute bottom-[72px]  right-8 bg-white pt-[58px] pb-[51px] pl-[41px] pr-[37px] rounded-lg shadow w-[444px]">
                                    <div class="text-black text-[64px] font-bold font-abhaya leading-[51.20px]">
                                        {program.title}
                                    </div>

                                    <p className="max-w-[366px] text-black text-base font-normal font-inter leading-normal mt-2">
                                        {program.description}
                                    </p>
                                    <p className="text-black text-xl font-bold font-gilroyBold leading-[30px] mt-[14px]">
                                        {program.time}
                                    </p>
                                </div>
                            </div>
                            {index === currentIndex && (
                                <>
                                    <button
                                        className="absolute top-1/2 transform -translate-y-1/2 left-10 bg-white/75 rounded-full w-[102px] h-[102px] flex items-center justify-center shadow border-2 border-[#3C3C3C] z-10"
                                        onClick={prevSlide}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-10 h-10"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 19l-7-7 7-7"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        className="absolute top-1/2 transform -translate-y-1/2 -right-[20px] bg-white/75 rounded-full w-[102px] h-[102px] flex items-center justify-center shadow border-2 border-[#3C3C3C] z-10"
                                        onClick={nextSlide}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-10 h-10"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default ProgramSlider;
