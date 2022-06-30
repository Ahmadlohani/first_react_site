import { useEffect, useState } from "react";
import Footer from "../../Components/Footers/Footer";
import NewsCards from "./NewsCards";
const Newspage = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const getData = (async () => {
            var newsData = await fetchData();
            setNews(newsData);
        });
        getData();
    }, [])
    const fetchData = (async () => {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        const Data = resp.json();
        return Data;
    })
    return (
        <div>
        <NewsCards newsData={news} />
        <Footer />   
        </div>
    )
}

export default Newspage
