"use client";

import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import React, { ReactNode } from "react";
import Link from "next/link";
import Image from 'next/image';

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <header className="flex items-center justify-between h-16 px-4 bg-background border-b md:px-6">
          <Link href="/" prefetch={false}>
            <Image
              src="/JD_ID.jpg"
              alt="JakobDahlin_Logo"
              width="40"
              height="40"
            />
          </Link>
          <nav className="flex items-center gap-4 text-md font-medium">
            <Link href="/" className="hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="/portfolio" className="hover:underline" prefetch={false}>
              Portfolio
            </Link>
            <Link href="/about" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="/contact" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="sticky bottom-0 flex flex-col gap-2 sm:flex-row py-4 w-full items-center px-4 md:px-6 border-t backdrop-blur-sm bg-white/50">
  <p className="text-xs text-black-foreground">&copy; 2024 Jakob Dahlin. All rights reserved.</p>
  <nav className="sm:ml-auto flex gap-4 sm:gap-6">
    <Link href="https://www.instagram.com/jakobdahlin/" className="text-xs hover:underline underline-offset-4" prefetch={false}>
      Instagram
    </Link>
    <Link href="/about" className="text-xs hover:underline underline-offset-4" prefetch={false}>
      About
    </Link>
    <Link href="/contact" className="text-xs hover:underline underline-offset-4" prefetch={false}>
      Contact
    </Link>
  </nav>
</footer>

      </body>
    </html>
  );
}
