import React from "react";
import ImageGallery from "react-image-gallery";
import {
  couple_image1,
  couple_image2,
  couple_image3,
  couple_image1_thumbnail,
  couple_image2_thumbnail,
  couple_image3_thumbnail,
} from "../../assets/images";
import { GalleryBox } from "../styles";

const images = [
  {
    original: couple_image1,
    thumbnail: couple_image1_thumbnail,
  },
  {
    original: couple_image2,
    thumbnail: couple_image2_thumbnail,
  },
  {
    original: couple_image3,
    thumbnail: couple_image3_thumbnail,
  },
];

export default function Gallery() {
  return (
    <GalleryBox>
      <div className="title">우리의 아름다운 순간</div>
      <div className="gallery">
        <ImageGallery items={images} />
      </div>
    </GalleryBox>
  );
}
