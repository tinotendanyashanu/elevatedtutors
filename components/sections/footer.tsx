import Link from "next/link";
import React from "react";

function footer() {
  return (
    <div>
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
          <p>© 2022 Elevated Tutors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default footer;
