import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { MainLayout } from "../layouts/mainLayout";
import { Projects } from "../pages/projects";
import { Raccoon } from "../pages/raccoon";


export function MainRouter() {

    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/raccoon" element={<Raccoon />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}