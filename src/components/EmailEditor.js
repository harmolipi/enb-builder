import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import TitleEditor from './TitleEditor';
import BodyEditor from './BodyEditor';
import ImageEditor from './ImageEditor';
import ButtonLink from './ButtonLink';
import FeatureContainer from './FeatureContainer';

const EmailEditor = ({
  htmlEmail,
  setHtmlEmail,
  bodyTitle,
  handleEmailTitleChange,
  bodyImage,
  handleChangeImageTitle,
  handleChangeImageUrl,
  bodyButton,
  handleChangeButtonText,
  handleChangeButtonUrl,
  featureItems,
  handleFeatureItemTitle,
  handleFeatureItemDescription,
  handleFeatureItemImageTitle,
  handleFeatureItemImageUrl,
  handleFeatureItemButtonText,
  handleFeatureItemButtonUrl,
  addFeatureItem,
  removeFeatureItem,
  fullEditor,
  fullPreview,
  handleToggleFullEditor,
}) => {
  return (
    <div
      className={`container mx-auto h-96 overflow-scroll border border-slate-500 p-4 relative ${
        fullEditor ? 'col-span-2' : 'col-span-1'
      } ${fullPreview ? 'hidden' : ''}`}
      id="editor-container"
    >
      <button
        className="absolute right-3 top-3"
        onClick={handleToggleFullEditor}
      >
        <FontAwesomeIcon
          icon={faExpand}
          className={`relative text-xl ${
            fullEditor ? 'text-sky-700' : 'text-sky-500'
          }`}
        />
      </button>
      <TitleEditor
        bodyTitle={bodyTitle}
        handleEmailTitleChange={handleEmailTitleChange}
      />
      <hr />
      <ImageEditor
        bodyImage={bodyImage}
        handleChangeImageTitle={handleChangeImageTitle}
        handleChangeImageUrl={handleChangeImageUrl}
      />
      <hr />
      <BodyEditor htmlEmail={htmlEmail} setHtmlEmail={setHtmlEmail} />
      <hr />
      <ButtonLink
        bodyButton={bodyButton}
        handleChangeButtonText={handleChangeButtonText}
        handleChangeButtonUrl={handleChangeButtonUrl}
      />
      <hr />
      <FeatureContainer
        featureItems={featureItems}
        handleFeatureItemTitle={handleFeatureItemTitle}
        handleFeatureItemDescription={handleFeatureItemDescription}
        handleFeatureItemImageTitle={handleFeatureItemImageTitle}
        handleFeatureItemImageUrl={handleFeatureItemImageUrl}
        handleFeatureItemButtonText={handleFeatureItemButtonText}
        handleFeatureItemButtonUrl={handleFeatureItemButtonUrl}
        addFeatureItem={addFeatureItem}
        removeFeatureItem={removeFeatureItem}
      />
    </div>
  );
};

export default EmailEditor;
