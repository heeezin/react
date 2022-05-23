import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import AboutCont from "../includes/AboutCont";
import Title from "../layout/Title";
import Touch from "../layout/Touch";
import Loading from "../includes/Loading";
import axios from "axios";
import { gsap } from "gsap";

class About extends React.Component {
  state = {
    isLoading: true,
    about: [],
  };

  mainAnimation = () => {
    setTimeout(() => {
      gsap.to("#header", { duration: 0.8, top: 0 });
      gsap.to("#footer", { duration: 0.8, bottom: 0, delay: 0.2 });
      gsap.to(".cont__title strong", {
        duration: 0.8,
        y: 0,
        delay: 1,
        opacity: 1,
        ease: "power4.out",
      });
      gsap.to(".cont__title em", {
        duration: 0.8,
        y: 0,
        delay: 1.4,
        opacity: 1,
        ease: "power4.out",
      });
      gsap.to(".aboot__inner", {
        duration: 0.8,
        y: 0,
        delay: 1.8,
        opacity: 1,
        ease: "power4.out",
      });
    }, 10);
  };

  getabout = async () => {
    const {
      data: {
        data: { about },
      },
    } = await axios.get(
      "https://webstoryboy.github.io/dothome1/portfolio.json"
    );

    // console.log(about);
    setTimeout(() => {
      console.log("두번째 시작");
    });
    this.setState({
      isLoading: false,
      about: about,
    });
    this.mainAnimation({});
  };

  componentDidMount() {
    setTimeout(() => {
      console.log("첫번째 시작");
      document.getElementById("loading").classList.remove("loading__active");
      this.getabout();
    }, 2000);
  }

  render() {
    const { isLoading, about } = this.state;
    console.log(about);
    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Contents>
              <Title title={["about", "me"]} />
              <AboutCont />
              <Touch />
            </Contents>
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default About;
