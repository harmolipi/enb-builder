const ImageEditor = ({
  bodyImage,
  handleChangeImageTitle,
  handleChangeImageUrl,
}) => {
  return (
    <div className="container mx-auto my-3" id="image-editor-container">
      <h2 className="text-xl">Image</h2>
      <div className="pl-4">
        <label htmlFor="image-url-editor" className="text-lg text-gray-900">
          Image url
        </label>
        <input
          className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-gray-800"
          id="image-url-editor"
          type="url"
          value={bodyImage.url}
          onChange={(e) => handleChangeImageUrl(e.target.value)}
          placeholder="Enter the URL of your image here."
        ></input>
        <label htmlFor="image-title-editor" className="text-lg text-gray-900">
          Image title
        </label>
        <input
          className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-gray-800"
          id="image-title-editor"
          type="text"
          value={bodyImage.title}
          onChange={(e) => handleChangeImageTitle(e.target.value)}
          placeholder="Enter the title of your image here."
        ></input>
      </div>
    </div>
  );
};

export default ImageEditor;
