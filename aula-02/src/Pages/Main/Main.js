import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Service/API/API'
import './Styles.css'

class Main extends Component {
    state = {
        biographies: [],
        biographyInfo: {},
        page: 1
    } 

    componentDidMount() {
        this.loadBiographies();
    }

    loadBiographies = async (page = 1) => {
        const response = await api.get(`/biographies?page=${page}`)
        
        const { docs, } = response.data
        
        this.setState({ biographies: docs, page })
    }

    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadBiographies(pageNumber)
    }

    nextPage = () => {
        const { page, pages } = this.state;

        if(page  === pages) return;

        const pageNumber = page + 1;

        this.loadBiographies(pageNumber)
    }


    render(){
        const { biographies, page, pages } = this.state;
        return(
            <div className="list-biography">
                {biographies.map(biography =>(
                    <article key={biography._id}>
                        <strong>{biography.nome}</strong>
                        <p className="biography-description">{biography.description}</p>
                        <Link to={`/biography/${biography._id}`}>Acessar</Link>
                    </article>
                ))}

                <div className="actions">
                    <button  onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Próximo</button>
                </div>
               
                
            </div>
            
        )
    }
}

export default Main;