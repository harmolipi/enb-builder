import TitleEditor from './TitleEditor';
import BodyEditor from './BodyEditor';
import ImageEditor from './ImageEditor';
import ButtonLink from './ButtonLink';

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
}) => {
  return (
    <div
      className="container mx-auto h-96 overflow-scroll border p-4"
      id="editor-container"
    >
      <TitleEditor title={emailTitle} onChange={handleEmailTitleChange} />
      <ImageEditor
        bodyImage={bodyImage}
        handleChangeImageTitle={handleChangeImageTitle}
        handleChangeImageUrl={handleChangeImageUrl}
      />
      <BodyEditor htmlEmail={htmlEmail} setHtmlEmail={setHtmlEmail} />
      <ButtonLink
        bodyButton={bodyButton}
        handleChangeButtonText={handleChangeButtonText}
        handleChangeButtonUrl={handleChangeButtonUrl}
      />
    </div>
  );
};

export default EmailEditor;
