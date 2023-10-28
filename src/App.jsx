import { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import LayoutToggle from './components/LayoutToggle';

function App() {
  const [markdown, setMarkdown] = useState(
    '# Welcome to my React Markdown Previewer!\n\n' +
      '## This is a sub-heading...\n\n' +
      "### And here's some other cool stuff:\n\n" +
      'Heres some code, `<div></div>`, between 2 backticks.\n\n' +
      '````\n' +
      '// this is multi-line code:\n\n' +
      'function anotherExample(firstLine, lastLine) {\n' +
      "  if (firstLine == '```' && lastLine == '```') {\n" +
      '    return multiLineCode;\n' +
      '  }\n' +
      '}\n' +
      '````\n\n' +
      'You can also make text **bold**... whoa!\n' +
      'Or _italic_.\n' +
      'Or... wait for it... **_both!_** \n' +
      'And feel free to go crazy ~~crossing stuff out~~.\n\n' +
      "There's also [links](https://www.freecodecamp.org), and\n\n" +
      '> Block Quotes!\n\n' +
      'And if you want to get really crazy, even tables:\n\n' +
      '| Wild Header      | Crazy Header    | Another Header?    |\n' +
      '| ---------------- | --------------- | ------------------ |\n' +
      '| Your content can | be here, and it | can be here....    |\n' +
      '| And here.        | Okay.           | I think we get it. |\n\n' +
      '- And of course there are lists.\n' +
      '  - Some are bulleted.\n' +
      '    - With different indentation levels.\n' +
      '      - That look like this.\n\n' +
      '1. And there are numbered lists too.\n' +
      '1. Use just 1s if you want!\n' +
      "1. And last but not least, let's not forget embedded images:\n\n" +
      '![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)'
  );
  const [maximizeEditor, setMaximizeEditor] = useState(false);
  const [maximizePreview, setMaximizePreview] = useState(false);
  const [sideBySide, setSideBySide] = useState(false);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

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
        handleChange={handleChange}
        handleClick={handleClickEditor}
        markdown={markdown}
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
