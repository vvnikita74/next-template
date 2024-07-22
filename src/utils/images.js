export default function getImageUrl(image) {
	/*
    TODO: 
      Implement replacement with placeholder if the object is empty
      Placeholder is a local image.
      Placeholder url is a parameter
  */
	/*
    TODO: 
      Getting base url from .env
  */
	return `http://localhost:1337${image.data.attributes.url}`
}
