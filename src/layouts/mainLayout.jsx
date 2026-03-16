import { Footer } from "../components/footer/footer";
import { TopBar } from "../components/topbar/topBar";


export function MainLayout({children}){

    return(
        <div>
            <TopBar />
            {children}
            <Footer />
        </div>
    )

}