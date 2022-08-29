import React, {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react';
import "../css/style.css"

import trash from './../images/trash.png'
import Jokes from "./Jokes/Jokes";
import Categories from "./Categories/Categories";
import axios from "axios";


interface IForm {
    handleJokeClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    changeChecked: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    setCheckedCategory: Dispatch<SetStateAction<string>>
}

const Form = ({handleJokeClick, value, changeChecked, setCheckedCategory}: IForm) => {

    const [categories, setCategories] = useState([])

    async function getCategories () {
        let response = await axios.get('https://api.chucknorris.io/jokes/categories')
        setCategories(response.data)
    }



    useEffect(() => {
        getCategories()
    },[])

    return (
        <form>
            <div className="option__choose">
                <div className="custom-radio">
                    <label>
                        <input onChange={changeChecked}  type="radio" name="jokesField" value="random"
                                checked={value === 'random'? true : false}
                        />
                            <div className="custom-radio__label">
                                <strong>Random</strong>
                            </div>
                    </label>
                </div>

                <div className="clear"></div>

                <div className="custom-radio">
                    <label>
                        <input onChange={changeChecked} type="radio" name="jokesField" value="categories"
                               checked={value === 'categories'? true : false}
                        />
                            <div className="custom-radio__label">
                                <strong>From categories</strong>
                            </div>
                    </label>
                </div>

                {
                    value === 'categories' ? <Categories setCheckedCategory={setCheckedCategory} categories={categories}/> : null
                }

                <div className="custom-radio">
                    <label>
                        <input onChange={changeChecked} type="radio" name="jokesField" value="search"
                               checked={value === 'search'? true : false}
                        />
                            <div className="custom-radio__label">
                                <strong>Search</strong>
                            </div>
                    </label>
                </div>
            </div>
            <br/>
            {
                value === 'search' &&
                <input className="search__input" placeholder="Free text search..." type="text" id="searchInput" />
            }
                    <div className="action__items">
                        <button onClick={handleJokeClick} className="send__btn" type="submit">Get a joke</button>
                        <img className="delte__list" id="deleteJokesBtn" src={trash} alt="delete" />
                    </div>
        </form>
    );
};

export default Form;