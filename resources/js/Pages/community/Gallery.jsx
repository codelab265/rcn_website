import CommunityMenu from "@/Components/CommunityMenu";
import Event from "@/Components/Event";
import Navbar from "@/Components/Navbar";
import Subcribe from "@/Components/Subcribe";
import { Button } from "@/Components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

function Gallery(props) {
    const { galleries, policies } = props;

    return (
        <MainLayout policies={policies}>
            <Head title="Gallery" />
            <Navbar />
            <section className="w-full pt-[209px] pb-[252px] bg-gradient-to-b from-rose-300 to-white relative">
                <div className="container max-w-[1080px] mx-auto md:pl-[68px] flex flex-col z-10">
                    <CommunityMenu />
                    <div
                        className="text-black font-bold font-abhaya mt-8 
                        text-[70px] leading-[50px] 
                        md:text-[120px] md:leading-[100px] 
                        lg:text-[180px] lg:leading-[160px] 
                        xl:text-[250px] xl:leading-[225px]"
                    >
                        Gallery
                    </div>
                </div>
            </section>
            <PhotoProvider>
                <section className="container max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-[150px]">
                    {galleries?.data?.map((_, index) => (
                        <PhotoView src={`/storage/${_.image}`}>
                            <div
                                className="w-full h-[300px] bg-rose-500 rounded-[30px] overflow-hidden cursor-pointer"
                                key={index}
                            >
                                <img
                                    src={`/storage/${_.image}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </PhotoView>
                    ))}
                </section>
                <div className="flex justify-center gap-4 items-center mb-[100px]">
                    {/* Previous Page */}
                    {galleries?.links.prev ? (
                        <Link
                            href={galleries?.links.prev}
                            className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 font-Gilroy font-semibold"
                            preserveScroll
                        >
                            Previous
                        </Link>
                    ) : (
                        <Button className="px-4 py-2 bg-gray-300 text-gray-600 rounded-full cursor-not-allowed font-Gilroy font-semibold">
                            Previous
                        </Button>
                    )}

                    {/* Next Page */}
                    {galleries?.links.next ? (
                        <Link
                            href={galleries?.links.next}
                            className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 font-Gilroy font-semibold"
                            preserveScroll
                        >
                            Next
                        </Link>
                    ) : (
                        <Button className="px-4 py-2 bg-gray-300 text-gray-600 rounded-full cursor-not-allowed font-Gilroy font-semibold">
                            Next
                        </Button>
                    )}
                </div>
            </PhotoProvider>

            <Subcribe />
        </MainLayout>
    );
}

export default Gallery;
