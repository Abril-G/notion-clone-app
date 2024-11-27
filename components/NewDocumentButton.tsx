'use client'
import { useTransition } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createNewDocument } from "@/actions/actions";

function NewDocumentButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  
  const handleCreateDocument = () => {
    startTransition(async () => {
      // create new document
      const { docId } = await createNewDocument();
      router.push(`/doc/${docId}`);
    })
  }
  return (
    <Button onClick={handleCreateDocument} disabled={isPending}>
      <span>{isPending ? "Creating..." : "New Document"}</span>
    </Button>
  );
}

export default NewDocumentButton;