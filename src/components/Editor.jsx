import { IconEdit } from '@tabler/icons-react';
import Header from './Header';

const Editor = ({
  maximizeEditor,
  maximizePreview,
  handleChange,
  handleClick,
  markdown,
}) => {
  return (
    <div
      className={`"shadow-xl shadow-black" ${maximizePreview ? 'hidden' : ''}`}
    >
      <Header
        handleClick={handleClick}
        maximize={maximizeEditor}
        icon={<IconEdit className="absolute left-0" />}
        text={'Editor'}
      />
      <textarea
        name="markdown"
        id="markdown"
        cols="60"
        rows={`${maximizeEditor ? '24' : '20'}`}
        onChange={handleChange}
        value={markdown}
      />
    </div>
  );
};

export default Editor;
