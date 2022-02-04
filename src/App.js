import { useState } from 'react';
import EmailEditor from './components/EmailEditor';
import EmailPreview from './components/EmailPreview';
import RawHtml from './components/RawHtml';

const App = () => {
  const [htmlEmail, setHtmlEmail] = useState('');
  const [bodyTitle, setBodyTitle] = useState('');
  const [bodyImage, setBodyImage] = useState({ title: '', url: '' });
  const [bodyButton, setBodyButton] = useState({ text: '', url: '' });
  const [formattedEmail, setFormattedEmail] = useState('');
  const [featureItems, setFeatureItems] = useState([]);
  const [fullEditor, setFullEditor] = useState(false);
  const [fullPreview, setFullPreview] = useState(false);

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

  const addFeatureItem = () => {
    setFeatureItems([
      ...featureItems,
      {
        title: '',
        description: '',
        image: { title: '', url: '' },
        button: { text: '', url: '' },
      },
    ]);
  };

  const handleFeatureItemTitle = (index, title) => {
    setFeatureItems(
      featureItems.map((item, i) => {
        if (i === index) {
          return { ...item, title };
        }
        return item;
      })
    );
  };

  const handleFeatureItemDescription = (description, index) => {
    setFeatureItems(
      featureItems.map((item, i) => {
        if (i === index) {
          return { ...item, description };
        }
        return item;
      })
    );
  };

  const handleFeatureItemImageTitle = (index, title) => {
    setFeatureItems(
      featureItems.map((item, i) => {
        if (i === index) {
          return { ...item, image: { ...item.image, title } };
        }
        return item;
      })
    );
  };

  const handleFeatureItemImageUrl = (index, url) => {
    setFeatureItems(
      featureItems.map((item, i) => {
        if (i === index) {
          return { ...item, image: { ...item.image, url } };
        }
        return item;
      })
    );
  };

  const handleFeatureItemButtonText = (index, text) => {
    setFeatureItems(
      featureItems.map((item, i) => {
        if (i === index) {
          return { ...item, button: { ...item.button, text } };
        }
        return item;
      })
    );
  };

  const handleFeatureItemButtonUrl = (index, url) => {
    setFeatureItems(
      featureItems.map((item, i) => {
        if (i === index) {
          return { ...item, button: { ...item.button, url } };
        }
        return item;
      })
    );
  };

  const removeFeatureItem = (index) => {
    setFeatureItems(featureItems.filter((item, i) => i !== index));
  };

  const handleToggleFullEditor = () => {
    setFullPreview(false);
    setFullEditor(!fullEditor);
  };

  const handleToggleFullPreview = () => {
    setFullEditor(false);
    setFullPreview(!fullPreview);
  };

  return (
    <div className="App w-full mt-4">
      <h1 className="text-center text-3xl py-4">ENB Builder</h1>
      <div className="mx-auto w-11/12 h-min-screen grid grid-cols-2 gap-4">
        {!fullPreview ? (
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
            addFeatureItem={addFeatureItem}
            removeFeatureItem={removeFeatureItem}
            handleFeatureItemTitle={handleFeatureItemTitle}
            handleFeatureItemDescription={handleFeatureItemDescription}
            handleFeatureItemImageTitle={handleFeatureItemImageTitle}
            handleFeatureItemImageUrl={handleFeatureItemImageUrl}
            handleFeatureItemButtonText={handleFeatureItemButtonText}
            handleFeatureItemButtonUrl={handleFeatureItemButtonUrl}
            featureItems={featureItems}
            fullEditor={fullEditor}
            fullPreview={fullPreview}
            handleToggleFullEditor={handleToggleFullEditor}
            handleToggleFullPreview={handleToggleFullPreview}
          />
        ) : (
          () => null
        )}
        {!fullEditor ? (
          <EmailPreview
            bodyTitle={bodyTitle}
            bodyImage={bodyImage}
            htmlEmail={htmlEmail}
            bodyButton={bodyButton}
            featureItems={featureItems}
            formattedEmail={formattedEmail}
            setEmail={(emailContents) => setFormattedEmail(emailContents)}
            fullEditor={fullEditor}
            fullPreview={fullPreview}
            handleToggleFullEditor={handleToggleFullEditor}
            handleToggleFullPreview={handleToggleFullPreview}
          />
        ) : (
          () => null
        )}

        <RawHtml htmlEmail={formattedEmail} />
      </div>
    </div>
  );
};

export default App;
