import React from 'react';
import classNames from 'classnames/bind';
import ChatItem from './ChatItem';
import styles from './ChatList.module.scss';

const cx = classNames.bind(styles);

// sample conversation data
const conversations = [
    {
        id: 1,
        name: 'Học vẹt',
        avatar: 'https://via.placeholder.com/40',
        lastMessage: 'Bạn đã gửi một file đính kèm.',
        unread: 0,
    },
    {
        id: 2,
        name: 'Cựu sinh viên Bách Khoa',
        avatar: 'https://via.placeholder.com/40',
        lastMessage: 'trực xuất khỏi khổ wall đã gửi ...',
        unread: 2,
    },
    {
        id: 3,
        name: 'Bao',
        avatar: 'https://via.placeholder.com/40',
        lastMessage: 'k có tương tác với c...',
        unread: 0,
    },
];

function ChatList({ onSelect }) {
    return (
        <div className={cx('list')}>
            {conversations.map((conv) => (
                <ChatItem key={conv.id} data={conv} onClick={() => onSelect(conv)} />
            ))}
        </div>
    );
}

export default ChatList;
