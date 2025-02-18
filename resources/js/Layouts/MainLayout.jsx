import Footer from "@/Components/Footer";
import React from "react";
import { Toaster } from "sonner";

function MainLayout({ children }) {
    return (
        <>
            <main className="w-full overflow-hidden">
                {children}
                <Toaster />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;
