import React from "react";
import {
  couple_image1,
  couple_image2,
  couple_image3,
  couple_image4,
} from "../../assets/images";
import { GalleryBox } from "../styles/GalleryBox";
import ScrollContainer from "react-indiana-drag-scroll";

export default function Gallery() {
  const images = [
    { path: couple_image4, top: 0, left: 0 },

    { path: couple_image2, top: 0, left: 200, height: 286 },
    { path: couple_image2, top: 0, left: 400, height: 286 },
    { path: couple_image4, top: 0, left: 600, height: 137 },
    { path: couple_image4, top: 0, left: 800, height: 137 },
    { path: couple_image1, top: 0, left: 1000, height: 286 },
    { path: couple_image2, top: 0, left: 1200, height: 286 },
    { path: couple_image4, top: 0, left: 1400, height: 137 },
    { path: couple_image1, top: 150, left: 0, height: 286 },
    { path: couple_image1, top: 150, left: 1400, height: 286 },
    { path: couple_image4, top: 147.5, left: 600, height: 137 },
    { path: couple_image3, top: 147.5, left: 800, height: 286 },
    { path: couple_image4, top: 442.5, left: 0, height: 137 },
    { path: couple_image4, top: 442.5, left: 800, height: 137 },
    { path: couple_image4, top: 442.5, left: 1400, height: 137 },
    { path: couple_image3, top: 295, left: 200, height: 286 },
    { path: couple_image3, top: 295, left: 600, height: 286 },
    { path: couple_image1, top: 295, left: 400, height: 286 },
    { path: couple_image2, top: 295, left: 1000, height: 286 },
    { path: couple_image3, top: 295, left: 1200, height: 286 },
  ];

  return (
    <GalleryBox className="spacerB">
      <h2 className="title pointColor">gallery</h2>
      <ScrollContainer className="scroll-container">
        <section className="flex flex-col relative gallery-container">
          <div style={{ paddingRight: "1rem" }}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image.path}
                alt={`Image ${index + 1}`}
                style={{
                  top: `${image.top}px`,
                  left: `${image.left}px`,
                  height: `${image.height}px`,
                }}
                className="w-full"
              />
            ))}
          </div>
        </section>
      </ScrollContainer>
    </GalleryBox>
  );
}
