"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router';


const Portfolio = () => {
  return (
<div className="min-h-screen flex flex-col">
  <main className="flex-1 flex flex-col items-center justify-start px0 mt-0 md:mt-6">
    <section className="text-center py-1 mb-14">
    </section>

    <div className="container mx-auto max-w-[800px] px-4 py-4 md:px-6 lg:py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex justify-center">
          <img
            src="/Jakob.jpg"
            alt="Profile Picture"
            width={300}
            height={300}
            className="aspect-square rounded-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Jakob Dahlin</h1>
          <p className="text-muted-foreground">
            Welcome to the world of Jakob Dahlin, a renowned architectural photographer in New York City. With a distinguished portfolio that spans across continents, Jakob&apos;s work brings cities and their architecture to life through his lens.
          </p>
        </div>
      </div>
      <div className="mt-8 space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Renowned Architectural Photographer In New York City</h2>
          <p className="mt-4 text-muted-foreground">
            Jakob&apos;s work on historical landmark buildings and brand new developments across New York City has earned him wide recognition. His mastery in capturing iconic buildings like the Woolworth Building, Empire State Building, The Textile Building, Starrett-Lehigh, and The News Building has been acclaimed not only in New York City but also in Los Angeles and Stockholm, Sweden.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Featured On Million Dollar Listing: New York</h2>
          <p className="mt-4 text-muted-foreground">
            Jakob&apos;s talent as an architectural photographer in New York City gained spotlight after being featured on Million Dollar Listing: New York. Since then, he has collaborated with leading brands in the real estate industry, with his work appearing at global retailers like IKEA.
          </p>
        </div>
      </div>
    </div>
  </main>
</div>

  )
}

export default Portfolio;