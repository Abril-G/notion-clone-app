import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Sidebar() {
  const menuOptions = (
    <>
      <NewDocumentButton />

      {/* my documents */}
      {/* list.. */}

      {/* share with me */}
      {/* list... */}
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
      </div>
    </div>
  );
}