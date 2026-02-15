import { useEffect, useState } from 'react';
import Video from '~/components/Video';
import classNames from 'classnames/bind';
import styles from './Home.module.scss'; // Tạo file này nếu chưa có

const cx = classNames.bind(styles);

function Home() {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        // Fetch dữ liệu từ API thật của F8
        fetch(`https://www.tiktok.com/@kaoquyphi/video/7574822597037149447?is_from_webapp=1&sender_device=pc`)
            .then((res) => res.json())
            .then((res) => {
                // Senior tip: Nối mảng cũ với mảng mới thay vì ghi đè
                setVideos((prev) => [...prev, ...res.data]);
            })
            .catch((err) => console.log(err));
    }, [page]);

    return (
        <div className={cx('wrapper')}>
            {videos.map((video) => (
                <Video key={video.id} data={video} />
            ))}

            {/* Nút giả để test load more trước khi làm Scroll thật */}
            <button className={cx('load-more')} onClick={() => setPage(page + 1)}>
                Xem thêm
            </button>
        </div>
    );
}

export default Home;
