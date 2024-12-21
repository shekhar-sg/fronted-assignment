import Section_1 from "@/sections/section-1";
import {AppBar, Toolbar} from "@mui/material";

const Home = () => {
    return (
        <>
            <AppBar sx={{position: "sticky"}}>
                <Toolbar sx={{
                    padding: 0, height: "80px", background: "#FFF7E2",
                }}></Toolbar>
            </AppBar>
            <Section_1/>
        </>
    )
}

export default Home;