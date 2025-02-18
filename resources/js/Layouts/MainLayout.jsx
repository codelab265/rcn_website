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
<<<<<<< HEAD
            <Footer />
=======
            <Footer policies={data.policies} socialLinks={data.socialLinks} />
>>>>>>> 8b70df998462ebe65274c02afa8594dab72c6aad
        </>
    );
}

export default MainLayout;
