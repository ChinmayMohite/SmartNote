import Image from "next/image";
import Link from "next/link";

export default function DocumentPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-semibold mb-4">Your Document Workspace</h1>
      <p className="text-lg mb-8">Here you can view, edit, and manage your documents.</p>

      <div className="mt-8 flex flex-col items-center space-y-4">
        {/* Display the light mode image */}
        <div className="block dark:hidden">
          <Image
            src="/reading.png"
            alt="Document Workspace"
            width={400}
            height={300}
            className=""
          />
        </div>

        {/* Display the dark mode image */}
        <div className="hidden dark:block">
          <Image
            src="/reading-dark.png"
            alt="Document Workspace"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

    </div>
  );
}
