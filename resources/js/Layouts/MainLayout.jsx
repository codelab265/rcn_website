import React from "react";
import { Toaster } from "sonner";

function MainLayout({ children }) {
    return (
        <main className="w-full overflow-hidden">
            {children}
            <Toaster />
        </main>
    );
}

export default MainLayout;
