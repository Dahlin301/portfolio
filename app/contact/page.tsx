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

export default function Component() {
  return (
    <div className="flex justify-center items-center h-screen bg-background justify-start px0 mt-0 md:mt-6">
  <Card className="w-full max-w-md p-6 space-y-4 md:max-w-lg lg:max-w-xl">
        <CardHeader>
          <div className="flex items-center gap-4">
            <img
              src="/JD_ID.jpg"
              width={48}
              height={48}
              alt="Logo"
              className="rounded-full"
              style={{ aspectRatio: "48/48", objectFit: "cover" }}
            />
            <div>
              <CardTitle className="text-2xl font-bold">Contact Jakob Dahlin</CardTitle>
              <CardDescription className="text-muted-foreground">No marketing emails.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <div className="inline-flex h-10 items-center justify-center">
        <a
          href="mailto:jakob@jakobdahlin.com?subject=&body=Hi%20Jakob,"
          className="inline-flex h-10 items-center justify-center"
        >
      <Button>
            Reach Out 
          </Button>
        </a>
        </div>
      </Card>
      
    </div>
    
  )
}
