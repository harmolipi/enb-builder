const TitleEditor = ({ bodyTitle, handleEmailTitleChange }) => {
  return (
    <div className="container mx-auto pb-3" id="title-editor-container">
      <label htmlFor="title-editor" className="text-xl">
        Title
      </label>
      <input
        className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-gray-800"
        id="title-editor"
        key="title-editor"
        value={bodyTitle}
        onChange={(e) => handleEmailTitleChange(e.target.value)}
        placeholder="Enter the title here."
      ></input>
    </div>
  );
};

export default TitleEditor;
