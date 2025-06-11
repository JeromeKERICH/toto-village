import React from 'react'
import GalleryOverview from '../components/gallery/GalleryOver'
import { ImageGalleryWithFilters } from '../components/gallery/GalleryFeathured'


const GalleryPage = () => {
  return (
    <div>
      <GalleryOverview/>
      <ImageGalleryWithFilters/>
    </div>
  )
}

export default GalleryPage
