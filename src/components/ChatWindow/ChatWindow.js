import React, { useState } from 'react';
import classNames from 'classnames/bind';
import MessageBubble from './MessageBubble';
import styles from './ChatWindow.module.scss';

const cx = classNames.bind(styles);

const sampleMessages = [
    { id: 1, text: 'Hello!', fromMe: false },
    { id: 2, text: 'Hi, how are you?', fromMe: true },
    { id: 3, text: "I'm good, thanks!", fromMe: false },
];

function ChatWindow({ conversation }) {
    const [messages, setMessages] = useState(sampleMessages);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (input.trim()) {
            setMessages((prev) => [...prev, { id: Date.now(), text: input, fromMe: true }]);
            setInput('');
        }
    };

    return (
        <div className={cx('window')}>
            <div className={cx('header')}>
                {conversation ? (
                    <>
                        <img className={cx('avatar')} src={conversation.avatar} alt={conversation.name} />
                        <span className={cx('name')}>{conversation.name}</span>
                    </>
                ) : (
                    <span>Select a chat</span>
                )}
            </div>
            <div className={cx('messages')}>
                {messages.map((m) => (
                    <MessageBubble key={m.id} message={m} isOwn={m.fromMe} />
                ))}
            </div>
            <div className={cx('input-area')}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Aa"
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default ChatWindow;
