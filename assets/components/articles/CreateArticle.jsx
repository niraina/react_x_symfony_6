import React from 'react'
import Input from '../others/Input';

const CreateArticle = () => {
    return ( <>
        <div className="container mt-5">
            <form action="">
            <div class="mb-3">
                <Input
                    label="Titre de l'article" 
                    type="text"
                 />
            </div> 
            </form>
        </div>
    </> );
}
 
export default CreateArticle;