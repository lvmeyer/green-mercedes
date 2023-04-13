
function Image({ src, alt, srcsets, className }) {
    const srcset_1024 = (srcsets && srcsets[0]) ?? src;
    const srcset_480 = (srcsets && srcsets[1]) ?? src;
    return (
            <picture className="picture">
                <source media="(min-width: 1024px)" srcSet={srcset_1024}/>
                <source media="(min-width: 480px)" srcSet={srcset_480}/>
                <img src={src} style="width:auto;" alt={alt} className={className} loading="lazy" />
            </picture>
        );
}

export default Image;