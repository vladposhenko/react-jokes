import React, {Dispatch, SetStateAction, useEffect} from 'react';
import "../../css/style.css"
import CategoriesItem from "./CategoriesItem";

interface CategoriesType  {
    categories: string[]
    setCheckedCategory: Dispatch<SetStateAction<string>>
}

const Categories = ({categories, setCheckedCategory}:CategoriesType) => {

    return (
        <ul className="radio-toolbar" id="btnGroup">
            {categories.map((category,index) => <CategoriesItem setCheckedCategory={setCheckedCategory} i={index}  category={category} key={index}/> )}
        </ul>
    );
};

export default Categories;