import React from "react";
import {
  couple_image1,
  couple_image2,
  couple_image3,
  couple_image1_thumbnail,
  couple_image2_thumbnail,
  couple_image3_thumbnail,
} from "../../assets/images";
import { GalleryBox } from "../styles";

const photos = [
  {
    src: couple_image1,
    width: 4,
    height: 3,
    border: "5px",
  },
  {
    src: couple_image1,
    width: 4,
    height: 3,
    border: "5px",
  },
  {
    src: couple_image1,
    width: 4,
    height: 3,
    border: "5px",
  },
];

export default function Gallery() {
  return (
    <GalleryBox>
      <h2 className="title pointColor">gallery</h2>
      <div className="gallery" photos={photos}></div>
    </GalleryBox>
  );
}
