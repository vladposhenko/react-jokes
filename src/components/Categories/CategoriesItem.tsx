import React, {Dispatch, SetStateAction} from 'react';

interface ICategory {
    category:string
    i:number
    setCheckedCategory: Dispatch<SetStateAction<string>>
}

const CategoriesItem = ({category, i, setCheckedCategory}: ICategory) => {
    return (
        <li className={'form_radio_btn'} onClick={() => setCheckedCategory(category)} >
            <input id={'radio' + i } type="radio" value={category} name='jokesCategory'/>
            <label htmlFor={'radio' + i}>{category}</label>
        </li>
    );
};

export default CategoriesItem;