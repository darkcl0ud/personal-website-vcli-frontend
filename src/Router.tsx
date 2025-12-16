import {createBrowserRouter, RouterProvider} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import {type JSX} from "react";
import WhoAmIPage from "./pages/WhoAmIPage.tsx";
import RootPage from "./pages/RootPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import ResumePage from "./pages/ResumePage.tsx";
import ContactPage from "./pages/ContactPage.tsx";


const router = createBrowserRouter([{
    path: "/", element: <HomePage/>, errorElement: <ErrorPage/>
}, {
    path: "/", element: <RootPage/>, errorElement: <ErrorPage/>, children: [{
        path: "/whoami", element: <WhoAmIPage/>
    }, {
        path: "/resume", element: <ResumePage/>
    }, {
        path: "/contact", element: <ContactPage/>
    },]
}])

export default function Router(): JSX.Element {
    return <RouterProvider router={router}/>
}