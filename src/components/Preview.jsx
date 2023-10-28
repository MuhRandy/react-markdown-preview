import {
  IconBlockquote,
  IconArrowsMaximize,
  IconArrowsDiagonalMinimize2,
} from '@tabler/icons-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Preview = ({
  maximizeEditor,
  maximizePreview,
  markdown,
  handleClick,
}) => {
  return (
    <div
      className={`min-w-[800px] shadow-lg shadow-black ${
        maximizeEditor ? 'hidden' : ''
      }`}
    >
      <div className="bg-black text-white text-center flex justify-center relative">
        <IconBlockquote className="absolute left-0" />
        Preview
        <button className="absolute right-0" onClick={handleClick}>
          <IconArrowsMaximize
            className={`${maximizePreview ? 'hidden' : ''}`}
          />
          <IconArrowsDiagonalMinimize2
            className={`${maximizePreview ? '' : 'hidden'}`}
          />
        </button>
      </div>
      <Markdown
        className="prose max-w-[800px] prose-invert prose-headings:border-b-2 bg-slate-700 px-10 py-5"
        remarkPlugins={[remarkGfm]}
        children={`${markdown}`}
      />
    </div>
  );
};

export default Preview;
