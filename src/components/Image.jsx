
function Image({ src, alt }) {
    return (
        <>
            <picture>
                <source media="(min-width: 650px)" alt="img_1" srcset="/uploads/media/news_gallery/0001/01/thumb_348_news_gallery_list.jpeg">
                <source media="(min-width: 430px)" alt="img_2" srcset="/uploads/media/news_gallery/0001/01/thumb_316_news_gallery_list.jpeg">
                <img src="/uploads/media/news_gallery/0001/01/thumb_366_news_gallery_list.jpeg" alt="img" style="width:auto;">
            </picture>
        </>
        
  );
}

<img
          className="avatar"
          src={src}
          alt={alt}
        />
export default Image;