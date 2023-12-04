import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import articles from '../content.js'
import NotFound from './404.jsx'

export default function Articale() {
    // const { articleId } = useParams()
    const [articleInfo, setArticleInfo] = useState({ upvotes: 10, comments: ["test"] });

    // useEffect(() => {
    //     const fetchArticleInfo = async () => {
    //         const result = await fetch(`/api/articles/${articleId}`);
    //         const body = await result.json();
    //         setArticleInfo(body);
    //     };
    //     fetchArticleInfo();
    // }, [articleId]);

    if (!articleInfo) {
        return <NotFound />
    }

    return (
        <>
            <p>{articleInfo.upvotes}</p>
            <p>{articleInfo.comments}</p>
        </>
    )
}
