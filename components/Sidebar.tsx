'use client'

import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useUser } from "@clerk/nextjs";
import { collectionGroup, DocumentData, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { useEffect, useState } from "react";
import SidebarOption from "./SidebarOption";

interface RoomDocument extends DocumentData {
  createdAt: string;
  role: "owner" | "editor";
  roomId: string;
  userId: string;
}

export default function Sidebar() {
  const { user } = useUser();
  const [data,/* loading, error */] = useCollection(
    user &&
      query(collectionGroup(db, 'rooms'),
        where('userId', '==', user.emailAddresses[0].toString())
      )
  );

  const [groupedData, setGroupedData] = useState<{
    owner: RoomDocument[];
    editor: RoomDocument[];
  }>({
    owner: [],
    editor: [],
  });

  useEffect(() => {
    if (!data) return;

    const grouped = data.docs.reduce<{
      owner: RoomDocument[];
      editor: RoomDocument[];
    }>(
      (acc, curr) => {
        const roomData = curr.data() as RoomDocument;

        if (roomData.role === "owner") {
          acc.owner.push({
            id: curr.id,
            ...roomData,
          });
        } else {
          acc.editor.push({
            id: curr.id,
            ...roomData,
          });
        }
        return acc;
      }, {
        owner: [],
        editor: [],
      }
    );
    setGroupedData(grouped);
  }, [data]);
  const menuOptionsDesktop =  (
    <>

    <div className="flex py-4 flex-col space-y-4 md:max-w-36">
      {/* my documents */}
      {groupedData.owner.length === 0 ?  (
        <h2 className="text-gray-500 font-semibold text-sm">
          No documents found
        </h2>
      ) : (
        <>
          <h2 className="text-gray-500 font-semibold text-sm">
            My Documents
          </h2>
          {groupedData.owner.map((doc) => (
              <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`}/>
          ))}
        </>
      )}

      {/* Share with me */}
      {groupedData.editor.length > 0 && (
        <>
        <h2 className="text-gray-500 font-semibold text-sm">
            Share with me
          </h2>
          {groupedData.editor.map((doc) => (
              <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`}/>
          ))}
        </>
      )}
      {/* List */}
      
      </div>
    </>
  );
  const menuOptions = (
    <>
      <NewDocumentButton />

    <div className="flex py-4 flex-col space-y-4 md:max-w-36">
      {/* my documents */}
      {groupedData.owner.length === 0 ?  (
        <h2 className="text-gray-500 font-semibold text-sm">
          No documents found
        </h2>
      ) : (
        <>
          <h2 className="text-gray-500 font-semibold text-sm">
            My Documents
          </h2>
          {groupedData.owner.map((doc) => (
              <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`}/>
          ))}
        </>
      )}

      {/* Share with me */}
      {groupedData.editor.length > 0 && (
        <>
        <h2 className="text-gray-500 font-semibold text-sm">
            Share with me
          </h2>
          {groupedData.editor.map((doc) => (
              <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`}/>
          ))}
        </>
      )}
      {/* List */}
      
      </div>
    </>
  );

  return (
    <div className="p-2 md:p-5 bg-gray-200 relative duration-150">      
      <div className="md:hidden block">
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              {menuOptions}
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:block">
        <NewDocumentButton />
        {menuOptionsDesktop}
      </div>
    </div>
  );
}