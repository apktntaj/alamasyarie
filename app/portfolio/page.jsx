import Link from "next/link";
import React from "react";

export default function ShowcasePage() {
  return (
    <div className="container flex mx-2">
      <Link className="m-auto" href="https://malika-indol.vercel.app/cek-tarif">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-2xl drop-shadow-sm mb-2">Rayefy</div>
            <p className="text-gray-700 text-base">
              An app that helps you to manage your time and tasks efficiently
              when access insw site.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #scrapping
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #websocket
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #excel
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
