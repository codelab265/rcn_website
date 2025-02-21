import CommunityMenu from "@/Components/CommunityMenu";
import Event from "@/Components/Event";
import Modal from "@/Components/Modal";
import Navbar from "@/Components/Navbar";
import Subcribe from "@/Components/Subcribe";
import { Button } from "@/Components/ui/button";
import { ScrollArea } from "@/Components/ui/scroll-area";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

function Gallery(props) {
    const { galleries, policies } = props;
    const [gallery, setGallery] = useState(null);
    const [showModal, setShowModal] = useState(false);
    return (
        <MainLayout data={props}>
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
                    {galleries?.data?.map((gallery, index) => (
                        <div
                            key={index}
                            className="w-full h-[400px] bg-rose-500 rounded-[30px] overflow-hidden cursor-pointer relative"
                            onClick={() => {
                                setGallery(gallery);
                                setShowModal(true);
                            }}
                        >
                            <img
                                src={`/storage/${gallery.image[0]}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full h-full bg-black/50 text-white p-4 z-10 flex flex-col items-center justify-end pb-10">
                                <h1 className="text-2xl font-bold text-white font-Gilroy line-clamp-1">
                                    {gallery.name}
                                </h1>
                            </div>
                            <div className="size-10 rounded-full bg-white absolute top-4 right-4 flex items-center justify-center z-20 font-Gilroy font-bold text-black">
                                {gallery.image.length}
                            </div>
                        </div>
                    ))}

                    <Modal show={showModal}>
                        <ScrollArea className="h-[80vh]">
                            <div className="grid grid-cols-2 gap-4 p-4">
                                {gallery?.image.map((image, index) => (
                                    <PhotoView
                                        key={index}
                                        src={`/storage/${image}`}
                                    >
                                        <img
                                            src={`/storage/${image}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </PhotoView>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="flex justify-end p-4">
                            <Button
                                onClick={() => setShowModal(false)}
                                className="bg-black text-white px-4 py-2 rounded-full font-Gilroy font-semibold"
                            >
                                Close
                            </Button>
                        </div>
                    </Modal>
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
