"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router';


const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px0 mt-8 md:mt-12">
        <section className="text-center py-1 mb-14">
        </section>
        <p className="text-md font-bold tracking-tighter sm:text-3xl xl:text-4xl/none">
                    Residential
                  </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 max-w-[1100px]">
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <Image
          src="/residential1.jpg"
          alt="Image 1"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <Image
          src="/residential2.jpg"
          alt="Image 2"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <Image
          src="/residential3.jpg"
          alt="Image 3"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <Image
          src="/residential4.jpg"
          alt="Image 4"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <Image
          src="/residential5.jpg"
          alt="Image 5"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <Image
          src="/residential6.jpg"
          alt="Image 6"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <Image
          src="/residential7.jpg"
          alt="Image 7"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <Image
          src="/residential8.jpg"
          alt="Image 8"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <Image
          src="/residential9.jpg"
          alt="Image 9"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <Image
          src="/residential10.jpg"
          alt="Image 10"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
    </div>

    <p className="text-md font-bold tracking-tighter sm:text-3xl xl:text-4xl/none flex-1 flex flex-col items-center justify-center px0 mt-8 md:mt-12">
                    Commercial
                  </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 max-w-[1100px]">
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img
          src="/commercial1.jpg"
          alt="Image 1"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <Image
          src="/commercial2.jpg"
          alt="Image 2"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <Image
          src="/commercial3.jpg"
          alt="Image 3"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <Image
          src="/commercial4.jpg"
          alt="Image 4"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <Image
          src="/commercial5.jpg"
          alt="Image 5"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <Image
          src="/commercial6.jpg"
          alt="Image 6"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <Image
          src="/commercial7.jpg"
          alt="Image 7"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img
          src="/commercial8.jpg"
          alt="Image 8"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <Image
          src="/commercial9.jpg"
          alt="Image 9"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <Image
          src="/commercial10.jpg"
          alt="Image 10"
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
      </div>
    </div>

      </main>
    </div>
  )
}

export default Portfolio;