"use client";
import Document from "@/components/Document";
const DocumentPage = ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <div className="flex flex-col min-h-screen flex-1">
      <Document id={id}></Document>
    </div>
  );
};
export default DocumentPage;
