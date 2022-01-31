import TitleEditor from './TitleEditor';
import BodyEditor from './BodyEditor';

const EmailEditor = ({
  htmlEmail,
  setHtmlEmail,
  emailTitle,
  handleHtmlEmailChange,
}) => {
  return (
    <div
      className="container mx-auto h-96 overflow-scroll border p-4"
      id="editor-container"
    >
      <TitleEditor title={emailTitle} onChange={handleHtmlEmailChange} />
      <BodyEditor htmlEmail={htmlEmail} setHtmlEmail={setHtmlEmail} />
    </div>
  );
};

export default EmailEditor;
