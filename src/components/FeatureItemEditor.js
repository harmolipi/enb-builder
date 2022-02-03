import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const FeatureItemEditor = ({
  index,
  item,
  handleFeatureItemTitle,
  handleFeatureItemDescription,
  handleFeatureItemImageTitle,
  handleFeatureItemImageUrl,
  removeFeatureItem,
}) => {
  return (
    <div className="container mx-auto my-3" id={`feature-item-editor-${index}`}>
      <span>
        <h3 className="text-lg inline-block">Feature item {index + 1}</h3>
        <button
          onClick={() => removeFeatureItem(index)}
          className="text-red-400 hover:text-red-600 text-2xl font-bold py-2 px-4"
        >
          <FontAwesomeIcon icon={faMinusCircle} />
        </button>
      </span>
      <div className="pl-4">
        <label
          htmlFor={`feature-title-editor-${index}`}
          className="text-lg text-gray-900"
        >
          Title
        </label>
        <input
          className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          id={`feature-title-editor-${index}`}
          value={item.title}
          onChange={(e) => handleFeatureItemTitle(index, e.target.value)}
          placeholder="Enter the title of your feature item here."
        ></input>
        <label
          htmlFor={`feature-description-editor-${index}`}
          className="text-lg text-gray-900"
        >
          Description
        </label>
        <input
          className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          id={`feature-description-editor-${index}`}
          value={item.description}
          onChange={(e) => handleFeatureItemDescription(index, e.target.value)}
          placeholder="Enter the description of your feature item here."
        ></input>
        <label
          htmlFor={`feature-image-title-editor-${index}`}
          className="text-lg text-gray-900"
        >
          Image title
        </label>
        <input
          className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          id={`feature-image-title-editor-${index}`}
          value={item.image.title}
          onChange={(e) => handleFeatureItemImageTitle(index, e.target.value)}
          placeholder="Enter the title of your feature item's image here."
        ></input>
        <label
          htmlFor={`feature-image-url-editor-${index}`}
          className="text-lg text-gray-900"
        >
          Image URL
        </label>
        <input
          className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          id={`feature-image-url-editor-${index}`}
          value={item.image.url}
          onChange={(e) => handleFeatureItemImageUrl(index, e.target.value)}
          placeholder="Enter the url of your feature item's image here."
        ></input>
      </div>
    </div>
  );
};

export default FeatureItemEditor;
