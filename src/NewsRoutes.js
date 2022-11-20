import { Routes, Route } from 'react-router-dom';
import NewsLayouts from './NewsLayouts';
import NewsList from "./pages/NewsList";
import News from "./pages/News";
import NewsNew from "./pages/NewsNew";

function NewsRoutes() {
    return (
        <>
            <Routes>
                <Route element={<NewsLayouts />} >
                    <Route index element={<NewsList />} />
                    <Route path=":id" element={<News />} />
                </Route>
            </Routes>
        </>
    )
}

export default NewsRoutes;