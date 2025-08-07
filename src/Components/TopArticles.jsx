import React from "react";

export default function TopArticles() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 pt-6 lg:col-start-1 lg:col-end-[-1] lg:row-start-3 lg:row-end-4">
      <div className="flex h-[10rem] gap-[1rem]">
        <div className="h-full w-32 shrink-0">
          <img
            src="images/image-retro-pcs.jpg"
            alt="retro PC illustration"
            className="w-[100%]  h-full object-cover "
          />
        </div>
        <div className="">
          <h2 className="text-[2.4rem] text-orange-400 font-bold">01</h2>
          <h4>Reviving Retro PCs</h4>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="flex h-[10rem] gap-4">
        <div className="h-full w-32 shrink-0">
          <img
            src="/images/image-top-laptops.jpg"
            alt="laptop illustration"
            className="w-[100%]  h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-[2.4rem] text-orange-400 font-bold">02</h2>
          <h4>Top 10 Laptops of 2022</h4>
          <p>Our best picks for various needs and budgets</p>
        </div>
      </div>
      <div className="flex h-[10rem] gap-4">
        <div className="h-full w-32 shrink-0">
          <img
            src="/images/image-gaming-growth.jpg"
            alt="gaming illustration"
            className="w-[100%] h-full object-cover "
          />
        </div>
        <div className="">
          <h2 className="text-[2.4rem] text-orange-400 font-bold">03</h2>
          <h4>The Growth of Gaming</h4>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
  );
}
