import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragpn Ball'];
    const [categories, setCategories] = useState(['']);

    /*const handleAdd = () => {
        // setCategories(categories.concat('Hunter'));
        // setCategories(cats => [...cats, 'Hunter']);
        setCategories(['Hunter', ...categories ]);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                setCategories={setCategories}
            />
            <hr />
            <button >agregar</button>
            {
                <ol>
                   {
                       categories.map( (category, i) => 
                            <GifGrid 
                                category={category}
                                key={category}
                            />
                       )
                   }
                </ol>
            }
        </>
    )
}
