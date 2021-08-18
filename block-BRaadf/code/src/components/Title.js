  
import { useContext } from 'react';
import UserContext from './UserContext';

function Title({ text, isDarkMode }) {
  let isDarkMode = useContext(UserContext);
  return (
    <h2
      className={`heading ${
        isDarkMode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {text}
    </h2>
  );
}

export default Title;
