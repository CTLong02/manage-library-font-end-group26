import { Dropdown, Table, OverlayTrigger, Tooltip } from 'react-bootstrap';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import BookApi from '~/api/BookApi';
import styles from './ViewAll.module.scss';
function ViewAll() {
    const [books, setBooks] = useState([]);
    const [total, setTotal] = useState(0);
    const [listAuthor, setListAuthor] = useState([]);
    const [types, setTypes] = useState([]);
    useEffect(() => {
        BookApi.getBooks().then((res) => {
            setBooks([...res.data]);
            let iTotal = 0;
            const setAuthor = new Set();
            const setType = new Set();
            res.data.forEach((book, index) => {
                iTotal += book.remaining;
                setAuthor.add(book.author);
                setType.add(book.type);
            });
            setListAuthor([...setAuthor]);
            setTypes([...setType]);
        });
    }, []);
    return (
        <div className="min-vh-100 p-4" style={{ backgroundColor: '#eff1f5' }}>
            <div className="container-xl px-3 py-2 bg-white rounded-4 shadow-lg">
                <div className="d-flex align-items-center py-3 justify-content-between">
                    <span className="fs-4 fw-semibold">{total} cuốn sách</span>
                    <div className="d-flex align-items-center">
                        <div className="bg-white px-3 py-2 rounded-3 border">
                            <i className="fw-semibold fs-4 fa-regular fa-magnifying-glass me-2"></i>
                            <input className={clsx('border-0', styles.inputSearch)}></input>
                        </div>
                        <div className="mx-3">
                            <span className="fs-6 fw-semibold me-2">Tác giả:</span>
                            <Dropdown className="d-inline">
                                <Dropdown.Toggle className="bg-transparent text-secondary border-secondary fw-semibold">
                                    Tất cả
                                </Dropdown.Toggle>
                                <Dropdown.Menu align={'end'} className="border-0 shadow-lg">
                                    {listAuthor.map((author, index) => {
                                        return (
                                            <Dropdown.Item key={index} className="fw-semibold">
                                                {author}
                                            </Dropdown.Item>
                                        );
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="mx-3">
                            <span className="fs-6 fw-semibold me-2">Loại sách:</span>
                            <Dropdown className="d-inline">
                                <Dropdown.Toggle className="bg-transparent text-secondary border-secondary fw-semibold">
                                    Tất cả
                                </Dropdown.Toggle>
                                <Dropdown.Menu align={'end'} className="border-0 shadow-lg">
                                    {types.map((type, index) => {
                                        return (
                                            <Dropdown.Item key={index} className="fw-semibold">
                                                {type}
                                            </Dropdown.Item>
                                        );
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <Table striped responsive bordered className={styles.table}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Tên</th>
                            <th>Tác giả</th>
                            <th>Loại sách</th>
                            <th>Ví trị sách</th>
                            <th>Số quyển sách còn</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => {
                            return (
                                <tr key={index}>
                                    <td>{book.id}</td>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{book.type}</td>
                                    <td>{book.position}</td>
                                    <td>{book.remaining}</td>
                                    <td>
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 200, hide: 200 }}
                                            overlay={(props) => {
                                                return (
                                                    <Tooltip {...props} id="1">
                                                        Xem chi tiết
                                                    </Tooltip>
                                                );
                                            }}
                                        >
                                            <i
                                                role="button"
                                                className="mx-3 fa-regular fa-eye"
                                                style={{ color: '#1c78e0' }}
                                            ></i>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 200, hide: 200 }}
                                            overlay={(props) => {
                                                return (
                                                    <Tooltip {...props} id="1">
                                                        Sửa thông tin
                                                    </Tooltip>
                                                );
                                            }}
                                        >
                                            <i
                                                role="button"
                                                className="mx-3 fa-regular fa-pen"
                                                style={{ color: '#1c78e0' }}
                                            ></i>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 200, hide: 200 }}
                                            overlay={(props) => {
                                                return (
                                                    <Tooltip {...props} id="1">
                                                        Xóa sách
                                                    </Tooltip>
                                                );
                                            }}
                                        >
                                            <i
                                                role="button"
                                                className="mx-3 fa-regular fa-trash"
                                                style={{ color: 'rgb(215, 41, 41)' }}
                                            ></i>
                                        </OverlayTrigger>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default ViewAll;
