import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import articles from '../content.js'
import NotFound from './404.jsx'

export default function Articale() {
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] })

    const { articleId } = useParams()
    const article = articles.find((article) => article.name === articleId)

    useEffect(() => {
        setArticleInfo({ upvotes: Math.ceil(Math.random() * 10), comments: ['comment1', 'comment2'] })
    }, [])

    if (!article) {
        return <NotFound />
    }

    return (
        <>
            <h1>{article.title}</h1>
            <p>This article has {articleInfo.upvotes} upvotes</p>
            {article.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
            ))}
        </>
    )
}
