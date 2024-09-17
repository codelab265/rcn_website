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
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,

        beforeChange: function (old, index) {
            setCurrentIndex(index);
        },

        responsive: [
            {
                breakpoint: 1024, // Tablet and up
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768, // Small tablet and mobile
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    centerMode: false,
                    dots: false,
                },
            },
        ],
    };

    return (
        <div className="w-full py-10">
            <h2 className="text-center text-[#280d4a] font-abhaya font-bold mb-[52px] lg:text-[48px] md:text-[40px] text-[32px]">
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
                            className={`w-full px-5 md:px-[60px] box-border transition-all duration-500 ease-in-out ${
                                index === currentIndex
                                    ? "transform scale-100 opacity-100"
                                    : "transform scale-75 opacity-30"
                            }`}
                        >
                            <div className="relative bg-white rounded-[30px] overflow-hidden shadow-lg">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-[400px] md:h-[617px] object-cover"
                                />
                                <div className="absolute bottom-4 md:bottom-[72px] right-2  md:right-8 bg-white py-4 px-6 md:pt-20 md:pb-16 md:pl-14 md:pr-12 lg:pt-24 lg:pb-20 lg:pl-16 lg:pr-14 rounded-lg shadow w-full md:w-[444px] ">
                                    <div className="text-black text-[32px] font-bold font-abhaya leading-[51.20px] lg:text-[48px] md:text-[40px]">
                                        {program.title}
                                    </div>

                                    <p className="max-w-[366px] text-black text-base font-normal font-inter leading-normal mt-1 md:mt-2 lg:max-w-[300px] md:max-w-[280px] sm:max-w-[240px] sm:text-sm">
                                        {program.description}
                                    </p>
                                    <p className="text-black text-xl font-bold font-gilroyBold leading-[30px] mt-4 md:mt-[14px] lg:text-lg md:text-base sm:text-sm">
                                        {program.time}
                                    </p>
                                </div>
                            </div>
                            {index === currentIndex && (
                                <>
                                    <button
                                        className="hidden absolute top-1/2 transform -translate-y-1/2 -left-[102px] bg-white/75 rounded-full w-[102px] h-[102px] lg:flex items-center justify-center shadow border-2 border-[#3C3C3C] z-10 md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px]"
                                        onClick={prevSlide}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-10 h-10 md:w-8 md:h-8 sm:w-6 sm:h-6"
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
                                        className="absolute top-1/2 transform -translate-y-1/2 -right-[102px] bg-white/75 rounded-full w-[102px] h-[102px] hidden lg:flex items-center justify-center shadow border-2 border-[#3C3C3C] z-10 md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px]"
                                        onClick={nextSlide}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-10 h-10 md:w-8 md:h-8 sm:w-6 sm:h-6"
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
        </div>
    );
};

export default ProgramSlider;
