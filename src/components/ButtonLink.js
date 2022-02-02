const ButtonLink = ({
  buttonLink = { text: '', url: '' },
  handleChangeButtonUrl,
  handleChangeButtonText,
}) => {
  return (
    <div className="container mx-auto pb-3" id="title-editor-container">
      <h2 className="text-xl">Button</h2>
      <div className="pl-4">
        <label for="button-url-editor" className="text-lg text-gray-900">
          Button URL
        </label>
        <input
          className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          id="button-url-editor"
          value={buttonLink.url}
          onChange={(e) => handleChangeButtonUrl(e.target.value)}
          placeholder="Enter the title of your image here."
        ></input>
        <label for="button-text-editor" className="text-lg text-gray-900">
          Button text
        </label>
        <input
          className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          id="button-text-editor"
          value={buttonLink.text}
          onChange={(e) => handleChangeButtonText(e.target.value)}
          placeholder="Enter the URL of your image here."
        ></input>
      </div>
    </div>
  );
};

export default ButtonLink;
