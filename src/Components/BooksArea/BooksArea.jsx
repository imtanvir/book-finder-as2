
import { useState } from 'react';
import booksDetails from '../../BookListData/BookListData.json';
import Book from './Book/Book';
import SearchBook from './SearchBook/SearchBook';
export default function BooksArea() {
    const [bookList, setBookList] = useState([...booksDetails.bookList]);
    const [sortBy, setSortBy] = useState('');
    function handleSearch(searchTerm) {
        console.log(searchTerm);

        const filtered = bookList.filter((book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setBookList([...filtered]);

    }

    // Sort handler function
    function handleSortChange(event) {
        const selectedSort = event.target.value;
        setSortBy(selectedSort);

        let sortedList = [...bookList];
        if (selectedSort === 'name_asc') {
            sortedList.sort((a, b) => a.name.localeCompare(b.name));
        } else if (selectedSort === 'name_desc') {
            sortedList.sort((a, b) => b.name.localeCompare(a.name));
        } else if (selectedSort === 'year_asc') {
            sortedList.sort((a, b) => a.published - b.published);
        } else if (selectedSort === 'year_desc') {
            sortedList.sort((a, b) => b.published - a.published);
        }

        setBookList(sortedList);
    }
    return (
        <>
            {/* Book area start */}
            <main className="my-10 lg:my-14">
                <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
                    <div
                        className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4"
                    >
                        <div>
                            <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
                            <h2
                                className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl"
                            >
                                Trending Books of the Year
                            </h2>
                            {/* Search for books */}
                            <SearchBook onSearch={handleSearch} />
                            {/* Search for books end */}
                        </div>
                        <div className="flex items-stretch space-x-3">
                            <select
                                className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
                                name="sortBy"
                                id="sortBy"
                                value={sortBy}
                                onChange={handleSortChange}
                            >
                                <option value="">Sort</option>
                                <option value="name_asc">Name (A-Z)</option>
                                <option value="name_desc">Name (Z-A)</option>
                                <option value="year_asc">Publication Year (Oldest)</option>
                                <option value="year_desc">Publication Year (Newest)</option>
                            </select>

                        </div>
                    </div>
                </header>
                <div
                    className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                    {
                        bookList.map((book) => (
                            <Book key={book.id} bookDetails={book} />
                        ))
                    }
                </div>
                {/* Book Grid Ends */}
            </main>
        </>
    );
}