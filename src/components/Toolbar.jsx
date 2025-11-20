import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBold, faItalic, faHeading, faUnderline, 
  faSuperscript, faSubscript, faStrikethrough, faListUl, 
  faListOl, faCode, faQuoteRight, faLink, faImage
} from '@fortawesome/free-solid-svg-icons';

const Toolbar = () => {
  return (
    <div id="toolbar" className="tool-bar">
      <button className="ql-bold" title="Bold">
        <FontAwesomeIcon icon={faBold} />
      </button>
      <button className="ql-italic" title="Italic">
        <FontAwesomeIcon icon={faItalic} />
      </button>

      <button className="ql-header" value="1" title="Heading">
        <FontAwesomeIcon icon={faHeading} />
      </button>
      
      <button className="ql-underline" title="Underline">
        <FontAwesomeIcon icon={faUnderline} />
      </button>
      
      <button className="ql-script" value="super" title="Superscript">
        <FontAwesomeIcon icon={faSuperscript} />
      </button>
      <button className="ql-script" value="sub" title="Subscript">
        <FontAwesomeIcon icon={faSubscript} />
      </button>
      
      <button className="ql-strike" title="Strikethrough">
        <FontAwesomeIcon icon={faStrikethrough} />
      </button>
      
      <button className="ql-list" value="bullet" title="Bulleted List">
        <FontAwesomeIcon icon={faListUl} />
      </button>
      <button className="ql-list" value="ordered" title="Ordered List">
        <FontAwesomeIcon icon={faListOl} />
      </button>
      
      <button className="ql-code-block" title="Code Block">
        <FontAwesomeIcon icon={faCode} />
      </button>
      
      <button className="ql-blockquote" title="Quote">
        <FontAwesomeIcon icon={faQuoteRight} />
      </button>
      
      <button className="ql-link" title="Link">
        <FontAwesomeIcon icon={faLink} />
      </button>
      
      <button className="ql-image" title="Image">
        <FontAwesomeIcon icon={faImage} />
      </button>
    </div>
  );
};

export default Toolbar;