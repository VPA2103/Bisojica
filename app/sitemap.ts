import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bisojica.vn',
      lastModified: new Date(),
    },
  ]
}