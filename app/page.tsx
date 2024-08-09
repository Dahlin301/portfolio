"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <main className="flex-1 flex flex-col items-center justify-center px0 mt-8 md:mt-12 ">
        <section className="text-center py-1 mb-24">
          <div className="w-full max-w-screen-lg">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Architectural Photographer Jakob Dahlin
                </h1>
                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                  Highlighting the beauty, history, and new developments of New York&apos;s buildings and structures.
                  </p>
                  </div>

                <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Reach Out
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <Image
  src="/JD_COMMERCIAL1.jpg"
  width="300"
  height="200"
  alt="Hero"
  className="mx-auto overflow-hidden rounded-md object-cover sm:w-full lg:order-last"
/>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-0 md:px-6 justify-center bg-gradient-to-b from-muted to-white">
  <div className="w-full max-w-screen-lg mx-auto px-6 md:px-0">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Services</h2>
      <p className="max-w-[700px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
      </p>
    </div>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
      <div className="flex flex-col gap-2 min-h-full">
        <h3 className="text-lg font-bold">Commercial</h3>
        <Image src="/Commercial.jpg" alt="Commercial" className="w-full h-[200px] object-cover rounded-lg" />
        <p className="text-muted-foreground">
          Capturing commercial buildings, office spaces, and retail to highlight their design and functionality.
        </p>
      </div>
      <div className="flex flex-col gap-2 min-h-full">
        <h3 className="text-lg font-bold">Residential</h3>
        <Image src="/Residential.jpg" alt="Commercial" className="w-full h-[200px] object-cover rounded-lg" />
        <p className="text-muted-foreground">
          Showcasing the architectural beauty, amenities and unique features of homes and residential complexes.
        </p>
      </div>
      <div className="flex flex-col gap-2 min-h-full">
        <h3 className="text-lg font-bold">Real Estate</h3>
        <Image src="/RealEstate.jpg" alt="Commercial" className="w-full h-[200px] object-cover rounded-lg" />
        <p className="text-muted-foreground">
          Bring out the aesthetic appeal and design elements of living spaces to boost sales.
        </p>
      </div>
      <div className="flex flex-col gap-2 min-h-full">
        <h3 className="text-lg font-bold">Hospitality</h3>
        <Image src="/Hospitality.jpg" alt="Commercial" className="w-full h-[200px] object-cover rounded-lg" />
        <p className="text-muted-foreground">
          Focusing on hospitality venues and hotels to showcase their ambiance and facilities.
        </p>
      </div>
      <div className="flex flex-col gap-2 min-h-full">
        <h3 className="text-lg font-bold">Construction</h3>
        <Image src="/Construction.JPG" alt="Commercial" className="w-full h-[200px] object-cover rounded-lg" />
        <p className="text-muted-foreground">
          Documenting the different stages of construction projects, from groundbreaking to completion.
        </p>
      </div>
      <div className="flex flex-col gap-2 min-h-full">
        <h3 className="text-lg font-bold">Archive</h3>
        <Image src="/Archive.JPG" alt="Commercial" className="w-full h-[200px] object-cover rounded-lg" />
        <p className="text-muted-foreground">
          Documenting the preservation and restoration of historical buildings and landmarks.
        </p>
      </div>
    </div>
  </div>
</section>



        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-color">Introduction</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Jakob Dahlin is a renowned architectural photographer, real estate photographer and artist based in New York City. He is well-known for his work at historical landmark buildings and brand new developments across the city. He gained wide recognition after being featured on Million Dollar Listing: New York and since then he has worked with leading brands in the real estate industry not only in New York City but also in Los Angeles and Stockholm, Sweden.
                </p>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                In New York City, Jakob has extensive experience working in historical landmark buildings such as Woolworth Building, Empire State Building, The Textile Building, Starrett-Lehigh, and The News Building. When he is not capturing the iconic skyline of New York City, Jakob travels around the world, capturing postcard-like photographs. Some of his work has been available for purchase at global retailers such as IKEA.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              {/* User testimonials or other content */}
            </div>
          </div>
        </section>

      </main>
</div>
  )
}

export default Portfolio;

