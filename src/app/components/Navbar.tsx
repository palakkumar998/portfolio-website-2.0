"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Image from "next/image";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed  top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive} >
                <MenuItem setActive={setActive} active={active} item="Home" >

                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Services" >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/Video Editing">Video Editing</HoveredLink>
                        <HoveredLink href="/Graphics Designing">Graphics Designining</HoveredLink>
                        <HoveredLink href="/Product Designing">Product Desginging</HoveredLink>
                        <HoveredLink href="/Web Dev">Web Developement</HoveredLink>
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