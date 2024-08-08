/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RjGf1HyfQFu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <Card className="w-full max-w-md p-6 space-y-4 md:max-w-lg lg:max-w-xl">
        <div className="flex items-center gap-4">
          <img
            src="/JD_ID.jpg"
            width={48}
            height={48}
            alt="Logo"
            className="rounded-full"
            style={{ aspectRatio: '48/48', objectFit: 'cover' }}
          />
          <div>
            <h2 className="text-2xl font-bold">Contact Jakob Dahlin</h2>
            <p className="text-muted-foreground">No marketing</p>
          </div>
        </div>
        <a
          href="mailto:someone@example.com?subject=Contact%20Jakob%20Dahlin&body=Hello%20Jakob,"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Send
        </a>
      </Card>
    </div>
  );
}