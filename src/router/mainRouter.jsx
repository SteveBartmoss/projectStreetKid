import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { MainLayout } from "../layouts/mainLayout";
import { Projects } from "../pages/projects";
import { Raccoon } from "../pages/raccoon";
import { NeoFetch } from "../pages/neofetch/neofetch";
import { Steve } from "../pages/steve";
import { RacoonChangeLog } from "../pages/racoon/racoonChangeLog";
import { RacoonDownload } from "../pages/racoon/download";
import { RacoonAbout } from "../pages/racoon/about";
import { MainRacoon } from "../pages/racoon/main";
import Racoonv2 from "../pages/racoon/racoonv2";

export function MainRouter() {

    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/racoon" element={<Racoonv2 />} />
                    <Route path="/racoon/changelog" element={<RacoonChangeLog />} />
                    <Route path="/racoon/download" element={<RacoonDownload />} />
                    <Route path="/racoon/about" element={<RacoonAbout />} />
                    <Route path="/neofetch" element={<NeoFetch />} />
                    <Route path="/steve" element={<Steve />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}