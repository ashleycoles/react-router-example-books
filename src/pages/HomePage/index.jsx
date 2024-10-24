import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function HomePage() {

    const [books, setBooks] = useState([])

    function getBooks() {
        fetch('https://book-swap-api.dev.io-academy.uk/api/books')
            .then(res => res.json())
            .then(bookData => {
                console.log(bookData.data)
                setBooks(bookData.data)
            })
    }

    useEffect(getBooks, [])

    return (
        <div>
            <h1>Home</h1>
            <ul>
            {books.map(function (book) {
                return <li key={book.id}>
                            <Link to={`/books/${book.id}`}>{book.title}</Link>
                            <p>Written by {book.author}</p>
                        </li>
            })}
            </ul>
        </div>
    )
}

export default HomePage