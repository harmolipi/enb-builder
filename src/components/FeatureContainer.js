import { uid } from 'react-uid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import FeatureItemEditor from './FeatureItemEditor';

const FeatureContainer = ({
  featureItems,
  addFeatureItem,
  removeFeatureItem,
  handleFeatureItemTitle,
  handleFeatureItemDescription,
  handleFeatureItemImageTitle,
  handleFeatureItemImageUrl,
}) => {
  const featureItemFields = featureItems.map((item, index) => {
    return (
      <FeatureItemEditor
        key={uid(item)}
        index={index}
        item={item}
        handleFeatureItemTitle={handleFeatureItemTitle}
        handleFeatureItemDescription={handleFeatureItemDescription}
        handleFeatureItemImageTitle={handleFeatureItemImageTitle}
        handleFeatureItemImageUrl={handleFeatureItemImageUrl}
        removeFeatureItem={removeFeatureItem}
      />
    );
  });

  return (
    // <div className="feature-container">
    //   {featureItems.map((item, i) => (
    //     <div className="feature-item" key={i}>
    //       <div className="feature-item-image">
    //         <img src={item.image.url} alt={item.image.title} />
    //       </div>
    //       <div className="feature-item-content">
    //         <h3>{item.title}</h3>
    //         <p>{item.description}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="feature-container">
      <h2 className="text-xl">Feature items:</h2>
      {featureItemFields}
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
