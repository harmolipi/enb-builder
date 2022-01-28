const RawHtml = ({ htmlEmail }) => {
  return (
    <div className="container mx-auto col-span-2" id="raw-html">
      <h2>Raw HTML</h2>
      <textarea
        id="raw-html-textarea"
        className="font-mono w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        value={htmlEmail}
      />
    </div>
  );
};

export default RawHtml;
