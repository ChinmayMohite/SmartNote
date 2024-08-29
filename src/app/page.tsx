import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100">

      <h1 className="text-4xl font-semibold mb-4">Welcome to Your Space</h1>
      <p className="text-lg mb-8">Get started by creating a new document.</p>

      <div className="mt-8 flex flex-col items-center space-y-4">
        {/* Display the light mode image */}
        <div className="block dark:hidden">
          <Image
            src="/documents.png"
            alt="Documents"
            width={400}
            height={300}
            className=""
          />
        </div>

        {/* Display the dark mode image */}
        <div className="hidden dark:block">
          <Image
            src="/documents-dark.png"
            alt="Editor"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
