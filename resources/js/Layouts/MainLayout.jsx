import Footer from "@/Components/Footer";
import React from "react";
import { Toaster } from "sonner";

function MainLayout({ children, data }) {
    return (
        <>
            <main className="w-full overflow-hidden">
                {children}
                <Toaster />
            </main>
            <Footer policies={data.policies} socialLinks={data.socialLinks} />
        </>
    );
}

export default MainLayout;
