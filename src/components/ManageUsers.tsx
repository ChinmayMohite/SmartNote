"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormEvent, useState, useTransition } from "react";
import { Button } from "./ui/button";
import { inviteUserToDocument, removeUserFromDocument } from "../../actions/actions";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
import useOwner from "@/lib/useOwner";
import { useRoom } from "@liveblocks/react/suspense";
import { useCollection } from "react-firebase-hooks/firestore";
import { collectionGroup, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const InviteUser = () => {
  const { user } = useUser();
  const isOwner = useOwner();
  const room = useRoom();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const [usersInRoom] = useCollection(
    user && query(collectionGroup(db, "rooms"), where("roomId", "==", room.id))
  );
  const handleDelete = async (userId: string) => {
    startTransition(async () => {
      if(!user) return;
      const { success } = await removeUserFromDocument(room.id,userId);
      if (success) {
        setIsOpen(false);
        toast.success("User Added Successfully");
      } else {
        toast.error("Failed to add user");
      }
    });
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild variant={"outline"}>
        <DialogTrigger>Users ({usersInRoom?.docs.length})</DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Users with Access</DialogTitle>
          <DialogDescription>
            Below is the list of users with access to the document.
          </DialogDescription>
        </DialogHeader>
        <hr className="my-2"></hr>
        <div className="flex flex-col space-y-2">
          {usersInRoom?.docs.map((doc) => (
            <div
              key={doc.data().userId}
              className="flex justify-between items-center"
            >
              <p className="font-light">
                {doc.data().userId === user?.emailAddresses[0].toString()
                  ? `You (${doc.data().userId})`
                  : doc.data().userId}
              </p>
              <div className="flex items-center gap-2">
              {doc.data().role === "owner" ? <Button className="bg-green-400">{doc.data().role}</Button> : <Button className="bg-blue-400">{doc.data().role}</Button>}
                
                {isOwner &&
                  doc.data().userId !== user?.emailAddresses[0].toString() && (
                    <Button
                      variant={"destructive"}
                      size="sm"
                      disabled={isPending}
                      onClick={() => {
                        handleDelete(doc.data().userId);
                      }}
                    >
                      {isPending ? "Removing..." : "Delete"}
                    </Button>
                  )}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default InviteUser;
