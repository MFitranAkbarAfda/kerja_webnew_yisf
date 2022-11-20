import Banner from "../components/Banner";
import Supported from "../components/Supported";
import C_About from "../components/C_About";
import Mechanis from "../components/Mechanis";
import Categories from "../components/Categories";
import VideoAE from "../components/VideoAE";
import News from "../components/News";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Banner />
            <Supported />
            <C_About  
                desc = "2020 is a year full of surprises. How come? Since the beginning of 2020, the world has been shocked by the virus that causes a pandemic (Covid 19) until 2021, this has not ended yet. Departing from this phenomenon, all life in the world changes drastical- ly, starting from the way we socialize, transportation models, learning systems in schools, and many others. Schools change online, employees work from home, basic public transportation and facilities, and other changes. The point is this pandemic has changed the entire structure of our lives."
            />
            <Mechanis />
            <Categories />
            <VideoAE />
            <News />
            <Footer />
        </>
    )
}

export default Home;