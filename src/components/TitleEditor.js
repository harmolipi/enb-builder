const TitleEditor = ({ title, onChange }) => {
  return (
    <div className="container mx-auto pb-3" id="title-editor-container">
      <label for="title-editor">Title</label>
      <input
        className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        id="title-editor"
        theme="snow"
        value={title}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter the title of your lead article here."
      ></input>
    </div>
  );
};

export default TitleEditor;