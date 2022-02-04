const ButtonLink = ({
  bodyButton = { text: '', url: '' },
  handleChangeButtonUrl,
  handleChangeButtonText,
}) => {
  return (
    <div className="container mx-auto pb-3" id="title-editor-container">
      <h2 className="text-xl">Button</h2>
      <div className="pl-4">
        <label htmlFor="button-url-editor" className="text-lg text-gray-900">
          Button URL
        </label>
        <input
          className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-gray-800"
          id="button-url-editor"
          value={bodyButton.url}
          onChange={(e) => handleChangeButtonUrl(e.target.value)}
          placeholder="Enter the URL of your button here."
        ></input>
        <label htmlFor="button-text-editor" className="text-lg text-gray-900">
          Button text
        </label>
        <input
          className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-gray-800"
          id="button-text-editor"
          value={bodyButton.text}
          onChange={(e) => handleChangeButtonText(e.target.value)}
          placeholder="Enter the text of your button here."
        ></input>
      </div>
    </div>
  );
};

export default ButtonLink;
