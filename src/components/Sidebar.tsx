"use client";
import { MenuIcon } from "lucide-react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewDocumentBtton from "./NewDocumentBtton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useUser } from "@clerk/nextjs";
import {
  collectionGroup,
  DocumentData,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import SidebarOptions from "./SidebarOptions";

type Props = {};
interface RoomDocument extends DocumentData {
  createdAt: string;
  role: "owner" | "editor";
  userId: string;
  roomId: string;
}
const Sidebar = (props: Props) => {
  const { user } = useUser();
  const [data, loading, error] = useCollection(
    user &&
      query(
        collectionGroup(db, "rooms"),
        where("userId", "==", user.emailAddresses[0].toString())
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
      },
      {
        owner: [],
        editor: [],
      }
    );
    setGroupedData(grouped);
    console.log(grouped);
  }, [data]);

  const menuOptions = (
    <>
      <NewDocumentBtton></NewDocumentBtton>
      <div className="flex flex-col py-4 space-y-4 md:max-w-36">
        {groupedData.owner.length === 0 ? (
          <h2 className="text-gray-500 dark:text-gray-400 font-semibold text-sm">
            No documents found
          </h2>
        ) : (
          <>
            <h2 className="text-gray-500 dark:text-gray-400 font-semibold text-sm">
              My Documents
            </h2>
            {groupedData.owner.map((doc) => (
              <SidebarOptions
                key={doc.id}
                id={doc.id}
                href={`/doc/${doc.id}`}
              ></SidebarOptions>
            ))}
          </>
        )}
      {groupedData.editor.length > 0 && (
        <>
          <h2 className="text-gray-500 dark:text-gray-400 font-semibold text-sm">
            Shared Documents
          </h2>
          {groupedData.editor.map((doc) => (
            <SidebarOptions
            key={doc.id}
            id={doc.id}
            href={`/doc/${doc.id}`}
            ></SidebarOptions>
          ))}
        </>
      )}
      </div>
    </>
  );

  return (
    <div className="p-2 md:p-5 bg-gray-200 dark:bg-gray-900 relative dark:border-r-2 border-gray-700 ">
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
