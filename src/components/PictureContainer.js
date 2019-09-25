import React from "react";

export default function PictureContainer(props) {
  const { title, date, url, explanation } = props;

  if (!title) {
    return (
      <div className="picture">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="picture">
      <h2>{title}</h2>
      <h3>{date}</h3>
      <img src={url} alt={title} />
      <p>{explanation}</p>
    </div>
  );
}
