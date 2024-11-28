import { ClerkProvider } from "@clerk/nextjs";
import { ArrowLeftCircle } from "lucide-react";

export default function Home() {
  return (
    <ClerkProvider>
   <main className="flex space-x-2 items-center animate-pulse">
    <ArrowLeftCircle className="w-12 h-12"/>
    <h1 className="font-semibold md:text-2xl">Get started with creating a New Document!</h1>
   </main>
   </ClerkProvider>
  );
}
