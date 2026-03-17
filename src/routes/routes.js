import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Home/Live';
import NewHome from '~/pages/NewHome';
import Chat from '~/pages/Chat';
import Watch from '~/pages/Watch';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.newHome, component: NewHome },
    { path: config.routes.chat, component: Chat },
    { path: config.routes.watch, component: Watch, layout: null },
    // Alias (in case someone uses old-style URL)
    { path: '/pages/Watch', component: Watch, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
