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
function GitHubLogo({ className }) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M7.975 16a9.39 9.39 0 003.169-.509c-.473.076-.652-.229-.652-.486l.004-.572c.003-.521.01-1.3.01-2.197 0-.944-.316-1.549-.68-1.863 2.24-.252 4.594-1.108 4.594-4.973 0-1.108-.39-2.002-1.032-2.707.1-.251.453-1.284-.1-2.668 0 0-.844-.277-2.77 1.032A9.345 9.345 0 008 .717c-.856 0-1.712.113-2.518.34C3.556-.24 2.712.025 2.712.025c-.553 1.384-.2 2.417-.1 2.668-.642.705-1.033 1.612-1.033 2.707 0 3.852 2.342 4.72 4.583 4.973-.29.252-.554.692-.642 1.347-.58.264-2.027.692-2.933-.831-.19-.302-.756-1.045-1.549-1.032-.843.012-.34.478.013.667.428.239.919 1.133 1.032 1.422.201.567.856 1.65 3.386 1.184 0 .55.006 1.079.01 1.447l.003.428c0 .265-.189.567-.692.479 1.007.34 1.926.516 3.185.516z"></path>
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
          <nav className="max-w-5xl mx-auto px-6 flex items-center justify-between pt-4">
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
          <div className="max-w-5xl mx-auto px-8">
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
        <div className="max-w-5xl mx-auto flex items-start justify-between px-6 pt-14 pb-28">
          <div className="flex space-x-8">
            <div>
              <img
                className="h-24 w-24 rounded-full"
                src="https://pbs.twimg.com/profile_images/1316586076895686657/9ihQdlvF_400x400.jpg"
                alt="Andres Reyes"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center space-x-3">
                <h1 className="text-3xl leading-10 font-bold">Andres Reyes</h1>
                <span className="inline-flex rounded-full px-2 bg-gray-50 border border-gray-200 text-xs uppercase leading-5 font-medium text-black tracking-wide">
                  Hobby
                </span>
              </div>
              <div>
                <dl>
                  <dt className="text-xs leading-5 font-medium text-gray-500 uppercase tracking-wide">
                    Git integration
                  </dt>
                  <dd className="flex items-center space-x-2 text-sm leading-5 font-medium">
                    <GitHubLogo className="h-4 w-4" />
                    <span>areyesdev</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 ">
            <Link href="#">
              <a className="inline-flex justify-center rounded border border-gray-200 px-6 py-2 text-sm font-medium leading-5 bg-white text-gray-500 hover:border-black hover:text-black transition ease-in-out duration-150">
                Invite Team
              </a>
            </Link>
            <Link href="#">
              <a className="inline-flex justify-center rounded border border-transparent  text-sm font-medium leading-5 px-6 py-2 bg-black text-white hover:border-black hover:text-black hover:bg-white transition ease-in-out duration-150 ">
                Import Project
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
