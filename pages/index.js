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

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <header>
          <nav className="max-w-5xl mx-auto pt-5">
            <div className="flex items-center space-x-3">
              <VercelLogo className="h-6" />
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
                      <img
                        className="h-7 w-7 rounded-full border border-gray-200"
                        src="https://pbs.twimg.com/profile_images/1316586076895686657/9ihQdlvF_400x400.jpg"
                        alt="Andres Reyes"
                      />
                    </span>
                    <span>Andres Reyes</span>
                  </a>
                </Link>
                <button type="button">
                  <SelectIcon className="h-5 w-5 text-gray-400" />
                </button>
              </span>
            </div>
            <div>
              <button type="button">Feedback</button>
              <Link href="#">
                <a>Blog</a>
              </Link>
              <Link href="#">
                <a>Support</a>
              </Link>
              <Link href="#">
                <a>Docs</a>
              </Link>
              <button type="button">
                <DotsHorizontalIcon />
              </button>
              <span>
                <button type="button">
                  <img
                    src="https://pbs.twimg.com/profile_images/1316586076895686657/9ihQdlvF_400x400.jpg"
                    alt="Andres Reyes"
                  />
                </button>
              </span>
            </div>
          </nav>
          <nav></nav>
        </header>
      </div>
    </div>
  );
}
