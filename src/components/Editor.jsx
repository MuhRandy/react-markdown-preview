import {
  IconEdit,
  IconArrowsMaximize,
  IconArrowsDiagonalMinimize2,
} from '@tabler/icons-react';

const Editor = ({
  maximizeEditor,
  maximizePreview,
  handleChange,
  handleClick,
}) => {
  return (
    <div
      className={`"shadow-xl shadow-black" ${maximizePreview ? 'hidden' : ''}`}
    >
      <div className="bg-black text-white text-center flex justify-center relative">
        <IconEdit className="absolute left-0" />
        Editor
        <button className="absolute right-0" onClick={handleClick}>
          <IconArrowsMaximize className={`${maximizeEditor ? 'hidden' : ''}`} />
          <IconArrowsDiagonalMinimize2
            className={`${maximizeEditor ? '' : 'hidden'}`}
          />
        </button>
      </div>
      <textarea
        name="markdown"
        id="markdown"
        cols="60"
        rows={`${maximizeEditor ? '24' : '20'}`}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Editor;
