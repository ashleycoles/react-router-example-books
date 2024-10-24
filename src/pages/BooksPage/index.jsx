import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function BooksPage() {
    const {id} = useParams()

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [blurb, setBlurb] = useState("")
    const [image, setImage] = useState("")
    const [year, setYear] = useState("")

    function getBook() {
        fetch(`https://book-swap-api.dev.io-academy.uk/api/books/${id}`)
            .then(res => res.json())
            .then(bookData => {
                console.log(bookData.data)
                setTitle(bookData.data.title)
                setAuthor(bookData.data.author)
                setBlurb(bookData.data.blurb)
                setImage(bookData.data.image)
                setYear(bookData.data.year)
            })
    }

    useEffect(getBook, [])

    return (
        <div>
            <h1>{title} - {author}</h1>
            <p>{blurb}</p>
            <img src={image} alt="" />
            <p>Published in {year}</p>
        </div>
    )
}

export default BooksPage