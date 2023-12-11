import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-semibold text-gray-800">Not Found</h2>
      <p className="mt-2 text-gray-600">
        Could not find the requested resource
      </p>
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
