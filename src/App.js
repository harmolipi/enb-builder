import { useState, useEffect } from 'react';
import EmailEditor from './components/EmailEditor';
import EmailPreview from './components/EmailPreview';
import RawHtml from './components/RawHtml';
import EmailTemplater from './components/EmailTemplater';

const App = () => {
  const [htmlEmail, setHtmlEmail] = useState('');
  const [emailTitle, setEmailTitle] = useState('');
  const [formattedEmail, setFormattedEmail] = useState('');

  useEffect(() => {
    setFormattedEmail(EmailTemplater(emailTitle, htmlEmail));
  }, [htmlEmail]);

  const handleHtmlEmailChange = (title) => {
    setEmailTitle(title);
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
          emailTitle={emailTitle}
          handleHtmlEmailChange={handleHtmlEmailChange}
        />
        <EmailPreview htmlEmail={formattedEmail} />
        <RawHtml htmlEmail={formattedEmail} />
      </div>
    </div>
  );
};

export default App;
