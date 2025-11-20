import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRotate, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import SessionTimer from '../components/SessionTimer';
import UserProfile from '../components/UserProfile';
import Toolbar from '../components/Toolbar';
import Chatbot from '../components/Chatbot';

export default function Workspace() {
  const [text, setText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [editorReady, setEditorReady] = useState(false);

  const modules = useMemo(() => ({
    toolbar: {
      container: "#toolbar",
    }
  }), []);

  const formats = [
    "header", "bold", "italic", "underline", "strike", "script",
    "blockquote", "list", "bullet", "indent", "link", "image", "code-block"
  ];

  useEffect(() => {
    const checkToolbar = setInterval(() => {
      const toolbarElement = document.getElementById('toolbar');
      if (toolbarElement) {
        setEditorReady(true);
        clearInterval(checkToolbar);
      }
    }, 100);

    const safetyTimeout = setTimeout(() => clearInterval(checkToolbar), 5000);

    return () => {
      clearInterval(checkToolbar);
      clearTimeout(safetyTimeout);
    };
  }, []);

  return (
    <div className="App">
      <style>{`

        .quill {
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .ql-container {
            flex: 1;
            font-family: "JetBrains Mono", monospace;
            font-size: 16px;
            border: none !important;
            overflow: hidden;
        }

        .ql-editor {
            height: 100%;
            background-color: rgba(255, 255, 255, 0);
            color: white;
            padding: 20px;
            overflow-y: auto;
        }

        .ql-container.ql-snow {
            border: none !important;
        }

        .ql-editor.ql-blank::before {
        color: white !important;
        opacity: 0.6;
        font-size: 16px;
        font-style: normal !important;
        }

        #toolbar {
            border-bottom: 1px solid white;
            display: flex;
            gap: 5px;
            padding: 10px;
            flex-wrap: wrap;
        }

        #toolbar button {
            background: none;
            border: none;
            cursor: pointer;
            color: white;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: color 0.3s;
        }

        #toolbar button:hover {
            color: #ab20fd;
        }

        #toolbar {
            border-bottom: 1px solid white;
            display: flex;
            gap: 5px;
            padding: 10px;
            flex-wrap: wrap;
        }

        #toolbar button {
            background: none;
            border: none;
            cursor: pointer;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        #toolbar button svg .ql-stroke {
            stroke: white !important;
        }

        #toolbar button svg .ql-fill {
            fill: white !important;
        }

        #toolbar button svg .ql-thin {
            stroke: white !important;
        }

        #toolbar button:hover svg .ql-stroke,
        #toolbar button.ql-active svg .ql-stroke {
            stroke: #ab20fd !important;
        }

        #toolbar button:hover svg .ql-fill,
        #toolbar button.ql-active svg .ql-fill {
            fill: #ab20fd !important;
        }
        
        #toolbar button:hover svg .ql-thin,
        #toolbar button.ql-active svg .ql-thin {
            stroke: #ab20fd !important;
        }
        #toolbar .ql-picker-label {
            color: white !important;
        }
        #toolbar .ql-picker-label svg .ql-stroke {
            stroke: white !important;
        }
        
        #toolbar .ql-picker-label:hover {
            color: #ab20fd !important;
        }
        #toolbar .ql-picker-label:hover svg .ql-stroke {
            stroke: #ab20fd !important;
        }
      `}</style>

      <section className="workspace">

        <section className="work-head">
          <div className="work-head-section-1">
            <SessionTimer />
          </div>
          <div className="work-head-section-2">
            <img src="/images/logo.png" alt="logo" />
            <p>OBTION - Workspace</p>
          </div>
          <div className="work-head-section-3">
            <UserProfile />
            <div className="work-ham-burger">
              <h1><FontAwesomeIcon icon={faBars} onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ cursor: 'pointer' }} /></h1>
              {isMenuOpen && (
                <div className="work-ham-dropdown" style={{ display: 'block' }}>
                  <div className="work-drop-items">
                    <div className="work-ham-item"><Link to="/">Home</Link></div>
                    <div className="work-ham-item"><Link to="/faq">FAQs</Link></div>
                    <div className="work-ham-item"><Link to="/about">About Us</Link></div>
                    <div className="work-ham-item"><Link to="/support">Support</Link></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="work-area">
          <div className="workspace-area">

            <div className="toolbar-container">
              <Toolbar />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '0' }}>
              {editorReady ? (
                <ReactQuill
                  key="editor-instance"
                  theme="snow"
                  value={text}
                  onChange={setText}
                  modules={modules}
                  formats={formats}
                  placeholder="Title&#10;Write Notes Here"
                />
              ) : (
                <div style={{ color: 'white', padding: '20px', textAlign: 'center' }}>
                  Loading Editor...
                </div>
              )}
            </div>

            <div className="work-end">
              <div className="work-property">
                <p id="word-count">
                  Word Count: {text.replace(/<[^>]*>/g, ' ').trim() === '' ? 0 : text.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).length} words
                </p>
                <FontAwesomeIcon icon={faRotate} style={{ cursor: 'pointer' }} />
                <FontAwesomeIcon icon={faFloppyDisk} style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </div>

          <Chatbot workspaceContent={text} />

        </section>
      </section>
    </div>
  );
}