import React, { useEffect, useState } from 'react';
import ArticlesAPI from "../services/ArticlesAPI";
import moment from "moment";
import Pagination from '../components/Pagination';
import { NavLink } from 'react-router-dom';

const ArticlesPages = () => {
    const [articles, setArticles] = useState([])
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const fetchArticles = async () => {
        try {
            const data = await ArticlesAPI.findAll()
            setArticles(data);
        } catch (error) {
            console.log(error.response);
        }
    }

    useEffect(() => {
        fetchArticles()
    }, [])

    const formatDate = (str) => moment(str).format('DD-MM-YYYY');

    //gestion du changement de page
    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    // gestion de la recherche
    const handleSearch = ({currentTarget}) => {
        setSearch(currentTarget.value);
        setCurrentPage(1);
    }

    const itemsPerPage = 10;
    //filtrage en fonction de la rechrche
    const filteredArticles = articles.filter(
        a => 
            a.title.toLowerCase().includes(search.toLowerCase()) ||
            a.description.toLowerCase().includes(search.toLowerCase())
        )

    //pagination des données
    const paginatedArticles = Pagination.getData(
        filteredArticles, 
        currentPage, 
        itemsPerPage
        );

    return ( <>

        <div className="container">
            <div className="row my-5">
                <div className="col-md-8">
                    <h1>Liste des articles</h1>
                    <NavLink to="/articles/new" className='btn btn-primary'>Ajouter</NavLink>
                </div>
                <div className="col-md-4">
                <input 
                    onChange={handleSearch}
                    value={search}
                    type="text" 
                    className="form-control" 
                    placeholder="Rechercher..." 
                />
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Titre</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedArticles.map(article => (
                        <tr key={article.id}>
                            <th>{article.id}</th>
                            <td>{article.title}</td>
                            <td>{article.description}</td>
                            <td>{formatDate(article.createdAt)}</td>
                            <td>@mdo</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {
            itemsPerPage < filteredArticles.length && <Pagination 
                currentPage={currentPage} 
                itemsPerPage={itemsPerPage} 
                length={filteredArticles.length} 
                onPageChanged={handlePageChange}
            />
            }
        </div>

    </> );
}

export default ArticlesPages;