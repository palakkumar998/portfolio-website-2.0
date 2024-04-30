"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Image from "next/image";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive} >
                <MenuItem setActive={setActive} active={active} item="Services" >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">Video Editing</HoveredLink>
                        <HoveredLink href="/interface-design">Graphics Designining</HoveredLink>
                        <HoveredLink href="/seo">Product Desginging</HoveredLink>
                        <HoveredLink href="/branding">Web Developement</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Clients">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Algochurn"
                            href="/"
                            src="/"
                            description="Prepare for tech interviews like never before."
                        />
                        <ProductItem
                            title="Tailwind Master Kit"
                            href="/"
                            src="/"
                            description="Production ready Tailwind css components for your next project"
                        />
                        <ProductItem
                            title="Moonbeam"
                            href="/"
                            src="/"
                            description="Never write from scratch again. Go from idea to blog in minutes."
                        />
                        <ProductItem
                            title="Rogue"
                            href="/"
                            src="/"
                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="About Us">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">Contact</HoveredLink>
                        <HoveredLink href="/individual">Our Team</HoveredLink>
                        <HoveredLink href="/team">Background</HoveredLink>
                        <HoveredLink href="/enterprise">Testimonials</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default Navbar