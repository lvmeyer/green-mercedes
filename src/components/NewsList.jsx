import NewsService from "../services/news.service.js";
import PocketbaseService from "../services/pocketbase.service.js";
import {useEffect, useState} from "preact/hooks";
import Image from "./Image.jsx";
import {ArrowRight} from "lucide-preact";
import {render} from "preact";

const NewsList = () => {
    const [news, setNews] = useState([]);
    useEffect(async () => {
        const data = await NewsService.getActiveNews();
        setNews(data);
    }, []);

    function createModal(record) {
        //Create a NewsDialog modal component with the record
        return (e) => {
            e.preventDefault();

            //Create a NewsDialog modal component with the record
            import("./NewsDialog.jsx").then(({default: NewsDialog}) => {
                const modal = document.createElement("div");
                document.body.appendChild(modal);
                const close = () => {
                    modal.remove();
                };
                const dialog = <NewsDialog open={true} onClose={close} news={record} />;
                render(dialog, modal);
            });
        }
    }

    return (
        <div className="grid">
        {news.map((record) => (
            <article className="home-news">
                <Image
                    src={PocketbaseService.getPictureUrl(record, record.picture)}
                    alt={record.title}
                    srcsets={[PocketbaseService.getPictureUrl(record, record.picture), PocketbaseService.getPictureUrl(record, record.picture)]}
                />

                <div className="home-news-container">
                    <h4>{record.title}</h4>
                    <p>{record.description}</p>
                </div>

                <footer className="home-news-footer">
                    <small className="small">Publié le : {new Date(record.created).toLocaleDateString()}</small>
                    <a href="#" onClick={createModal(record)}>
                        <ArrowRight />
                    </a>
                </footer>
            </article>
        ))}
        </div>
    );
}

export default NewsList;