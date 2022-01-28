import { useState } from 'react';
import EmailEditor from './components/EmailEditor';
import EmailPreview from './components/EmailPreview';
import RawHtml from './components/RawHtml';

const App = () => {
  const [htmlEmail, setHtmlEmail] = useState('');

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
        <EmailEditor htmlEmail={htmlEmail} setHtmlEmail={setHtmlEmail} />
        <EmailPreview htmlEmail={htmlEmail} />
        <RawHtml htmlEmail={htmlEmail} />
      </div>
    </div>
  );
};

export default App;
