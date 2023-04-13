import {useEffect, useState} from "preact/hooks";
import CategoriesService from "../services/categories.service.js";

const CategoriesList = (props) => {
    props.handleClick = props.handleClick ?? undefined;
    const [categories, setCategories] = useState([]);

    useEffect(async () => {
        const data = await CategoriesService.getCategories()
        setCategories(data);
    }, []);

    return (
        <>
            <button className="outline" onClick={props.handleClick} value="all">Toutes</button>
            {categories.map((category) => (
                <button className="outline" onClick={props.handleClick} value={category.id}>{category.name}</button>
            ))}
        </>
    );
}

export default CategoriesList;