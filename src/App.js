import { useState } from 'react';
import EmailEditor from './components/EmailEditor';
import EmailPreview from './components/EmailPreview';
import RawHtml from './components/RawHtml';

const App = () => {
  const [emailBody, setEmailBody] = useState('');
  const [htmlEmail, setHtmlEmail] = useState('<strong>Hello</strong>');

  return (
    <div className="App container mx-auto mt-4">
      <h1 className="text-center text-3xl py-4">ENB Builder</h1>
      <div className="mx-auto w-full h-min-screen grid grid-cols-2 gap-4">
        <EmailEditor />
        <EmailPreview htmlEmail={htmlEmail} />
        <RawHtml htmlEmail={htmlEmail} />
      </div>
    </div>
  );
};

export default App;
