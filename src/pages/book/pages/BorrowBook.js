import { Link } from 'react-router-dom';
function BorrowBook() {
    return (
        <div className="container-xl">
            <div>
                <p className="fs-5 fw-semibold">
                    <Link to={'/book'} className="text-decoration-none">
                        Sách
                    </Link>{' '}
                    / <span>Mượn sách</span>
                </p>
            </div>
        </div>
    );
}

export default BorrowBook;
