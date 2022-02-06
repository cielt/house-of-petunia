import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ImageGalleryStyles from "../styles/ImageGalleryStyles"

const ImageFeed = () => {
  const imgData = useStaticQuery(graphql`
    query CloudinaryImages {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `)

  const clImages = imgData.allCloudinaryMedia.edges

  return (
    <ImageGalleryStyles className="image-gallery-area">
      <div className="image-gallery">
        {clImages.map((image, index) => (
          <div className="gallery-image-frame" key={`${index}-cl`}>
            <img className="gallery-image" src={image.node.secure_url} alt="" />
          </div>
        ))}
      </div>
    </ImageGalleryStyles>
  )
}

export default ImageFeed
