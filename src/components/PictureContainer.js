import React from "react";
import styled from "styled-components";

const PictureDiv = styled.div`
  border-top: 1px solid black;
`;

const ParagraphDiv = styled.div`
  width: 830px;
  margin: 2.5% auto;
  text-align: left;

  @media (max-width: 900px) {
    width: 90%;
    margin-left: 6%;
    margin-right: 6%;
  }
`;

const LoadingDiv = styled.div`
  margin-top: 20%;
`;

const ImgDiv = styled.div`
  margin: 0 auto;
  padding: 0 5%;
  max-width: 830px;
`;

const ResponsiveImg = styled.img`
  min-width: 100%;
  width: 100%;
`;

export default function PictureContainer(props) {
  const { title, date, url, explanation } = props;

  if (!title) {
    return (
      <PictureDiv>
        <LoadingDiv>
          <h2>Loading...</h2>
        </LoadingDiv>
      </PictureDiv>
    );
  }

  return (
    <PictureDiv>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <ImgDiv>
        <ResponsiveImg src={url} alt={title} />
      </ImgDiv>
      <ParagraphDiv>{explanation}</ParagraphDiv>
    </PictureDiv>
  );
}
