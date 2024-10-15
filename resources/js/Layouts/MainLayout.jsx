import Footer from "@/Components/Footer";
import React from "react";
import { Toaster } from "sonner";

function MainLayout({ children, policies }) {
    return (
        <>
            <main className="w-full overflow-hidden">
                {children}
                <Toaster />
            </main>
            <Footer policies={policies} />
        </>
    );
}

export default MainLayout;
