import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import MainCont from "../includes/MainCont";
import Loading from "../includes/Loading";
import axios from "axios";
import { gsap } from "gsap";

class Main extends React.Component {
  state = {
    isLoading: true,
    main: [],
  };
  mainAnimation = () => {
    setTimeout(() => {
      gsap.to("#header", { duration: 0.8, top: 0 });
      gsap.to(".main__inner > div", {
        duration: 1.0,
        y: 0,
        delay: 0.7,
        opacity: 1,
        stagger: 0.25,
        ease: "power4.out",
      });
      // gsap.to(".main__inner div:nth-child(2)", {
      //   duration: 1.0,
      //   top: 0,
      //   delay: 0.9,
      //   opacity: 1,
      // });
      // gsap.to(".main__inner div:nth-child(3)", {
      //   duration: 1.0,
      //   top: 0,
      //   delay: 1.0,
      //   opacity: 1,
      // });
      // gsap.to(".main__inner div:nth-child(4)", {
      //   duration: 1.0,
      //   top: 0,
      //   delay: 1.1,
      //   opacity: 1,
      // });
      gsap.to("#footer", { duration: 0.8, bottom: 0, delay: 0.2 });
    }, 10);
  };
  getmain = async () => {
    const {
      data: {
        data: { main },
      },
    } = await axios.get(
      "https://webstoryboy.github.io/dothome1/portfolio.json"
    );

    // console.log(main);
    setTimeout(() => {
      console.log("두번째 시작");
    });
    this.setState({
      isLoading: false,
      main: main,
    });
    this.mainAnimation({});
  };

  componentDidMount() {
    setTimeout(() => {
      console.log("첫번째 시작");
      document.getElementById("loading").classList.remove("loading__active");
      this.getmain();
    }, 2000);
  }
  render() {
    const { isLoading, main } = this.state;
    console.log(main);
    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Contents>
              <MainCont />
            </Contents>
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default Main;
