/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DxxP15tZjq7
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div className="bg-[#f7f8fc]">
      <header className="bg-white py-4 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <div className="font-bold text-xl">EduVibe</div>
          <nav className="flex space-x-4">
            <Link className="text-gray-600 hover:text-gray-800" href="#">
              Home
            </Link>
            <Link className="text-gray-600 hover:text-gray-800" href="#">
              About
            </Link>
            <Link className="text-gray-600 hover:text-gray-800" href="#">
              Courses
            </Link>
            <Link className="text-gray-600 hover:text-gray-800" href="#">
              Pages
            </Link>
            <Link className="text-gray-600 hover:text-gray-800" href="#">
              Blog
            </Link>
            <Link className="text-gray-600 hover:text-gray-800" href="#">
              Contact
            </Link>
          </nav>
          <Button className="bg-[#ff9900] text-white">Get Started Today</Button>
        </div>
      </header>
      <section className="relative bg-[#f7f8fc] pt-16 pb-32">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold leading-tight text-gray-800">
                Education Is A Path To Success In Life
              </h1>
              <p className="mt-4 text-gray-600">
                Sed ut voluptatem aperiam unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium.
              </p>
              <Button className="mt-6 bg-[#ff9900] text-white">
                Get Started Today
              </Button>
            </div>
            <div className="relative">
              <img
                alt="Hero Image"
                className="rounded-full border-8 border-white"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width="400"
              />
              <Badge
                className="absolute -top-4 -right-4 bg-[#ff9900] text-white"
                variant="secondary"
              >
                28K
              </Badge>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold text-gray-800">
            Learn New Skills When And Where You Like
          </h2>
          <div className="mt-12 grid grid-cols-4 gap-8">
            <div className="text-center">
              <BookIcon className="mx-auto mb-4 h-12 w-12 bg-[#ff9900] text-white p-3 rounded-full" />
              <h3 className="text-lg font-semibold text-gray-800">
                Expert Instructions
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="text-center">
              <VideoIcon className="mx-auto mb-4 h-12 w-12 bg-[#ff9900] text-white p-3 rounded-full" />
              <h3 className="text-lg font-semibold text-gray-800">
                Video Tutorials
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="text-center">
              <ClockIcon className="mx-auto mb-4 h-12 w-12 bg-[#ff9900] text-white p-3 rounded-full" />
              <h3 className="text-lg font-semibold text-gray-800">
                Lifetime Access
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="text-center">
              <SmartphoneIcon className="mx-auto mb-4 h-12 w-12 bg-[#ff9900] text-white p-3 rounded-full" />
              <h3 className="text-lg font-semibold text-gray-800">
                Learn From Anywhere
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#ff9900] py-16">
        <div className="container mx-auto flex justify-between items-center text-white">
          <div className="flex items-center">
            <UsersIcon className="h-16 w-16 mr-4" />
            <div>
              <h3 className="text-4xl font-bold">2.98</h3>
              <p>People Enrolled</p>
            </div>
          </div>
          <div className="flex items-center">
            <StarIcon className="h-16 w-16 mr-4" />
            <div>
              <h3 className="text-4xl font-bold">90%</h3>
              <p>People Love To Learn With Us</p>
            </div>
          </div>
          <div className="flex items-center">
            <ThumbsUpIcon className="h-16 w-16 mr-4" />
            <div>
              <h3 className="text-4xl font-bold">9/10</h3>
              <p>Customer Satisfaction Rating</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold text-gray-800">
            Explore Our Popular Courses
          </h2>
          <div className="mt-12 grid grid-cols-4 gap-8">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img
                alt="Course Image"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Competitive Strategy For All Shades
                </h3>
                <p className="text-gray-600">$450.00</p>
                <div className="flex items-center justify-between mt-4">
                  <Avatar
                    alt="Instructor"
                    src="/placeholder.svg?height=40&width=40"
                  />
                  <Badge variant="default">4.5</Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-[#ff9900] text-white">
              View All Courses
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#e6e7ee]">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold text-gray-800">
            Introduce Our Life Coaches
          </h2>
          <div className="mt-12 grid grid-cols-4 gap-8">
            <div className="text-center">
              <Avatar
                alt="Life Coach"
                className="mx-auto mb-4"
                src="/placeholder.svg?height=100&width=100"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                James Carlson
              </h3>
              <p className="text-gray-600">SEO Expert</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold text-gray-800">
            Our Students Feedback
          </h2>
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <p className="text-gray-600">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <div className="flex items-center mt-4">
                <Avatar
                  alt="Student"
                  className="mr-4"
                  src="/placeholder.svg?height=40&width=40"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    John Smith
                  </h3>
                  <p className="text-gray-600">Marketing Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#e6e7ee]">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold text-gray-800">
            Our Latest News Feed
          </h2>
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img
                alt="Blog Image"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Introduction To JavaScript for the Beginners
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-[#ff9900] text-white">Read More Blogs</Button>
          </div>
        </div>
      </section>
      <footer className="bg-[#232d37] text-white py-8">
        <div className="container mx-auto grid grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">EduVibe</h3>
            <p className="text-gray-400">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-gray-300" href="#">
                  About us
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#">
                  News & Media
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>123 Fifth Avenue, New York, NY 10160</li>
              <li>+1 123 456 7890</li>
              <li>info@example.com</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>© 2022 EduVibe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function SmartphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  );
}
