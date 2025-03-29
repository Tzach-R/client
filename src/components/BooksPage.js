import React, { useEffect, useState } from "react";
import axios from "axios";
import BookClubUI from "./ui/BookClubUI";

const BooksPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("/books")
            .then((response) => setBooks(response.data))
            .catch((error) => console.error("Error fetching books:", error));
    }, []);

    return <BookClubUI books={books} />;
};

export default BooksPage;
