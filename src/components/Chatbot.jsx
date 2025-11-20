import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';

const Chatbot = ({ workspaceContent }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'bot', text: 'Hello, I am the OBTION-AI. How can I help you today?' }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (!userInput.trim()) return;
    const userMsg = userInput;
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setUserInput("");
    setIsTyping(true);

    if (!workspaceContent || !workspaceContent.trim()) {
       setIsTyping(false);
       setChatMessages(prev => [...prev, { role: 'bot', text: "Your workspace notes are empty. Please write something first so I can assist." }]);
       return;
    }

    const API_KEY = "AIzaSyBp20DxZt-CdhpvjdgwrzWSAJfPAysXho4"; // Note: Secure this in production
    const MODEL = "gemini-2.5-flash-lite";
    const API_URL = `https://generativelanguage.googleapis.com/v1/models/${MODEL}:generateContent?key=${API_KEY}`;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: `You are OBTION-AI. User Question: "${userMsg}". Workspace Content: "${workspaceContent}"` }] }]
        })
      });
      
      const data = await response.json();
      const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't understand.";
      setChatMessages(prev => [...prev, { role: 'bot', text: botReply }]);
    } catch (error) {
      setChatMessages(prev => [...prev, { role: 'bot', text: "Connection error." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div id="chatbot-container">
      {!isChatOpen ? (
        <div id="chatbot-button" onClick={() => setIsChatOpen(true)}>
          <div id="chatbot-icon"><img id="bot-avatar" src="/images/logo.png" alt="AI" /></div>
        </div>
      ) : (
        <div id="chatbot-panel" style={{ display: 'flex', flexDirection: 'column' }}>
          <div id="chatbot-header">
            <div className="chat-title">OBTION-AI</div>
            <div className="chat-controls">
              <button id="minimize-chat" onClick={() => setIsChatOpen(false)}><FontAwesomeIcon icon={faMinus} style={{ fontSize: '14px' }} /></button>
              <button id="close-chat" onClick={() => setIsChatOpen(false)}><FontAwesomeIcon icon={faXmark} style={{ fontSize: '14px' }} /></button>
            </div>
          </div>
          <div id="chatbot-messages">
            {chatMessages.map((msg, index) => (
              <div key={index} className={msg.role === 'bot' ? "bot-message" : "user-message"}>{msg.text}</div>
            ))}
            {isTyping && <div className="thinking-message"><span className="thinking-text">Processing...</span></div>}
          </div>
          <div id="chatbot-input">
            <input type="text" id="user-input" placeholder="Type your message..." value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} />
            <button id="send-button" onClick={sendMessage}><FontAwesomeIcon icon={faPaperPlane} /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;