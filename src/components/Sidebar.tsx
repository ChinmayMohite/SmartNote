import { MenuIcon } from "lucide-react";
import NewDocumentBtton from "./NewDocumentBtton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Props = {};
const Sidebar = (props: Props) => {
  const menuOptions = (
    <>
      <NewDocumentBtton></NewDocumentBtton>
      {/* My Docs */}
      {/* shared with me */}
    </>
  );
  return (
    <div className="p-2 md:p-5 bg-gray-100 relative">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon
              className="p-2 hover:opacity-30 rounded-lg"
              size={40}
            ></MenuIcon>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div>{menuOptions}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:inline">{menuOptions}</div>
    </div>
  );
};

export default Sidebar;
