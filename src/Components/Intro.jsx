import React from "react";

export default function Intro() {
  return (
    <div className="px-4 flex flex-col gap-4 pb-6 lg:flex lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
      <h1 className="text-[2.4rem] font-bold">
        The Bright Future of Web 3.0?{" "}
      </h1>
      <div className="flex flex-col gap-4">
        <p className="text-neutral-600">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="px-6 py-3 bg-red-500 text-neutral-950 self-start uppercase font-mono">
          Read more
        </button>
      </div>
    </div>
  );
}
