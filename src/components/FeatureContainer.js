import { uid } from 'react-uid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const FeatureContainer = ({
  featureItems,
  addFeatureItem,
  removeFeatureItem,
  handleFeatureItemTitle,
  handleFeatureItemDescription,
  handleFeatureItemImageTitle,
  handleFeatureItemImageUrl,
  handleFeatureItemButtonText,
  handleFeatureItemButtonUrl,
}) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      [{ color: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'color',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

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
            className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-gray-800"
            id={`feature-title-editor-${index}`}
            key={`feature-title-editor-${index}`}
            type="text"
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
          <ReactQuill
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            id={`feature-description-editor-${index}`}
            key={`feature-description-editor-${index}`}
            theme="snow"
            modules={modules}
            formats={formats}
            value={item.description}
            onChange={(e) => handleFeatureItemDescription(e, index)}
            placeholder="Enter the description of your feature item here."
          ></ReactQuill>
          <label
            htmlFor={`feature-image-title-editor-${index}`}
            className="text-lg text-gray-900"
          >
            Image title
          </label>
          <input
            className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-gray-800"
            id={`feature-image-title-editor-${index}`}
            key={`feature-image-title-editor-${index}`}
            type="text"
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
            className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-gray-800"
            id={`feature-image-url-editor-${index}`}
            key={`feature-image-url-editor-${index}`}
            type="url"
            value={item.image.url}
            onChange={(e) => handleFeatureItemImageUrl(index, e.target.value)}
            placeholder="Enter the url of your feature item's image here."
          ></input>
          <label
            htmlFor={`feature-button-text-editor-${index}`}
            className="text-lg text-gray-900"
          >
            Button text
          </label>
          <input
            className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-gray-800"
            id={`feature-button-text-editor-${index}`}
            key={`feature-button-text-editor-${index}`}
            type="text"
            value={item.button.text}
            onChange={(e) => handleFeatureItemButtonText(index, e.target.value)}
            placeholder="Enter the text of your feature item's button here."
          ></input>
          <label
            htmlFor={`feature-button-url-editor-${index}`}
            className="text-lg text-gray-900"
          >
            Button URL
          </label>
          <input
            className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-gray-800 transition-colors"
            id={`feature-button-url-editor-${index}`}
            key={`feature-button-url-editor-${index}`}
            type="url"
            value={item.button.url}
            onChange={(e) => handleFeatureItemButtonUrl(index, e.target.value)}
            placeholder="Enter the url of your feature item's button here."
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
