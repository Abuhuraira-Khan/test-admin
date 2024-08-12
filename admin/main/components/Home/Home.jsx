"use client";
import "./Home.css";
import * as React from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const router = useRouter();

  const heroWelcomeTextRef = React.useRef();

  const [idx, setIdx] = React.useState(0);

  const [heroWelcomeText, setHeroWelcomeText] = React.useState(
    "Welcome To My Universe "
  );
  const [heroIntoText, setHeroIntoText] = React.useState(
    `
    My name is Abu Huraira Khan, a passionate full-stack developer
    with 2 years of experience crafting seamless, visually captivating
    websites. Proficient in HTML, CSS, JavaScript, and React.js, with
    a keen focus on frontend development. I specialize in Next.js and
    have extensive experience with various JavaScript libraries such
    as GSAP, jQuery, and Swiper. Additionally, I have worked with
    databases like MongoDB and Firebase. Explore my portfolio to
    witness my dedication to clean code and user-centric design`
  );
  const aboutMeTextRef = React.useRef()
  const [aboutMeText, setAboutMeText] = React.useState(
    `
    Welcome to my portfolio! I'm a passionate full-stack web
    developer with 2 years of experience crafting seamless,
    visually captivating websites. Originally born on March 2008
    in Maheshpur, Khulna.
    <br />
    <br />
    My journey into the world of web development began with a
    fascination for creating visually stunning and intuitive user
    experiences.
    <br />
    <br />
    I thrive on crafting seamless, captivating websites that not
    only meet but exceed user expectations. Proficient in HTML,
    CSS, JavaScript, React.js, Next.js, and backend technologies
    such as Node.js, Express.js, and databases like MongoDB and
    Firebase. I specialize in both frontend and backend
    development, leveraging JavaScript libraries such as GSAP and
    jQuery to enhance user interactions.
    <br />
    <br />
    Driven by a commitment to clean code and a user-centric
    approach, I constantly strive to stay updated with the latest
    industry trends and best practices. My goal is to create
    digital experiences that leave a lasting impression and make a
    positive impact.
    <br />
    <br />
    Feel free to explore my portfolio to see some of my recent
    projects and get a glimpse into my coding style and design
    philosophy. I'm excited about the possibilities that lie ahead
    and look forward to collaborating on exciting projects. Let's
    build something amazing together!`
  );

  // auto typing
  React.useEffect(() => {
    aboutMeTextRef.current.innerHTML = aboutMeText
    let Heroidx = 0;
    let HeroIntoidx = 0;
    let aboutSecidx = 0;
    setInterval(() => {
      setHeroWelcomeText(heroWelcomeText.substring(0, Heroidx + 1));
      Heroidx++;
    }, 100);
    setInterval(() => {
      setHeroIntoText(heroIntoText.substring(0, HeroIntoidx + 1));
      HeroIntoidx++;
    }, 5);
    setInterval(() => {
      let txt = `aboutMeText`
      setAboutMeText(txt.substring(0, aboutSecidx + 1));
      aboutSecidx++;
    }, 1000);
  }, []);

  // dom code
  // define ref
  const heroSecVideoRef = React.useRef(null);
  const loaderRef = React.useRef(null);
  const motherBtnRef = React.useRef(null);
  const heroScrlTextRef = React.useRef(null);
  const motherBtnTextRef = React.useRef(null);

  React.useEffect(() => {
    const handleLoad = () => {
      if (loaderRef.current) {
        loaderRef.current.style.top = "-200%";
        loaderRef.current.style.transition = ".5s";
      }
    };

    const handleScroll = () => {
      const heroSec = document.getElementById("hero-sec");
      const motherBtn = motherBtnRef.current;
      const heroScrlText = heroScrlTextRef.current;

      if (window.scrollY > heroSec.offsetHeight) {
        motherBtn.style.scale = ".8";
      } else {
        motherBtn.style.scale = "0";
      }

      const allSection = document.querySelectorAll(".section");
      allSection.forEach((section) => {
        if (window.scrollY > section.offsetTop) {
          if (motherBtnTextRef.current) {
            motherBtnTextRef.current.textContent = section.id;
          }
        }
      });
    };

    const handleMouseOver = () => {
      if (heroScrlTextRef.current) {
        heroScrlTextRef.current.style.opacity = "1";
        heroScrlTextRef.current.style.transition = ".3s";
        heroScrlTextRef.current.style.marginTop = "10px";
      }
    };

    const handleMouseLeave = () => {
      if (heroScrlTextRef.current) {
        heroScrlTextRef.current.style.opacity = "0";
        heroScrlTextRef.current.style.transition = ".3s";
        heroScrlTextRef.current.style.marginTop = "0px";
      }
    };

    const handleClick = () => {
      document.location.href = "#about-sec";
    };

    const handleMotherBtnClick = () => {
      window.location.href = "#hero-sec";
    };

    const handleMotherBtnMove = (e) => {
      if (motherBtnRef.current) {
        motherBtnRef.current.style.transition = "0s";
        motherBtnRef.current.style.top = e.clientY + "px";
        motherBtnRef.current.style.left = e.clientX + "px";
      }
    };

    if (heroSecVideoRef.current) {
      heroSecVideoRef.current.play();
    }

    window.addEventListener("load", handleLoad);
    window.addEventListener("scroll", handleScroll);
    const heroScrollBtn = document.querySelector("#hero-sec .hero-scroll-btn button");
    
    if (heroScrollBtn) {
      heroScrollBtn.addEventListener("mouseover", handleMouseOver);
      heroScrollBtn.addEventListener("mouseleave", handleMouseLeave);
      heroScrollBtn.addEventListener("click", handleClick);
    }

    const motherBtn = document.querySelector("#hero-sec .hero-scroll-btn #mother-btn");
    if (motherBtn) {
      motherBtnRef.current = motherBtn;
      motherBtnRef.current.addEventListener("click", handleMotherBtnClick);
      motherBtnRef.current.addEventListener("mousedown", () => {
        window.addEventListener("mousemove", handleMotherBtnMove);
      });
      window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", handleMotherBtnMove);
      });
    }

    const heroScrlText = document.querySelector("#hero-sec .hero-scroll-btn .hero-scrl-text");
    if (heroScrlText) {
      heroScrlTextRef.current = heroScrlText;
    }

    const motherBtnText = document.querySelector("#hero-sec .hero-scroll-btn #mother-btn .section-show");
    if (motherBtnText) {
      motherBtnTextRef.current = motherBtnText;
    }

    const footerYearShow = new Date().getFullYear();
    document.getElementById("footer-present-date").textContent = footerYearShow;

    // Cleanup
    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("scroll", handleScroll);
      if (heroScrollBtn) {
        heroScrollBtn.removeEventListener("mouseover", handleMouseOver);
        heroScrollBtn.removeEventListener("mouseleave", handleMouseLeave);
        heroScrollBtn.removeEventListener("click", handleClick);
      }
      if (motherBtn) {
        motherBtn.removeEventListener("click", handleMotherBtnClick);
        window.removeEventListener("mousemove", handleMotherBtnMove);
        window.removeEventListener("mouseup", handleMotherBtnMove);
      }
    };
  }, []);

  // Gsap code
  useGSAP(() => {
    const tl = gsap.timeline();

    // about section
    tl.from("#as-title", {
      letterSpacing: "8vw",
      scrollTrigger: {
        trigger: "#as-title",
        start: "top 90%",
        end: "top 90%",
        scrub: 1,
      },
    });

    tl.from(".as-img-bg img", {
      borderBottomLeftRadius: "100%",
      borderTopRightRadius: "100%",
      scrollTrigger: {
        trigger: ".as-img-bg img",
        start: "top 30%",
        end: "top 20%",
        scrub: 1,
      },
    });

    // project section
    tl.from("#ps-title", {
      letterSpacing: "10vw",
      scrollTrigger: {
        trigger: "#ps-title",
        start: "top 90%",
        end: "top 90%",
        scrub: 1,
      },
    });

    const psItemList = document.querySelectorAll(".ps-p-item");
    const psItem = document.querySelector(".ps-p-item");
    let psItemWidth = psItem.offsetWidth;
    let psFullWidth = psItemWidth * psItemList.length;

    tl.to("#ps-project", {
      x: -psFullWidth + psItemWidth / 3,
      scrollTrigger: {
        trigger: "#ps-project",
        start: "top 5%",
        end: "bottom 20%",
        scrub: 1,
        pin: "#ps-project",
      },
    });

    //service section
    tl.from("#ss-title", {
      letterSpacing: "10vw",
      scrollTrigger: {
        trigger: "#ss-title",
        start: "top 90%",
        end: "top 90%",
        scrub: 1,
      },
    });

    tl.from(".ss-s-item", {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: ".ss-s-item",
        start: "top 75%",
        end: "top 75%",
        scrub: 1,
      },
    });

    // skill section
    tl.from("#mss-title", {
      letterSpacing: "8vw",
      scrollTrigger: {
        trigger: "#mss-title",
        start: "top 90%",
        end: "top 90%",
        scrub: 1,
      },
    });

    tl.from(".mss-fe-si", {
      opacity: 0,
      x: -50,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".mss-fe-si",
        start: "top 70%",
        end: "top 70%",
        scrub: 1,
      },
    });

    tl.from(".mss-be-si", {
      scale: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".mss-be-si",
        start: "top 70%",
        end: "top 70%",
        scrub: 1,
      },
    });

    //contact section
    tl.from(".contact-form input", {
      opacity: 0,
      x: "-30vh",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 70%",
        end: "top 70%",
        scrub: 1,
      },
    });
    tl.from(".contact-form textarea", {
      scale: 0,
      scrollTrigger: {
        trigger: ".contact-form textarea",
        start: "top bottom",
        end: "top bottom",
        scrub: 1,
      },
    });
  });

  return (
    <>
      <div id="homePageBody">
        <div id="loader">
          <div id="load-p">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 100"
              width="400"
              height="200"
            >
              <rect x="100" y="100" width="100%" height="100%" />
              <line x1="20" y1="10" x2="20" y2="90" />
              <line x1="20" y1="90" x2="180" y2="90" />
              <polyline
                points="20,50 40,40 60,70 80,30 100,60 120,50 140,80 160,40 180,70"
                fill="none"
                stroke="green"
                strokeWidth="1"
                filter="url(#glow)"
              />
            </svg>
          </div>
        </div>

        <Navbar />

        {/* hero section */}
        <video
          id="hero-sec-video"
          ref={heroSecVideoRef}
          muted
          loop
          src="/assets/videoplayback.webm"
        ></video>
        <div id="hero-sec">
          <div className="hero-about-text">
            <h1 ref={heroWelcomeTextRef} className="hero-welcome-text">
              {heroWelcomeText}
            </h1>
            <p>{heroIntoText}</p>
          </div>
          <div className="hero-scroll-btn">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200px"
                height="200px"
                viewBox="0 0 48 48"
                fill="none"
              >
                <rect width="20" height="20" />
                <path
                  d="M12 24L24 12L36 24"
                  stroke="#008000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 36L24 24L36 36"
                  stroke="#008000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div id="mother-btn">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200px"
                  height="200px"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <rect width="20" height="20" />
                  <path
                    d="M12 24L24 12L36 24"
                    stroke="#008000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 36L24 24L36 36"
                    stroke="#008000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <span className="section-show">first section</span>
            </div>
            <span className="hero-scrl-text">Scroll Down</span>
          </div>
        </div>

        {/* main section */}
        <main>
          {/* about section */}
          <div className="section" id="about-sec">
            <h1 id="as-title">about me</h1>
            <div id="as-sec">
              <div id="as-my-photo">
                <div className="as-img-bg">
                  <img src="/assets/images/about-sec-img.jpg" alt="" />
                </div>
              </div>
              <div id="as-about-me">
                <div ref={aboutMeTextRef} className="as-about-me-text">
                </div>
              </div>
            </div>
          </div>

          {/* project section */}
          <div className="section" id="project-sec">
            <h1 id="ps-title">project</h1>
            <div id="ps-project">
              <div className="ps-p-item">
                <div className="ps-pi-img">
                  <img
                    src="/assets/images/Screenshot 2024-04-16 034539.png"
                    alt=""
                  />
                </div>
                <div className="ps-pi-details">
                  <h4>web app development</h4>
                  <h3>Demo Portfolio</h3>

                  <div className="ps-pi-details-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Illum qui in at tempore possimus nemo hic debitis porro
                    accusamus ex. Numquam ea repellat possimus a, labore fugit
                    quaerat veniam inventore?
                  </div>

                  <button className="ps-live-btn">view live</button>
                </div>
              </div>
              <div className="ps-p-item">
                <div className="ps-pi-img">
                  <img
                    src="/assets/images/Screenshot 2024-04-16 034557.png"
                    alt=""
                  />
                </div>
                <div className="ps-pi-details">
                  <h4>web app development</h4>
                  <h3>Demo Portfolio</h3>

                  <div className="ps-pi-details-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Illum qui in at tempore possimus nemo hic debitis porro
                    accusamus ex. Numquam ea repellat possimus a, labore fugit
                    quaerat veniam inventore?
                  </div>

                  <button className="ps-live-btn">view live</button>
                </div>
              </div>
              <div className="ps-p-item">
                <div className="ps-pi-img">
                  <img
                    src="/assets/images/Screenshot 2024-04-16 034539.png"
                    alt=""
                  />
                </div>
                <div className="ps-pi-details">
                  <h4>web app development</h4>
                  <h3>Demo Portfolio</h3>

                  <div className="ps-pi-details-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Illum qui in at tempore possimus nemo hic debitis porro
                    accusamus ex. Numquam ea repellat possimus a, labore fugit
                    quaerat veniam inventore?
                  </div>

                  <button className="ps-live-btn">view live</button>
                </div>
              </div>
              <div className="ps-p-item">
                <div className="ps-pi-img">
                  <img
                    src="/assets/images/Screenshot 2024-04-16 034539.png"
                    alt=""
                  />
                </div>
                <div className="ps-pi-details">
                  <h4>web app development</h4>
                  <h3>Demo Portfolio</h3>

                  <div className="ps-pi-details-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Illum qui in at tempore possimus nemo hic debitis porro
                    accusamus ex. Numquam ea repellat possimus a, labore fugit
                    quaerat veniam inventore?
                  </div>

                  <button className="ps-live-btn">view live</button>
                </div>
              </div>

              <div id="ps-btn">
                <button
                  onClick={() => {
                    router.push("/projectShowPage");
                  }}
                >
                  <span>view all</span>
                </button>
              </div>
            </div>
          </div>

          {/* services section */}
          <div className="section" id="services-sec">
            <h1 id="ss-title">services</h1>
            <div id="ss-services">
              <div className="ss-s-item">
                <div className="ss-si-img">
                  <img src="/assets/icon/image-to-code-logo.png" alt="" />
                </div>
                <div className="ss-si-details">
                  <h3>Ui / Ux To Code</h3>
                  <p>
                    Bringing Designs to Life I translate your UI/UX designs into
                    clean, functional code, ensuring pixel-perfect
                    implementation across all devices. With expertise in
                    front-end technologies like HTML, CSS, and JavaScript, I
                    transform static mockups into dynamic, interactive
                    experiences
                  </p>
                </div>
              </div>
              <div className="ss-s-item">
                <div className="ss-si-img">
                  <img src="/assets/icon/frontend-logo.png" alt="" />
                </div>
                <div className="ss-si-details">
                  <h3>front-end development</h3>
                  <p>
                    Crafting Engaging User Experiences Using HTML, CSS, and
                    JavaScript, I design and develop intuitive interfaces that
                    captivate users and drive engagement. From responsive
                    layouts to interactive elements, I ensure your website looks
                    stunning and functions seamlessly across all devices.
                  </p>
                </div>
              </div>
              <div className="ss-s-item">
                <div className="ss-si-img">
                  <img src="/assets/icon/backend-logo.png" alt="" />
                </div>
                <div className="ss-si-details">
                  <h3>Back-end development</h3>
                  <p>
                    Behind-the-Scenes Magic I create the backbone of your
                    website, handling data management, server operations, and
                    performance optimization. Using cutting-edge technologies, I
                    ensure your website functions flawlessly, delivering a
                    seamless user experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* my skill section */}
          <div className="section" id="my-skills-sec">
            <h1 id="mss-title">my skills</h1>
            <div id="mss-skills">
              {/* my skill frontend section */}
              <div id="mss-fe-skills">
                <h2>Front-end</h2>
                <div className="mss-fe-skills-items">
                  <div className="mss-fe-si">
                    <h4>html</h4>
                    <div id="mss-fe-s-html-bar"></div>
                  </div>
                  <div className="mss-fe-si">
                    <h4>css</h4>
                    <div id="mss-fe-s-css-bar"></div>
                  </div>
                  <div className="mss-fe-si">
                    <h4>java script</h4>
                    <div id="mss-fe-s-js-bar"></div>
                  </div>
                  <div className="mss-fe-si">
                    <h4>react js</h4>
                    <div id="mss-fe-s-react-bar"></div>
                  </div>
                  <div className="mss-fe-si">
                    <h4>next js</h4>
                    <div id="mss-fe-s-next-bar"></div>
                  </div>
                  <div className="mss-fe-si">
                    <h4>Tailwind</h4>
                    <div id="mss-fe-s-tailwind-bar"></div>
                  </div>
                  {/* <div class="mss-fe-si">
                    <h4>Bootstarp</h4>
                    <div id="mss-fe-s-bootstrap-bar"></div>
                  </div> */}
                  <div className="mss-fe-si">
                    <h4>sass</h4>
                    <div id="mss-fe-s-sass-bar"></div>
                  </div>
                  {/* <div class="mss-fe-si">
                    <h4>less</h4>
                    <div id="mss-fe-s-less-bar"></div>
                  </div> */}
                </div>
              </div>
              {/* my skill backend section */}
              <div id="mss-be-skills">
                <h2>Back-end</h2>
                <div className="mss-be-skills-items">
                  <div id="mss-be-s-nodeJs" className="mss-be-si">
                    <h4>node js</h4>
                  </div>
                  <div id="mss-be-s-nodeJs" className="mss-be-si">
                    <h4>Express js</h4>
                  </div>
                  <div id="mss-be-s-nodeJs" className="mss-be-si">
                    <h4>Mongo db</h4>
                  </div>
                  <div id="mss-be-s-nodeJs" className="mss-be-si">
                    <h4>firebase</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* contact section */}
          <div className="section" id="contact-sec">
            <h1 id="cs-title">contact me</h1>
            <div className="contact-form">
              <form action="https://formspree.io/f/mnqerddw" method="POST">
                <input type="text" name="name" placeholder="name" required />
                <input type="email" name="email" placeholder="email" required />
                <input
                  type="text"
                  name="number"
                  placeholder="number(optional)"
                />
                <textarea
                  name="message"
                  placeholder="message"
                  required
                ></textarea>
                <button type="submit">
                  <span>send</span>
                </button>
              </form>
            </div>
          </div>
          <div className="section" id="second-footer">
            <div id="second-footer-item">
              <div id="sf-my-address">
                <h3>contact info</h3>
                <p>abuhurairakhan3128@gmail.com</p>
                <address>
                  Maheshpur, Jhenaidah <br />
                  Khulna Bangladesh 7340
                </address>
              </div>
              <div id="sf-social-media">
                <div id="sf-sm-my-name">
                  <h2>Abu Huraira Khan</h2>
                  <h4>Full Stack Developer</h4>
                </div>
                <div id="sf-sm-share">
                  <a id="sf-linkdin" href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </a>
                  <a id="sf-github" href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </a>
                  <a id="sf-twiter" href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                    </svg>
                  </a>
                  <a id="sf-youtube" href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* footer section */}
          <div className="section" id="footer">
            <p>
              &copy;2024 - <span id="footer-present-date"></span>{" "}
              abuhuraira-Khan | all rights reserved
            </p>
          </div>
        </main>
        {/* second footer section */}
      </div>
    </>
  );
};

export default Home;
