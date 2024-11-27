'use client'

import { FormEvent, useEffect, useState, useTransition } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";

function Document({ id }: { id:  string }) {
    const [data, loading, error] = useDocumentData(doc(db, "documents", id));
    const [input, setInput] = useState('');
    const [isUpdating, startTransition] = useTransition();
    // const isOwner = useOwner();
    
    useEffect(() => {
        if (data) [
            setInput(data.title)
        ]
    }, [data])

    const updateTitle = (e: FormEvent) => {
        e.preventDefault();

        if (input.trim()) {
            startTransition(async () => {
                await updateDoc(doc(db, "documents", id), {
                    title: input,
                });
            });
        };
    }
  return (
    <div className="">
        <div className="max-w-6xl flex mx-auto justify-between pb-5">
            <form className="flex space-x-2 flex-1" onSubmit={updateTitle}>
                {/* Update title */}
                <Input value={input} onChange={(e) => setInput(e.target.value)}/>

                <Button disabled={isUpdating}>
                  {isUpdating ? 'Updating...' : 'Update'}  
                </Button>    
                {/* IF */}
                {/* isOwner && InviteUser, DeleteDoc` */}
            </form>
        </div>

        <div>
            {/* ManageUser */}
        </div>
       {/* Collaborative Editor */}
    </div>
  )
}

export default Document
