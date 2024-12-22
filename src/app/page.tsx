import {AppBar, Toolbar} from "@mui/material";
import Section_1 from "@/sections/section-1";
import Section_2 from "@/sections/section-2";
import Section_3 from "@/sections/section-3";
import Section_4 from "@/sections/section-4";
import Section_5 from "@/sections/section-5";

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
            <Section_3/>
            <Section_4/>
            <Section_5/>
        </>
    )
}

export default Home;