import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { MainLayout } from "../layouts/mainLayout";
import { Projects } from "../pages/projects";
import { Raccoon } from "../pages/raccoon";
import { NeoFetch } from "../pages/neofetch";
import { Steve } from "../pages/steve";
import { RacoonChangeLog } from "../pages/racoonChangeLog";
import { RacoonDownload } from "../pages/racoon/download";

export function MainRouter() {

    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/racoon" element={<Raccoon />} />
                    <Route path="/racoon/changelog" element={<RacoonChangeLog />} />
                    <Route path="/racoon/download" element={<RacoonDownload />} />
                    <Route path="/neofetch" element={<NeoFetch />} />
                    <Route path="/steve" element={<Steve />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}