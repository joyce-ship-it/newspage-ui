import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import NewArticles from "./NewArticles";
import TopArticles from "./TopArticles";
import Menu from "./Menu";
export default function Home() {
  const [openMenu, setOpenMenu] = React.useState(false);
  function toggleMenu() {
    setOpenMenu((prevVal) => !prevVal);
  }
  return (
    <>
      {openMenu && <Menu toggle={toggleMenu}></Menu>}
      <Header toggle={toggleMenu}></Header>
      <div className="lg:h-[100dvh] lg:grid lg:grid-cols-3 lg:grid-rows-3 max-w-[1100px] lg:mx-auto">
        <div className="py-4 px-4 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:py-0">
          <img
            src="/images/image-web-3-mobile.jpg"
            alt="an illustration"
            className="w-full object-cover object-top max-h-[500px] lg:h-full"
          />
        </div>
        <Intro></Intro>
        <NewArticles></NewArticles>
        <TopArticles></TopArticles>
      </div>
    </>
  );
}
