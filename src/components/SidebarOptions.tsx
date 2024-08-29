"use client";
import { doc } from "firebase/firestore";
import Link from "next/link";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import { usePathname } from "next/navigation";

function SidebarOptions({ href, id }: { href: string; id: string }) {
  const [data, loading, error] = useDocumentData(doc(db, "documents", id));
  const pathname = usePathname();
  const isActive = href.includes(pathname) && pathname !== "/";
  
  if (!data) return null;

  return (
    <Link
      href={href}
      className={`border p-2 rounded-md ${
        isActive
          ? "bg-gray-300 dark:bg-gray-700 font-bold border-black dark:border-white"
          : "border-gray-400 dark:border-gray-600"
      }`}
    >
      <p className="truncate text-gray-900 dark:text-gray-100">{data.title}</p>
    </Link>
  );
}

export default SidebarOptions;
