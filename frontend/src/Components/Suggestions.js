import React from "react";

export default function Suggestions({ user }) {
  return (
    <div className="sticky top-0 mt-4 px-2 ">
      <div className="flex justify-between">
        <div className="flex gap-x-1 sm:gap-x-2 items-center">
          <img
            className="rounded-full h-8 w-8 shadow"
            src={user.profile_picture}
          />
          <div className="text-sm font-medium text-gray-900">{user.name}</div>
          <div className="flex gap-x-1 items-center bg-green-50 text-green-700 p-.5 px-1 font-semibold text-xs">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                fill="currentColor"
                class="bi bi-image-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
              </svg>
              
            </span>
            75 Posts
          </div>
        </div>
        <div className="flex-shrink-0">
          <button className="inline-flex items-center px-3 py-0.5 rounded-full bg-blue-50 text-sm font-medium text-blue-700 hover:bg-blue-100">
            <svg
              class="-ml-1 mr-0.5 h-5 w-5 text-blue-400"
              x-description="Heroicon name: solid/plus"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Follow
          </button>
        </div>
      </div>
      
    </div>
  );
}
