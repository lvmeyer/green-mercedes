
function Image({ src, alt }) {
    return (
            <>
                <picture className="picture">
                    <source media="(min-width: 650px)" alt={`${alt}_650`} srcset={`${src}`}/>
                    <source media="(min-width: 430px)" alt={`${alt}_430`} srcset={`${src}`}/>
                    <img src={`${src}`} alt={`${alt}_full`} style="width:auto;"/>
                </picture>
            </>
        );
}

export default Image;