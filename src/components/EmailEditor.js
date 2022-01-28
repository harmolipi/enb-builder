const EmailEditor = () => {
  return (
    <div className="container mx-auto min-h-full h-96" id="editor-container">
      <h2>Editor</h2>
      <textarea
        id="editor"
        className="font-mono w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        placeholder="Enter the body of your lead article here."
        onChange={''}
        // value={emailBody}
      />
    </div>
  );
};

export default EmailEditor;
