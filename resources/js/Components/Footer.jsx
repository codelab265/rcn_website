import { Link } from "@inertiajs/react";
import React from "react";

function Footer() {
    return (
        <footer className="w-full bg-[#280d4a]">
            <div className="container  py-4">
                <div className="flex items-center gap-4">
                    <div className="text-[#828894] text-sm sm:text-base font-medium font-inter leading-snug ">
                        © {new Date().getFullYear()} RCNLondon. All rights
                        reserved.
                    </div>
                    <Link
                        href="/terms"
                        className="text-white hover:text-[#f4a261] ext-sm sm:text-base font-medium font-inter leading-snug"
                    >
                        {" "}
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
