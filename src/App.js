import { useState, useEffect } from 'react';
import EmailEditor from './components/EmailEditor';
import EmailPreview from './components/EmailPreview';
import RawHtml from './components/RawHtml';
import EmailTemplater from './components/EmailTemplater';

const App = () => {
  const [htmlEmail, setHtmlEmail] = useState('');
  const [bodyTitle, setBodyTitle] = useState('');
  const [bodyImage, setBodyImage] = useState({ title: '', url: '' });
  const [bodyButton, setBodyButton] = useState({ text: '', url: '' });
  const [formattedEmail, setFormattedEmail] = useState('');

  useEffect(() => {
    setFormattedEmail(EmailTemplater(bodyTitle, bodyImage, htmlEmail));
  }, [htmlEmail]);

  const handleEmailTitleChange = (title) => {
    setBodyTitle(title);
  };

  const handleChangeImageTitle = (title) => {
    setBodyImage({ ...bodyImage, title });
  };

  const handleChangeImageUrl = (url) => {
    setBodyImage({ ...bodyImage, url });
  };

  const handleChangeButtonText = (text) => {
    setBodyButton({ ...bodyButton, text });
  };

  const handleChangeButtonUrl = (url) => {
    setBodyButton({ ...bodyButton, url });
  };

  // Add specific attributes to certain tags if we need to later
  // const [modifiedHtml, setModifiedHtml] = useState('');
  // useEffect(() => {
  //   setModifiedHtml(modifyHtml(htmlEmail));
  // }, [htmlEmail]);

  // const modifyHtml = (html) => {
  //   return html.replaceAll(
  //     '<p>',
  //     '<p style="margin: 0; font-size: 16px; text-align: justify; mso-line-height-alt: 24px;">'
  //   );
  // };

  return (
    <div className="App container mx-auto mt-4">
      <h1 className="text-center text-3xl py-4">ENB Builder</h1>
      <div className="mx-auto w-full h-min-screen grid grid-cols-2 gap-4">
        <EmailEditor
          htmlEmail={htmlEmail}
          setHtmlEmail={setHtmlEmail}
          bodyTitle={bodyTitle}
          bodyImage={bodyImage}
          handleEmailTitleChange={handleEmailTitleChange}
          handleChangeImageTitle={handleChangeImageTitle}
          handleChangeImageUrl={handleChangeImageUrl}
          bodyButton={bodyButton}
          handleChangeButtonText={handleChangeButtonText}
          handleChangeButtonUrl={handleChangeButtonUrl}
        />
        <EmailPreview htmlEmail={formattedEmail} />
        <RawHtml htmlEmail={formattedEmail} />
      </div>
    </div>
  );
};

export default App;
