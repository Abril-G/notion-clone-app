import { Button } from "@/components/ui/button";
import { ClerkProvider } from "@clerk/nextjs";

export default function Home() {
  return (
    <ClerkProvider>
   <main>
    <h1>Let&#39;s create AI productivity APP</h1>
    <Button>Start</Button>
   </main>
   </ClerkProvider>
  );
}
