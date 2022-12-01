import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ArticlesAPI from '../services/ArticlesAPI';
import Card from './others/Card';
const HomePage = () => {
    const [articles, setArticles] = useState([])

    const fetchArticles = async () => {
        try {
            const data = await ArticlesAPI.findAll();
            setArticles(data);
        } catch (error) {
            console.log(error.response);
        }
    }
    useEffect(() => {
        fetchArticles();
    }, [])

    const formatDate = (str) => moment(str).format("DD-MM-YYYY")

    const [query, setQuery] = useState("");

    const handleFilter = event => setQuery(event.target.value)


    return ( <>
    <div className="container mt-5">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ad suscipit reprehenderit vitae veritatis culpa exercitationem quasi qui. Voluptas voluptatum iste nihil, quia eum perspiciatis commodi maxime doloremque error ab.</p>
        <hr />

        <div className="row mt-3">
        <input className='form-control mb-5' placeholder="Rechercher ..." onChange={handleFilter} />
        {
            articles.filter(article => {
                
                if (query === '') {
                    return article;
                } else if (
                    article.title.toLowerCase().includes(query.toLowerCase()) ||
                    article.description.toLowerCase().includes(query.toLowerCase())
                    ) {
                        return article;
                }

                }).map((article, index) => (
                    <div className="col-md-4 mb-3" key={article.id}>
                        <Card 
                            title={article.title}
                            description={article.description}
                            date={formatDate(article.createdAt)}
                        />
                    </div>
                ))
        }
        </div>
    </div>
    </> );
}
 
export default HomePage;