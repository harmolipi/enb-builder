const TitleEditor = ({ title, onChange }) => {
  return (
    <div className="container mx-auto pb-3" id="title-editor-container">
      <label for="title-editor" className="text-xl">
        Title
      </label>
      <input
        className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        id="title-editor"
        value={title}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter the title here."
      ></input>
    </div>
  );
};

export default TitleEditor;
