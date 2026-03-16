import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { MainLayout } from "../layouts/mainLayout";
import { Projects } from "../pages/projects";


export function MainRouter() {

    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}