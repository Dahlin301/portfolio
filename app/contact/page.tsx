"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image";


const ContactPage = () => {
  return (
<div className="min-h-screen flex flex-col">
  <main className="flex-1 flex flex-col items-center justify-start px0 mt-0 md:mt-6">
    <section className="text-center py-1 mb-14 justify-center">
    </section>

    <div className="container justify-center mx-auto max-w-[500px] px-4 py-4 md:px-6 lg:py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 justify-center">
        <div className="flex justify-center">
        <Image
  src="/JD_ID.jpg"
  alt="Profile Picture"
  width={300}
  height={300}
  className="aspect-square rounded-full object-cover justify-center"
/>
        </div>
        <div className="space-y-4 justify-center">
          <h1 className="text-3xl font-bold justify-center tracking-tight sm:text-4xl">Contact Jakob Dahlin</h1>
          <p className="text-muted-foreground justify-center">No promotional emails.</p>
          <a
            href="mailto:jakob@jakobdahlin.com?subject=Contact%20Jakob%20Dahlin&body=Hi%20Jakob,"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Reach Out
          </a>
        </div>
      </div>
      <div className="mt-8 space-y-8">
        <div>
        </div>
        <div>
        </div>
      </div>
    </div>
  </main>
</div>

  );
}

export default ContactPage;