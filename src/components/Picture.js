import React, { useState, useEffect } from "react";
import axios from "axios";
import PictureContainer from "./PictureContainer";

export default function Picture() {
  const [picture, setPicture] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=k43h3hTGYuHpf7C4xmufhicbHCXcEtb2cTfaPSs3"
      )
      .then(result => {
        console.log("result.data", result.data);
        setPicture(result.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  const { title, date, url, explanation } = picture;

  return (
    <PictureContainer
      title={title}
      date={date}
      url={url}
      explanation={explanation}
    />
  );
}
