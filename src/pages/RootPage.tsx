import Nav from "../components/Nav.tsx";
import {Outlet} from "react-router";
import {ScrollUpOnNewPage} from "../ui/ScrollUpOnNewPage.tsx";

export default function RootPage() {
    return <>
        <Nav/>
        <Outlet/>
        <ScrollUpOnNewPage />
    </>
}