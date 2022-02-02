const EmailPreview = ({ htmlEmail }) => {
  return (
    <div
      className="container mx-auto h-96 border p-4 overflow-hidden"
      id="preview-container"
    >
      <h2>Preview</h2>
      <div
        id="preview"
        className="unreset prose w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none overflow-scroll"
        rows="6"
        dangerouslySetInnerHTML={{ __html: htmlEmail }}
      ></div>
    </div>
  );
};

export default EmailPreview;
