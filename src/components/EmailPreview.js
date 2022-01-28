const EmailPreview = ({ htmlEmail }) => {
  return (
    <div className="container mx-auto min-h-full h-auto" id="preview-container">
      <h2>Preview</h2>
      <div
        id="preview"
        className="prose w-full h-96 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none overflow-scroll"
        rows="6"
        dangerouslySetInnerHTML={{ __html: htmlEmail }}
      ></div>
    </div>
  );
};

export default EmailPreview;
