import {
  IconArrowsMaximize,
  IconArrowsDiagonalMinimize2,
} from '@tabler/icons-react';

const Header = ({ handleClick, maximize, icon, text }) => {
  return (
    <div className="bg-black text-white text-center flex justify-center relative">
      {icon}
      {text}
      <button className="absolute right-0" onClick={handleClick}>
        <IconArrowsMaximize className={`${maximize ? 'hidden' : ''}`} />
        <IconArrowsDiagonalMinimize2
          className={`${maximize ? '' : 'hidden'}`}
        />
      </button>
    </div>
  );
};

export default Header;
