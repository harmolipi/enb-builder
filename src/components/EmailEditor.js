import TitleEditor from './TitleEditor';
import BodyEditor from './BodyEditor';
import ImageEditor from './ImageEditor';
import ButtonLink from './ButtonLink';
import FeatureContainer from './FeatureContainer';

const EmailEditor = ({
  htmlEmail,
  setHtmlEmail,
  emailTitle,
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
}) => {
  return (
    <div
      className="container mx-auto h-96 overflow-scroll border border-slate-500 p-4"
      id="editor-container"
    >
      <TitleEditor title={emailTitle} onChange={handleEmailTitleChange} />
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
