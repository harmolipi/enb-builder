import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../styles/EmailEditor.css';

const EmailEditor = ({ htmlEmail, setHtmlEmail }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      [{ color: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'color',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  return (
    <div className="container mx-auto h-96" id="editor-container">
      <h2>Editor</h2>
      <ReactQuill
        className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        theme="snow"
        modules={modules}
        formats={formats}
        value={htmlEmail}
        onChange={setHtmlEmail}
        placeholder="Enter the body of your lead article here."
      ></ReactQuill>
    </div>
  );
};

export default EmailEditor;
