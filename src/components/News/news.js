import React, {Component} from 'react'
import firebase from '../../config/firebase'
import { Container } from 'reactstrap';
import ArticleCard from '../ArticleCard/card';
const db = firebase.firestore();

class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            articles: []
        }
    }

    componentDidMount(){
        this.getNews();
        console.log("Hola")
    }

    getNews = () => {
        db
        .collection('Articles')
        .limit(8)
        .get()
        .then(docs => {
            if(!docs.empty){
                let allArticles = [];
                docs.forEach(function(doc) {
                    const article = {
                        id:doc,
                        ...doc.data()
                    }
                    allArticles.push(article)
                })
                this.setState({
                    articles: allArticles
                }, () => {
                    this.setState({
                        isLoaded: true
                    })
                })
            }
        })
    }
    render(){
        return (
            <div>
                <Container>
                    {
                        this.state.isLoaded?
                            this.state.articles.map((article, index) => {
                                return(
                                    <ArticleCard
                                        key={index}
                                        data={article}
                                    />
                                )
                            })
                            : ''
                    }
                </Container>
            </div>
        )
    }
}

export default News;