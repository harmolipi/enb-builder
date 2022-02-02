import TitleEditor from './TitleEditor';
import BodyEditor from './BodyEditor';
import ImageEditor from './ImageEditor';

const EmailEditor = ({
  htmlEmail,
  setHtmlEmail,
  emailTitle,
  handleEmailTitleChange,
  bodyImage,
  handleChangeImageTitle,
  handleChangeImageUrl,
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
    </div>
  );
};

export default EmailEditor;
