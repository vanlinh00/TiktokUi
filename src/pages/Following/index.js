import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import FollowingAccountItem from '~/components/Following';

const cx = classNames.bind(styles);

function Following() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await fetch('http://localhost:9092/api/users/list', {
                    method: 'GET',
                    headers: {
                        Authorization:
                            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicmVzb3VyY2VfaWQiXSwidXNlcl9pZCI6MSwidXNlcl9uYW1lIjoidXNlcjAwMSIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSIsInRydXN0Il0sImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdLCJqdGkiOiJ6WldFcFc0T0VNUERmZkc1RzVhM2Qtbll4bzgiLCJjbGllbnRfaWQiOiJtb2JpbGUtY2xpZW50In0.UvwOC1e7rYKGtXNC-5jDbJTbgLAWlbs4OuVdS34fujZax5H3GotH20lOXt7IMtczPzCnmO08MwyBLPo5fRgvb0QddRF1bbCDlOmoWujl-uzlwgrL2J1HYAFveF5LbDwzRdkS671HEMKzxUPQFxnbZ-afIxpiJrVnlYlc5iAk9AidxNprBi5fZy1m9ZPqccpSIXG6SiI5htqP2IKJk27BnOTrVHp0GAeWaeXdrPioDikaz14_L5Z209B0-hAVgtKDZGLPgGFq6X4e2TPeADT80VdvVUuK8gSjDGQWSceK9OTXyYJiOuWCny1gk2Ca08-5AVYanliiLIbTOp531xsVkA', // Use your full token here
                        'Content-Type': 'application/json',
                    },
                });

                const result = await response.json();

                if (result.success) {
                    // Map API data to match your FollowingAccountItem expected format
                    const formattedData = result.data.map((item) => ({
                        id: item.id,
                        file_url: '', // API doesn't provide this yet, using empty string
                        user: {
                            nickname: item.loginId,
                            full_name: item.fullName,
                            avatar: 'https://via.placeholder.com/150', // Placeholder since API avatar is null
                            tick: item.role === 'ROLE_ADMIN',
                        },
                    }));
                    setUsers(formattedData);
                }
            } catch (error) {
                console.error('Failed to fetch users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchApi();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className={cx('container')}>
            {users.map((user, index) => (
                // Use index in key if IDs are duplicated (like in your JSON sample)
                <FollowingAccountItem key={`${user.id}-${index}`} data={user} />
            ))}
        </div>
    );
}

export default Following;
