import React, { useState, useEffect, useRef } from 'react';
import ChatbotIcon from './components/ChatbotIcon';
import ChatForm from './components/ChatForm';
import ChatMessage from './components/ChatMessage';
import { projectInfo } from './projectInfo';
import './index.css';
const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: 'model',
      text: projectInfo,
    },
  ]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    // Add "Thinking..." message
    setChatHistory((prev) => {
  if (prev.some((msg) => msg.text === 'Thinking...')) return prev;
  return [...prev, { role: 'model', text: 'Thinking...' }];
});

    try {
      // Format history for Gemini API
      const contents = history
        .filter(({ text }) => typeof text === 'string' && text.trim() !== '') // Ensure text is valid
        .map(({ role, text }) => ({
          role: role === 'user' ? 'user' : 'model',
          parts: [{ text: text }], // Explicitly use { text: text } to avoid shorthand issues
        }));

      if (contents.length === 0) {
        throw new Error('No valid messages to send to the API');
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}?key=${import.meta.env.VITE_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'API request failed');
      }

      const data = await response.json();

      // Handle Gemini API response structure
      const botResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        'Sorry, I couldn’t process that request.';

      // Remove "Thinking..." and add actual response
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== 'Thinking...'),
        {
          role: 'model',
          text: botResponse.replace(/\*\*(.*?)\*\*/g, '$1').trim(),
        },
      ]);
    } catch (error) {
      console.error('API Error:', error);
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== 'Thinking...'),
        { role: 'model', text: `Error: ${error.message}`, isError: true },
      ]);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [chatHistory]);

  return (
    <div className={`container ${showChatbot ? 'show-chatbot' : ''}`}>
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        id="chatbot-toggler"
        aria-label="Toggle chatbot"
      >
        <span className="material-symbols-outlined">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>

      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button
            onClick={() => setShowChatbot((prev) => !prev)}
            className="material-symbols-outlined"
            aria-label="Minimize chatbot"
          >
            keyboard_arrow_down
          </button>
        </div>

        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">Hello, how can I help you?</p>
          </div>

          {chatHistory
            .filter((chat) => !chat.hideInChat)
            .map((chat, index) => (
              <ChatMessage key={`msg-${index}`} chat={chat} />
            ))}
        </div>

        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;