'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Menu,
    X,
    Home,
    Phone,
    Info,
    MessagesSquare,
    Eye,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav
            ref={navbarRef}
            className="w-full bg-foreground/60 absolute flex justify-center top-0 left-0 text-background z-50 md:px-2 py-1 shadow-2xl"
        >
            <div className="mx-auto w-full">
                <div className="flex items-center justify-between h-14 text-background w-full px-4">
                    <Link href="/" className="text-lg font-semibold">
                        <img
                            src="/gsalogo.webp"
                            alt="global stone art"
                            className="w-12 h-12 object-cover rounded-full"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-6">
                        <NavLink href="/" icon={<Home className="h-4 w-4" />} label="Home" currentPath={pathname} />
                        <NavLink href="/designs" icon={<Eye className="h-4 w-4" />} label="Designs" currentPath={pathname} />
                        <NavLink href="/about" icon={<Info className="h-4 w-4" />} label="About" currentPath={pathname} />
                        <NavLink href="/testimonials" icon={<MessagesSquare className="h-4 w-4" />} label="Testimonials" currentPath={pathname} />
                        <NavLink href="/contact" icon={<Phone className="h-4 w-4" />} label="Contact" currentPath={pathname} />
                    </div>

                    {/* Mobile Menu Button */}
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden w-full px-0 border-t bg-background text-foreground">
                        <div className="flex flex-col w-full">
                            <MobileNavLink href="/" icon={<Home className="h-5 w-5" />} label="Home" />
                            <MobileNavLink href="/designs" icon={<Eye className="h-5 w-5" />} label="Designs" />
                            <MobileNavLink href="/about" icon={<Info className="h-5 w-5" />} label="About" />
                            <MobileNavLink href="/testimonials" icon={<MessagesSquare className="h-5 w-5" />} label="Testimonials" />
                            <MobileNavLink href="/contact" icon={<Phone className="h-5 w-5" />} label="Contact" />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

const NavLink = ({ href, icon, label, currentPath }) => (
    <Link href={href} className={`flex items-center gap-2 ${currentPath === href ? 'font-semibold' : ''}`}>
        {icon}
        <span>{label}</span>
    </Link>
);

const MobileNavLink = ({ href, icon, label }) => (
    <Link href={href} className="flex items-center gap-2 p-4 hover:bg-primary/10">
        {icon}
        <span>{label}</span>
    </Link>
);

export default Navbar;
