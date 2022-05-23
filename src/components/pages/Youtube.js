import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import YoutubeCont from "../includes/YoutubeCont";
import Touch from "../layout/Touch";

function Youtube() {
  const [videos, setvidoes] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=heejin&key=AIzaSyDqDIdMNxJ2v4EmS61M0O5HMWUvO98Nffw",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <Header />
      <Contents>
        <YoutubeCont />
        <Touch />
      </Contents>
      <Footer />
    </>
  );
}

export default Youtube;
