import Section_1 from "@/sections/section-1";
import {AppBar, Toolbar} from "@mui/material";
import Section_2 from "@/sections/section-2";

const Home = () => {
    return (
        <>
            <AppBar sx={{position: "sticky"}}>
                <Toolbar sx={{
                    padding: 0, height: "80px", background: "#FFF7E2",
                }}></Toolbar>
            </AppBar>
            <Section_1/>
            <Section_2/>
        </>
    )
}

export default Home;