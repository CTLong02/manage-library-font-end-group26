import HomeLayout from '~/layouts/Home/HomeLayout';
import Home from '~/pages/Home/Home';
import LoginLayout from '~/layouts/Login/LoginLayout';
import SignIn from '~/pages/SignIn/SignIn';
import SignUp from '~/pages/SignUp/SignUp';
import Forgot from '~/pages/Forgot/Forgot';
import Search from '~/pages/search/Search';
import QuestionAndContact from '~/pages/contactAndQuestions/ContactAndQuestion';
import DashBoard from '~/pages/dashboard/Dashboard';
import LayoutDashboard from '~/layouts/dashboard/LayoutDashboard';
import Manage from '~/pages/manage/Manage';
const publicRoutes = [
    {
        path: '/',
        component: Home,
        layout: HomeLayout,
    },
    {
        path: '/search',
        component: Search,
        layout: HomeLayout,
    },
    {
        path: '/contact',
        component: QuestionAndContact,
        layout: HomeLayout,
    },
    {
        path: '/signIn',
        component: SignIn,
        layout: LoginLayout,
    },
    {
        path: '/signUp',
        component: SignUp,
        layout: LoginLayout,
    },
    {
        path: '/forgot',
        component: Forgot,
        layout: LoginLayout,
    },
];
const privateRoutes = [
    {
        path: '/dashboard',
        component: DashBoard,
        layout: LayoutDashboard,
    },
    {
        path: '/manage',
        component: Manage,
        layout: LayoutDashboard,
    },
];

export { publicRoutes, privateRoutes };
