// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesDetails, onChangeImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesDetails

  const onClickImage = () => {
    onChangeImage(id)
  }

  return (
    <>
      <li>
        <button>
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className="thumbnail-image"
            onClick={onClickImage}
          />
        </button>
      </li>
    </>
  )
}

export default ThumbnailItem
