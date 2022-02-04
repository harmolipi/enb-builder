import { CopyBlock, dracula } from 'react-code-blocks';

const RawHtml = ({ htmlEmail }) => {
  return (
    <div
      className="container mx-auto mt-5 col-span-2 h-32 overflow-scroll rounded-md"
      id="raw-html"
    >
      <CopyBlock
        id="raw-html-textarea"
        text={htmlEmail}
        language="html"
        theme={dracula}
      />
    </div>
  );
};

export default RawHtml;
