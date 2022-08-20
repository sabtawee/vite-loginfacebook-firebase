import React from "react";
import FooterComponent from "../components/FooterComponent";
import HeroComponent from "../components/HeroComponent";
import NavbarComponent from "../components/NavbarComponent";
import PortComponent from "../components/PortComponent";
import ServiceComponent from "../components/ServiceComponent";
import TeamComponent from "../components/TeamComponent";
import FacebookLoginPage from "./FacebookLogin/FacebookLoginPage";

export default function Homepage() {
  return (
    <>
      <NavbarComponent />
      <HeroComponent/>
      <ServiceComponent/>
      <PortComponent/>   
      <TeamComponent/>
      <div>Homepage</div>
      <FooterComponent/>
    </>
  );
}
