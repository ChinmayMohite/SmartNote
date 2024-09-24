"use client";
import { useRoom, useSelf } from "@liveblocks/react/suspense";
import { useEffect, useState } from "react";
import * as Y from "yjs";
import { LiveblocksYjsProvider } from "@liveblocks/yjs";
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/shadcn";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";
import stringToColor from "@/lib/stringToColor";
import TranslateDocument from "./TranslateDocument";

type EditorProps = {
  doc: Y.Doc;
  provider: any;
  theme: string; // Pass the theme from the parent component
};

function BlockNote({ doc, provider, theme }: EditorProps) {
  const userInfo = useSelf((me) => me.info);
  const editor: BlockNoteEditor = useCreateBlockNote({
    collaboration: {
      provider,
      fragment: doc.getXmlFragment("document-store"),
      user: {
        name: userInfo?.name,
        color: stringToColor(userInfo?.email),
      },
    },
  });

  return (
    <div className="relative max-w-6xl mx-auto">
      <BlockNoteView
        className="min-h-screen"
        editor={editor}
        theme={theme === "dark" ? "dark" : "light"} // Use the theme from useTheme
      />
    </div>
  );
}

const Editor = ({ theme }: { theme: string }) => {
  const room = useRoom();
  const [doc, setDoc] = useState<Y.Doc>();
  console.log(doc);
  const [provider, setProvider] = useState<LiveblocksYjsProvider>();

  useEffect(() => {
    const yDoc = new Y.Doc();
    console.log(yDoc + "");
    const yProvider = new LiveblocksYjsProvider(room, yDoc);
    setDoc(yDoc);
    setProvider(yProvider);

    return () => {
      yDoc?.destroy();
      yProvider?.destroy();
    };
  }, [room]);

  if (!doc || !provider) {
    return null;
  }
  console.log(doc.get("document-store").toJSON());
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-2 justify-end mb-10">
        {/* <TranslateDocument doc={doc}></TranslateDocument> */}
      </div>
      <BlockNote doc={doc} provider={provider} theme={theme} />
    </div>
  );
};

export default Editor;
