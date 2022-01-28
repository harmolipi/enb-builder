import { useState } from 'react';

const App = () => {
  const [emailBody, setEmailBody] = useState('');
  const [htmlEmail, setHtmlEmail] = useState('<strong>Hello</strong>');

  return (
    <div className="App container mx-auto mt-4">
      <h1 className="text-center text-3xl py-4">ENB Builder</h1>
      <div className="mx-auto w-full h-min-screen grid grid-cols-2 gap-4">
        <div
          className="container mx-auto min-h-full h-96"
          id="editor-container"
        >
          <h2>Editor</h2>
          <textarea
            id="editor"
            className="font-mono w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            placeholder="Enter the body of your lead article here."
            onChange={''}
            // value={emailBody}
          />
        </div>
        <div className="container mx-auto h-2/6" id="preview-container">
          <h2>Preview</h2>
          <div
            id="preview"
            className="prose w-full h-96 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none overflow-scroll"
            rows="6"
            dangerouslySetInnerHTML={{ __html: htmlEmail }}
          ></div>
        </div>
        <div className="container mx-auto col-span-2" id="raw-html">
          <h2>Raw HTML</h2>
          <textarea
            id="raw-html-textarea"
            className="font-mono w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            value={htmlEmail}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
