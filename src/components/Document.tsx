"use client";

import { FormEvent, useEffect, useState, useTransition } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import Editor from "./Editor";
import { useTheme } from "next-themes";
import useOwner from "@/lib/useOwner";
import DeleteDocument from "./DeleteDocument";
import InviteUser from "./IniviteUser";
import ManageUsers from "./ManageUsers";
import Avatars from "./Avatars";

const Document = ({ id }: { id: string }) => {
  const { theme } = useTheme(); // Get the current theme
  const [data, loading, error] = useDocumentData(doc(db, "documents", id));
  const [input, setInput] = useState("");
  const [isUpdating, startTransition] = useTransition();
  const isOwner = useOwner();

  useEffect(() => {
    if (data) {
      setInput(data.title);
    }
  }, [data]);

  const updateTitle = async (e: FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      startTransition(async () => {
        await updateDoc(doc(db, "documents", id), {
          title: input,
        });
        setInput("");
      });
    }
  };
  // console.log(isOwner)

  return (
    <div
      className={`flex-1 h-full p-5 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex max-w-6xl justify-between mx-auto pb-5">
        <form className="flex flex-1 space-x-2" onSubmit={updateTitle}>
          {/* Title Fill */}
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={theme === "dark" ? "bg-gray-800 text-white" : ""}
          ></Input>
          <Button disabled={isUpdating} type="submit">
            {isUpdating ? "Updating..." : "Update"}
          </Button>
            {isOwner && (
              <>
                <InviteUser></InviteUser>
                <DeleteDocument></DeleteDocument>
              </>
            )}

        </form>
      </div>
      <div className="max-w-6xl flex mx-auto justify-between items-center mb-5">
        {/* Manage Users */}
        
            <ManageUsers></ManageUsers>
        {/* Avatars */}
            <Avatars></Avatars>
      </div>
      <hr className={`pb-10 ${theme === "dark" ? "border-gray-700" : ""}`}></hr>
      {/* Collaborative Editor */}
      <Editor theme={theme!} />
    </div>
  );
};

export default Document;
