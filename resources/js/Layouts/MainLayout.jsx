import React from "react";

function MainLayout({ children }) {
    return (
        <main className="w-full overflow-hidden">
            <span className="md:hidden">Small</span>
            <span className="hidden md:block">medium</span>
            <span className="hidden lg:block">large</span>
            {children}
        </main>
    );
}

export default MainLayout;
