const NewsDialog = ({ open, onClose, news }) => {
    return (
        <dialog open={open}>
            <article>
                <header>
                    <a href="#close" aria-label="Close" className="close" onClick={onClose}></a>
                    Actualité : {news.title}
                </header>
                <p>{news.content}</p>
            </article>
        </dialog>
    );
}

export default NewsDialog;