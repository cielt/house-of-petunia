import styled from "styled-components"

const ImageGalleryStyles = styled.div`
  .image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-gap: $(({theme}) => theme.spacing.space2);
  }

  .gallery-image-frame {
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export default ImageGalleryStyles
