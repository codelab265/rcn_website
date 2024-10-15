import Modal from "@/Components/Modal";
import Navbar from "@/Components/Navbar";
import Subcribe from "@/Components/Subcribe";
import { Button } from "@/Components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function About(props) {
    const { policies } = props;
    const [isOpen, setIsOpen] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);

    const OpenModal = () => {
        setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);
        document.querySelector("audio").pause();
    };

    return (
        <MainLayout data={props}>
            <Head title="About us" />
            <section className="w-full relative h-[600px] md:h-[700px] lg:h-[739px] overflow-hidden bg-white">
                <Navbar />

                {/* Radial Gradient Background */}
                <div
                    className="absolute rounded-full -top-[300px] sm:-top-[400px] md:-top-[458px] -right-[350px] sm:-right-[450px] md:-right-[535px] w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px] md:w-[1155px] md:h-[1155px]"
                    style={{
                        background:
                            "radial-gradient(41.76% 41.76% at 50% 50%, #095DFF 0%, rgba(191, 9, 255, 0.00) 100%)",
                        filter: "blur(150px)",
                    }}
                />

                {/* Background Image */}
                <div
                    className="absolute top-0 right-[-100px] sm:right-[-150px] md:right-[-190px] w-[600px] sm:w-[800px] md:w-[995px] h-[500px] sm:h-[600px] md:h-[739px] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] bg-lightgray mix-blend-overlay"
                    style={{
                        backgroundImage: "url('/images/about/hero.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                />

                {/* Text Content */}
                <div className="container max-w-[1080px] mx-auto flex items-center h-full">
                    <div className="w-full md:w-[650px] text-black text-[28px] sm:text-[48px] md:text-[64px] font-bold font-abhaya leading-[36px] sm:leading-[58px] md:leading-[70.40px]">
                        We are a people helped by God, united by His grace, and
                        strengthened by His love.
                    </div>
                </div>
            </section>
            <section className="container pb-[100px] lg:hidden">
                <div className="w-full flex flex-wrap gap-[40px] md:mt-[40px]">
                    <div className="w-full">
                        <div className="w-full bg-[#836BC1] rounded-[30px] overflow-hidden h-[300px] sm:h-[361px] mb-4">
                            <img
                                src="images/about/values.png"
                                alt=""
                                srcset=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h1 className="text-base uppercase font-medium font-abhaya text-[#161722]">
                            OUR VALUES
                        </h1>
                        <div className="text-black text-2xl sm:text-3xl font-extrabold font-abhaya uppercase leading-7 sm:leading-9 my-3 sm:my-4">
                            Guided by our core values of
                        </div>
                        <div className="text-black text-sm sm:text-base font-normal font-inter leading-relaxed">
                            Dedication, Relevance, Excellence, Accountability,
                            Resilience, Forbearance, and Faithfulness, we strive
                            to embody these principles in every aspect of our
                            journey.
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="w-full  bg-[#836BC1] rounded-[30px] overflow-hidden h-[300px] sm:h-[361px] mb-4">
                            <img
                                src="images/about/mission.png"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-base uppercase font-medium font-abhaya text-[#161722]">
                                OUR VISION
                            </h1>
                            <div className="text-black text-2xl sm:text-3xl font-extrabold font-abhaya uppercase leading-7 sm:leading-9 my-3 sm:my-4">
                                We are committed to equipping ministers
                            </div>
                            <div className="text-black text-sm sm:text-base font-normal font-inter leading-relaxed">
                                of the gospel of our Lord Jesus Christ across
                                the world, enabling them to excel in their
                                ministry work with greater effectiveness.
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full  bg-[#836BC1] rounded-[30px] h-[300px] sm:h-[361px] mb-4 overflow-hidden">
                            <img
                                src="images/about/mission2.png"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-base uppercase font-medium font-abhaya text-[#161722]">
                                OUR VISION
                            </h1>
                            <div className="text-black text-2xl sm:text-3xl font-extrabold font-abhaya uppercase leading-7 sm:leading-9 my-3 sm:my-4">
                                We are committed to equipping ministers
                            </div>
                            <div className="text-black text-sm sm:text-base font-normal font-inter leading-relaxed">
                                of the gospel of our Lord Jesus Christ across
                                the world, enabling them to excel in their
                                ministry work with greater effectiveness.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hidden lg:block container pb-[154px]">
                <div className="w-full max-w-[1080px] mx-auto  flex items-center space-x-[25px] ">
                    <div className="w-[30%] bg-[#836BC1] rounded-[30px] h-[271px]">
                        <img
                            src="images/about/values.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-[40%] bg-[#836BC1] rounded-[32px] h-[361px]">
                        <img
                            src="images/about/mission.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-[30%] bg-[#836BC1] rounded-[30px] h-[271px]">
                        <img
                            src="images/about/mission2.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="w-full max-w-[1080px] mx-auto flex space-x-[25px] mt-[51px]">
                    <div className="w-[30%]">
                        <h1 className="text-base uppercase font-medium font-abhaya text-[#161722]">
                            OUR VALUES
                        </h1>
                        <div className="max-w-[266px] text-black text-3xl font-extrabold font-abhaya uppercase leading-9 my-4">
                            Guided by our core values of
                        </div>
                        <div className="max-w-[286px] text-black text-base font-normal font-inter leading-normal">
                            Dedication, Relevance, Excellence, Accountability,
                            Resilience, Forbearance, and Faithfulness, we strive
                            to embody these principles in every aspect of our
                            journey."
                        </div>
                    </div>
                    <div className="w-[40%]">
                        <div className="flex flex-col max-w-[321px] w-full mx-auto">
                            <h1 className="text-base uppercase font-medium font-abhaya text-[#161722]">
                                OUR VISION
                            </h1>
                            <div className="max-w-[321px] text-black text-3xl font-extrabold font-abhaya uppercase leading-9 my-4">
                                We are committed to equipping ministers
                            </div>
                            <div className="max-w-[286px] text-black text-base font-normal font-inter leading-normal">
                                of the gospel of our Lord Jesus Christ across
                                the world, enabling them to excel in their
                                ministry work with greater effectiveness.
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%]">
                        <h1 className="text-base uppercase font-medium font-abhaya text-[#161722]">
                            OUR VISION
                        </h1>
                        <div className="max-w-[266px] text-black text-3xl font-extrabold font-abhaya uppercase leading-9 my-4">
                            We strive for the rebirth of
                        </div>
                        <div className="max-w-[286px] text-black text-base font-normal font-inter leading-normal">
                            Apostolic Christianity in our generation, committed
                            to preserving biblical doctrine and living out the
                            truth of God's word as revealed in the Holy
                            Scriptures.
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#bf0987] ">
                <div className="container max-w-[1080px] mx-auto h-[400px] md:h-[634px] flex items-center justify-center relative">
                    <div className="w-full md:max-w-[827px] text-center text-white text-[28px] md:text-[50px] font-bold font-abhaya leading-[36px] md:leading-[60px] px-4">
                        Transforming worldly systems and nurturing ministers
                        with the knowledge and strength to lead with purpose.
                    </div>
                    <img
                        className="w-[220px] h-[120px] sm:w-[350px] sm:h-[180px] md:w-[477px] md:h-[254px] rounded-[15px] sm:rounded-[18px] md:rounded-[20px] absolute -bottom-[50px] sm:-bottom-[70px] md:-bottom-[88px] right-2"
                        src="/images/about/transform.png"
                    />
                </div>
            </section>

            <section className="pt-[100px] sm:pt-[150px] pb-[80px] sm:pb-[120px] max-w-[1080px] mx-auto">
                <div className="max-w-[90%] md:max-w-[910px] w-full mx-auto">
                    <div className="text-[#dddddd] text-[70px]  md:text-[200px] font-normal font-abhaya leading-[100px] sm:leading-[140px] md:leading-[160px] sm:pl-[20px] md:pl-[40px]">
                        The
                    </div>
                    <div className="text-[#dddddd] text-[70px] md:text-[200px] font-normal font-abhaya leading-[100px] sm:leading-[140px] md:leading-[160px]">
                        Leadership
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-y-12 sm:gap-x-[30px] md:gap-x-[82px] mx-auto justify-center mt-[50px] sm:mt-[60px] md:mt-[74px]">
                    <div className="flex flex-col items-center">
                        <div className="w-[150px] h-[150px] sm:w-[175px] sm:h-[175px] md:w-[225px] md:h-[225px] bg-[#836bc1] rounded-full overflow-hidden">
                            <img
                                src="/images/about/apostle.png"
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>
                        <div className="text-black text-[22px] sm:text-[24px] md:text-[28px] font-normal font-abhaya leading-[26px] sm:leading-[30px] md:leading-[33.60px] mt-[20px] sm:mt-[35px] md:mt-[47px]">
                            Apostle
                        </div>
                        <div className="text-black text-[26px] sm:text-[28px] md:text-[32px] font-extrabold font-abhaya leading-[32px] sm:leading-[34px] md:leading-[38.40px]">
                            Arome Osayi
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[150px] h-[150px] sm:w-[175px] sm:h-[175px] md:w-[225px] md:h-[225px] bg-[#836bc1] rounded-full overflow-hidden">
                            <img
                                src="/images/about/pastor.png"
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>
                        <div className="text-black text-[22px] sm:text-[24px] md:text-[28px] font-normal font-abhaya leading-[26px] sm:leading-[30px] md:leading-[33.60px] mt-[20px] sm:mt-[35px] md:mt-[47px]">
                            Pastor
                        </div>
                        <div className="text-black text-[26px] sm:text-[28px] md:text-[32px] font-extrabold font-abhaya leading-[32px] sm:leading-[34px] md:leading-[38.40px]">
                            Henry Ajiri-Evans
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[150px] h-[150px] sm:w-[175px] sm:h-[175px] md:w-[225px] md:h-[225px] bg-[#836bc1] rounded-full overflow-hidden">
                            <img
                                src="/images/about/pastor2.png"
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>
                        <div className="text-black text-[22px] sm:text-[24px] md:text-[28px] font-normal font-abhaya leading-[26px] sm:leading-[30px] md:leading-[33.60px] mt-[20px] sm:mt-[35px] md:mt-[47px]">
                            Pastor
                        </div>
                        <div className="text-black text-[26px] sm:text-[28px] md:text-[32px] font-extrabold font-abhaya leading-[32px] sm:leading-[34px] md:leading-[38.40px]">
                            Laura Ajiri-Evans
                        </div>
                    </div>
                </div>
            </section>

            <section className=" bg-[#836bc1]/20 w-full">
                <div className="container pt-[80px] sm:pt-[100px] md:pt-[110px] pb-[90px] sm:pb-[100px] md:pb-[121px]">
                    <div className="text-[#d2c6e1] text-[70px]  md:text-[200px] font-normal font-abhaya leading-[80px]  md:leading-[160px]">
                        Who we are
                    </div>

                    <div className="max-w-[1080px] mx-auto relative mt-[40px] sm:mt-[60px] md:mt-[72px]">
                        <div className="max-w-full md:max-w-[619px] text-black text-base font-normal font-inter leading-normal">
                            Remnant Christian Network (RCN) is a
                            non-denominational ministry headquartered in
                            Makurdi, Benue State, Nigeria, with apostolic
                            centers and mission outreaches across Africa, North
                            America, and Europe.
                        </div>

                        <div className="max-w-full md:max-w-[619px] text-black text-base font-normal font-inter leading-normal mt-4">
                            RCN is singularly focused on restoring the prayer
                            commission of the Church, in fulfillment of Jesus’
                            proclamation in Matthew 21:13: “My house shall be
                            called a house of prayer.” As an apostolic movement,
                            we aim to challenge worldly systems and raise up
                            capable ministers from among Nigeria’s youth. These
                            ministers will carry the gospel to every corner of
                            the earth, fulfilling the divine mandate for the
                            last apostolic dispensation, as revealed by the
                            ancients: "Nigeria is the trigger."
                        </div>

                        <div className="hidden lg:flex absolute w-[180px] sm:w-[250px] md:w-[351px] h-[120px] sm:h-[180px] md:h-[221px] bg-[#836bc1] rounded-[20px] right-0 -bottom-[60px] sm:-bottom-[80px] md:-bottom-[100px]">
                            <img
                                src="/images/about/who.png"
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="w-full md:max-w-[707px] text-black text-[26px] sm:text-[30px] md:text-[34px] font-bold font-abhaya leading-[32px] sm:leading-[36px] md:leading-[40.80px] mx-auto mt-[120px] sm:mt-[150px] md:mt-[191px]">
                        If the glory of the Lord is to fill the earth as the
                        waters cover the sea, and if revival must precede the
                        second coming of the Lord, then men must watch, pray,
                        and spread the good news. This is RCN’s mandate: to
                        raise intercessors, prophets, evangelists, and teachers.
                    </div>

                    <div className="max-w-full md:max-w-[825px] w-full h-[250px] sm:h-[350px] md:h-[518px] bg-black/40 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] mx-auto overflow-hidden mt-[60px] sm:mt-[70px] md:mt-[86px] relative">
                        <video
                            src="/videos/dinna.mp4"
                            className="w-full h-full object-cover video"
                            style={{
                                objectPosition: "80% 22%",
                            }}
                            autoPlay={false}
                            controls
                            preload="auto"
                            muted
                            playsInline
                        />
                        {!isOpen && (
                            <img
                                src="/images/playButton.png"
                                className="absolute inset-0 m-auto cursor-pointer"
                                onClick={() => {
                                    setIsOpen(true);
                                    document
                                        .querySelector("video")
                                        .play()
                                        .catch(() => {});
                                }}
                            />
                        )}
                    </div>
                </div>
            </section>

            <section className="container max-w-[1080px] mx-auto pt-[80px] sm:pt-[100px] md:pt-[128px] flex flex-col md:flex-row items-center gap-x-[20px] md:gap-x-[40px] lg:gap-x-[91px] mb-[100px] sm:mb-[150px] md:mb-[226px]">
                <div className="w-full md:max-w-[351px] h-[300px] sm:h-[400px] md:h-[485px] bg-[#836bc1] rounded-[20px] mx-auto overflow-hidden">
                    <img
                        src="/images/about/about.png"
                        className="w-full h-full object-cover"
                        alt=""
                    />
                </div>

                <div className="flex flex-col mt-[30px]  md:mt-0">
                    <div className="text-black text-base font-normal font-inter leading-normal max-w-full md:max-w-[619px] mx-auto lg:px-0">
                        Are you fed up with playing church? Tired of a church
                        overtaken by mammon and Babylon? Are you seeking
                        spiritual growth and deeper revelation in Christ? Do you
                        want to move beyond spiritual milk to chew on strong
                        meat? Are you looking to discern truth and stand out as
                        light in these dark days?
                        <br />
                        <br />
                        Welcome to Remnant Christian Network, London, where you
                        will be taught to access and navigate the immortal
                        realm. Here, you will receive the training and equipping
                        needed to stand as a soldier in the army of God.
                        <br />
                        <br />
                        For more information, feel free to call us or send an
                        email. We would be glad to see you at one of our weekly
                        meetings. You are welcome.
                    </div>
                    <div className="mt-[30px] sm:mt-[40px] md:mt-[53px]">
                        <Button className="rounded-full font-Gilroy px-4 py-2 sm:px-6 sm:py-3 md:px-5 md:py-2.5">
                            Become Member
                        </Button>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#1e1767] py-[90px] mb-[78px]">
                <div className="container relative md:pt-[177px]">
                    <div className="text-[#c8c6e1]/20  text-[70px] md:text-[200px] font-normal font-abhaya leading-none md:leading-[160px] md:absolute top-0 left-0 mb-[57px] md:mb-0">
                        Statement <br />
                        of Faith
                    </div>
                    <div className="max-w-[1080px] mx-auto flex gap-[20px] md:gap-[57px] flex-col-reverse md:flex-row">
                        <div className="w-full md:w-1/2 flex flex-col justify-end pb-[61px]">
                            <div className="md:w-[514px] text-white text-base font-normal font-inter leading-normal">
                                We are guided by a steadfast commitment to
                                biblical truths and principles. Our Statement of
                                Faith reflects the core beliefs that define our
                                mission and community.
                            </div>
                            <div className="">
                                <Button className="rounded-full h-[51px] p-5 bg-white text-black text-base font-Gilroy font-semibold mt-9 hover:text-white">
                                    Download Our Statement of Faith
                                </Button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 relative bg-[#1e1767] overflow-hidden rounded-[30px]">
                            <div className="absolute left-0 top-0 w-full h-full" />
                            <img
                                src="/images/about/statement.png"
                                className="w-full h-full object-cover mix-blend-luminosity bg-black/20"
                            />
                            <div className="absolute inset-0 m-auto flex items-center justify-center gap-2">
                                <div
                                    className="text-center text-white text-3xl md:text-[40px] font-bold font-abhaya leading-[48px] cursor-pointer"
                                    onClick={OpenModal}
                                >
                                    Listen Now
                                </div>
                                <img
                                    src="/images/playButton.png"
                                    className="cursor-pointer"
                                    onClick={OpenModal}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Modal show={openModal} onClose={closeModal}>
                <audio
                    src="/audio/statement.mp3"
                    controls
                    className="md:w-full audio"
                    preload="auto"
                />
            </Modal>

            <Subcribe />
        </MainLayout>
    );
}

export default About;
