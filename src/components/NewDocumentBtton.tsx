"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Button } from "./ui/button";

type Props = {};
const NewDocumentBtton = (props: Props) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleCreateNewDocument = () => {
    startTransition(async () => {
      const {docId} = await createNewDocument();
      router.push(`/doc/${docId}`);
    })
  };

  return <Button onClick={handleCreateNewDocument} disabled={!isPending}>
    {isPending ? "Creating..." : "New Document"}
  </Button>;
};
export default NewDocumentBtton;