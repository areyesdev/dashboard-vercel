import SelectIcon from "heroicons/solid/selector.svg";
import DotsHorizontalIcon from "heroicons/solid/dots-horizontal.svg";
import Link from "next/link";

function VercelLogo({ className }) {
  return (
    <svg
      className={className}
      width="50"
      height="100"
      viewBox="0 0 50 100"
      fill="#000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M57.5 0L115 100H0L57.5 0Z"
      />
    </svg>
  );
}

function Avatar({ src, alt = "" }) {
  return (
    <img
      className="h-8 w-8 rounded-full border border-gray-200"
      src={src}
      alt={alt}
    />
  );
}

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <header className=" border-b border-gray-200 space-y-2">
          <nav className="max-w-5xl mx-auto flex items-center justify-between pt-4">
            <div className="flex items-center space-x-3">
              <Link href="#">
                <a>
                  <VercelLogo className="h-6" />
                </a>
              </Link>
              <span>
                <svg
                  viewBox="0 0 32 32"
                  stroke="currentColor"
                  className="h-8 w-8 text-gray-300"
                >
                  <line x1="10" y1="22" x2="24" y2="4" />
                </svg>
              </span>
              <span className="inline-flex items-center space-x-2 text-sm leading-5 font-medium">
                <Link href="#">
                  <a className="inline-flex items-center space-x-2">
                    <span>
                      <Avatar
                        src="https://pbs.twimg.com/profile_images/1316586076895686657/9ihQdlvF_400x400.jpg"
                        alt="Andres Reyes"
                      />
                    </span>
                    <span>Andres Reyes</span>
                  </a>
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center border border-transparent rounded p-0.5 hover:border-gray-200 hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <SelectIcon className="h-5 w-5 text-gray-400" />
                </button>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-5">
                <button
                  type="button"
                  className="border border-gray-200 rounded px-3 py-1.5 text-sm leading-5 text-gray-600 hover:border-black transition ease-in-out duration-150"
                >
                  Feedback
                </button>
                <Link href="#">
                  <a className="inline-block text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-150">
                    Blog
                  </a>
                </Link>
                <Link href="#">
                  <a className="inline-block text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-150">
                    Support
                  </a>
                </Link>
                <Link href="#">
                  <a className="inline-block text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-150">
                    Docs
                  </a>
                </Link>
              </div>
              <button type="button" className="h-5 w-5 text-gray-400">
                <DotsHorizontalIcon />
              </button>
              <button type="button">
                <Avatar
                  src="https://pbs.twimg.com/profile_images/1316586076895686657/9ihQdlvF_400x400.jpg"
                  alt="Andres Reyes"
                />
              </button>
            </div>
          </nav>
          <div className="max-w-5xl mx-auto">
            <nav className="-mb-px flex text-sm space-x-5 leading-5">
              <Link href="#">
                <a className="border-b-2 border-black px-0.5 py-3 text-black">
                  Overview
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150">
                  Projects
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150">
                  Integrations
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150">
                  Activity
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150">
                  Domains
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150">
                  Usage
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150">
                  Settings
                </a>
              </Link>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}
