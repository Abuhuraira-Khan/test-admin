"use client"
import "./Navbar.css"
import Link from "next/link";
import * as React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {

    useGSAP(()=>{
        const tl = gsap.timeline();

         // header section
         tl.from("#site-logo img", {
            scale: 0,
            scrollTrigger: {
              trigger: "#site-logo img",
              start: "top top",
              end: "top -20%",
              scrub: 1,
            },
          });
          let headerItem = document.querySelectorAll("#nav-list a");
          tl.from(headerItem[0], {
            left: "-700px",
            scrollTrigger: {
              trigger: headerItem[0],
              start: "top top",
              end: "top -20%",
              scrub: 1,
            },
          });
          tl.from(headerItem[1], {
            bottom: "-800px",
            right: "-300px",
            scrollTrigger: {
              trigger: headerItem[0],
              start: "top top",
              end: "top -20%",
              scrub: 1,
            },
          });
          tl.from(headerItem[2], {
            bottom: "-800px",
            left: "-300px",
            scrollTrigger: {
              trigger: headerItem[0],
              start: "top top",
              end: "top -20%",
              scrub: 1,
            },
          });
          tl.from(headerItem[3], {
            right: "-700px",
            scrollTrigger: {
              trigger: headerItem[0],
              start: "top top",
              end: "top -20%",
              scrub: 1,
            },
          });
    })

    React.useEffect(() => {
        
    // website header section
    let header = document.getElementById("header");

    header.style.position = "fixed";
    header.style.top = "10px";

  const navList = document.querySelectorAll("#header #nav-list a");
  navList.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "transparent";
      item.style.transition = ".2s";
    });
    item.addEventListener("mouseleave", () => {
      item.style.backgroundColor = "";
    });

    window.addEventListener('scroll',()=>{
        
      let othersNavList = document.querySelector(
        "#header #nav-list #nav-list-others-list"
      );
      othersNavList.style.opacity = "0";
      othersNavList.style.top = "100%";
    })
  });

  document
    .querySelector("#header #nav-list a:nth-child(4)")
    .addEventListener("click", () => {
      let othersNavList = document.querySelector(
        "#header #nav-list #nav-list-others-list"
      );
      othersNavList.style.opacity = "1";
      othersNavList.style.top = "200%";
      othersNavList.style.transition = ".2s";
    });
    }, [])


       
  return (
    <div>
      <div id="header">
        <div id="site-logo">
          <img
            src="/assets/images/site-logo-transparent.svg"
            alt="image not found"
          />
        </div>
        <div id="nav-list">
          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="/productPage">
            <span>Product</span>
          </Link>
          <Link href="/blog">
            <span>Blog</span>
          </Link>
          <a>
            <span>Others</span>
          </a>
          <div id="nav-list-others-list">
            <Link href="/lab">
              <span>Learning Lab</span>
            </Link>
            <Link href="/codeVault">
              <span>Code Vault</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
