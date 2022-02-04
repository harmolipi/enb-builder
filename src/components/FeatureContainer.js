import { uid } from 'react-uid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const FeatureContainer = ({
  featureItems,
  addFeatureItem,
  removeFeatureItem,
  handleFeatureItemTitle,
  handleFeatureItemDescription,
  handleFeatureItemImageTitle,
  handleFeatureItemImageUrl,
}) => {
  const featureItemsList = featureItems.map((item, index) => {
    return (
      <div
        className="container mx-auto my-3"
        id={`feature-item-editor-${index}`}
        key={uid(index)}
      >
        <span>
          <h3 className="text-lg inline-block">Feature item {index + 1}</h3>
          <button
            onClick={() => removeFeatureItem(index)}
            className="text-red-400 hover:text-red-600 text-2xl font-bold py-2 px-4 relative inset-y-0.5"
          >
            <FontAwesomeIcon
              icon={faMinusCircle}
              className="relative inset-x-0.5"
            />
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
            key={`feature-title-editor-${index}`}
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
            key={`feature-description-editor-${index}`}
            value={item.description}
            onChange={(e) =>
              handleFeatureItemDescription(index, e.target.value)
            }
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
            key={`feature-image-title-editor-${index}`}
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
            key={`feature-image-url-editor-${index}`}
            value={item.image.url}
            onChange={(e) => handleFeatureItemImageUrl(index, e.target.value)}
            placeholder="Enter the url of your feature item's image here."
          ></input>
        </div>
      </div>
    );
  });

  return (
    <div className="feature-container">
      <h2 className="text-xl">Feature items:</h2>
      {featureItemsList}
      <button
        onClick={addFeatureItem}
        className="text-blue-400 hover:text-blue-600 text-2xl font-bold py-2 px-4"
      >
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>
    </div>
  );
};

export default FeatureContainer;
