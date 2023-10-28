import { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import LayoutToggle from './components/LayoutToggle';

function App() {
  const [markdown, setMarkdown] = useState('');
  const [maximizeEditor, setMaximizeEditor] = useState(false);
  const [maximizePreview, setMaximizePreview] = useState(false);
  const [sideBySide, setSideBySide] = useState(false);

  const handleClickEditor = () => {
    setMaximizeEditor(!maximizeEditor);
  };

  const handleClickPreview = () => {
    setMaximizePreview(!maximizePreview);
  };

  const handleClickLayout = () => {
    setSideBySide(!sideBySide);
  };

  return (
    <div
      className={`flex min-w-[100vw] gap-5 py-4 relative ${
        sideBySide ? '' : 'flex-col items-center'
      }`}
    >
      <LayoutToggle
        maximizeEditor={maximizeEditor}
        maximizePreview={maximizePreview}
        sideBySide={sideBySide}
        handleClick={handleClickLayout}
      />
      <Editor
        maximizeEditor={maximizeEditor}
        maximizePreview={maximizePreview}
        handleChange={(e) => {
          setMarkdown(e.target.value);
        }}
        handleClick={handleClickEditor}
      />
      <Preview
        maximizeEditor={maximizeEditor}
        maximizePreview={maximizePreview}
        markdown={markdown}
        handleClick={handleClickPreview}
      />
    </div>
  );
}

export default App;
