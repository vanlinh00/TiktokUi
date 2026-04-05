import axios from 'axios'; // Recommended over fetch for interceptors

const API_BASE = 'http://localhost:9092/api';

export const getFollowingList = async () => {
    // In a real app, get the token from localStorage or a state manager
    const token = localStorage.getItem('token');

    const response = await fetch(`${API_BASE}/users/list`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) throw new Error('Failed to fetch following list');

    const result = await response.json();

    if (!result.success) throw new Error(result.message || 'Data fetch unsuccessful');

    // Senior move: Transform the data here so the component gets exactly what it needs
    return result.data.map((item) => ({
        id: item.id,
        file_url: '',
        user: {
            nickname: item.loginId,
            full_name: item.fullName,
            avatar: item.avatar || 'https://via.placeholder.com/150',
            tick: item.role === 'ROLE_ADMIN',
        },
    }));
};
