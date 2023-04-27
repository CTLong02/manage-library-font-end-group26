import HomeLayout from "~/layouts/Home/HomeLayout"
import Home from "~/pages/Home/Home"
const publicRoutes = [{
    path : '/',
    component : Home,
    layout : HomeLayout,
}]
const privateRoutes = []

export {publicRoutes, privateRoutes}