import React, { useState } from "react";
import "./AiChatbot.scss";
import { aiChatbot } from "../../portfolio";

export default function AiChatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I am an AI representation of Sheikh Wasimuddin. How can I help you today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  if (!aiChatbot.display) {
    return null;
  }

  const handleQuestionClick = (q, a) => {
    setMessages(prev => [...prev, { sender: "user", text: q }]);
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: "bot", text: a }]);
    }, 1000);
  };

  return (
    <div className="ai-chatbot-main" id="chatbot">
      <div className="chatbot-header">
        <h1 className="chatbot-heading">{aiChatbot.title}</h1>
      </div>
      <div className="chatbot-container">
        <div className="chatbot-window">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              <div className="message-bubble">{msg.text}</div>
            </div>
          ))}
          {isTyping && (
            <div className="chat-message bot">
              <div className="message-bubble typing-indicator">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
        </div>
        <div className="chatbot-options">
          {aiChatbot.questions.map((item, index) => (
            <button 
              key={index} 
              className="chat-option-btn"
              onClick={() => handleQuestionClick(item.q, item.a)}
            >
              {item.q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
