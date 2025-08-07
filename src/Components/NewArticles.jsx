import React from "react";

export default function NewArticles() {
  return (
    <div className="flex flex-col  mx-4 bg-[#000000] text-neutral-300 p-4 gap-[1rem] lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3  ">
      <h2 className=" font-bold text-[1.6rem] text-cyan-600">New</h2>
      <div className="border-b  border-amber-50 pb-4">
        <a href="#" className="hover:text-amber-500">
          <h4 className="font-bold text-[1.2rem]">Hydrogen VS Electric Cars</h4>
        </a>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div className="border-b border-amber-50 pb-4 ">
        <a href="#" className="hover:text-amber-400">
          <h4 className="font-bold text-[1.2rem]">
            The Downsides of AI Artistry
          </h4>
        </a>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?{" "}
        </p>
      </div>
      <div className="pb-4">
        <a href="#" className="hover:text-amber-400">
          <h4 className="font-bold text-[1.2rem]">Is VC Funding Drying Up?</h4>
        </a>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.{" "}
        </p>
      </div>
    </div>
  );
}
