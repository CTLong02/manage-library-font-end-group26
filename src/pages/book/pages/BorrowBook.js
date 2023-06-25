import { useState, useMemo, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import BorrowingApi from '~/api/BorrowingApi';
import { Col, Dropdown, Modal } from 'react-bootstrap';
import Delete from '../components/Delete';
import imgTrash from '~/assets/images/trash.png';
import toasts from '~/app/components/Toast';
import { useSelector } from 'react-redux';

function BorrowBook() {
    const [books, setBooks] = useState();
    const account = useSelector((state) => state.app.account);
    const [params, setParams] = useState(null);
    const [isModal, setIsModal] = useState(false);
    const dataTypeDefinitions = useMemo(() => {
        return {
            object: {
                baseDataType: 'object',
                extendsDataType: 'object',
                valueParser: (params) => ({ name: params.newValue }),
                valueFormatter: (params) => (params.value == null ? '' : params.value.name),
            },
        };
    }, []);
    const handleClick = (params) => {
        // console.log(params);
        setParams(params);
        setIsModal(true);
    };
    const handleDelete = async () => {
        const response = await BorrowingApi.delelteBorrowing({
            id: params.data.book.id,
        });
        if (response) {
            toasts.showSuccess('Dữ liệu đã bị thay đổi');
            repeat();
            setIsModal(false);
        }
    };
    const columnDefs = [
        {
            field: 'id',
            headerName: 'Số thứ tự',
        },
        {
            field: 'user.name',
            headerName: 'Họ tên',
        },
        {
            field: 'user.email',
            headerName: 'Email',
        },
        {
            field: 'user.class',
            headerName: 'Lớp',
        },

        {
            field: 'user.faculty',
            headerName: 'Khoa',
        },
        {
            field: 'user.bookBorrowed',
            headerName: 'Số sách có thể mượn',
        },
        {
            field: 'book.name',
            headerName: 'Tên sách',
        },
        {
            field: 'book.author',
            headerName: 'Tên tác giả',
        },
        {
            field: 'book.type',
            headerName: 'Loại sách',
        },
        {
            field: 'book.position',
            headerName: 'Nơi để',
        },
        {
            field: 'dateBorrowed',
            headerName: 'Ngày mượn',
        },
        {
            field: 'dateExpired',
            headerName: 'Ngày hết hạn',
        },
        {
            field: 'option',
            headerName: '',
            filter: false,
            cellRenderer: Delete,
        },
    ];

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 180,
            filter: true,
            floatingFilter: true,
            sortable: true,
            // resizable: true,
            // editable: true,
        };
    }, []);
    const [colDefs, setColDefs] = useState(columnDefs);
    const handleContextMenu = (params) => {
        setParams(params);
    };
    const repeat = async () => {
        const res = await BorrowingApi.listBorrowing();
        setBooks([
            ...res.data.map((book) => {
                return {
                    ...book,
                    option: 'Xóa',
                };
            }),
        ]);
    };
    useEffect(() => {
        BorrowingApi.listBorrowing()
            .then((res) =>
                setBooks([
                    ...res.data.map((book) => {
                        return {
                            ...book,
                            option: 'Xóa',
                        };
                    }),
                ]),
            )
            .catch((err) => console.log(err));
    }, []);
    useEffect(() => {
        if (account?.role === 'user') {
            setColDefs([
                {
                    field: 'id',
                    headerName: 'Số thứ tự',
                },
                {
                    field: 'book.name',
                    headerName: 'Tên sách',
                },
                {
                    field: 'book.author',
                    headerName: 'Tên tác giả',
                },
                {
                    field: 'book.type',
                    headerName: 'Loại sách',
                },
                {
                    field: 'book.position',
                    headerName: 'Nơi để',
                },
                {
                    field: 'dateBorrowed',
                    headerName: 'Ngày mượn',
                },
                {
                    field: 'dateExpired',
                    headerName: 'Ngày hết hạn',
                },
            ]);
        }
    }, [account]);
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
            <div className="h-100">
                <div className="ag-theme-alpine" style={{ height: 500 }}>
                    <AgGridReact
                        rowData={books}
                        defaultColDef={defaultColDef}
                        columnDefs={colDefs}
                        dataTypeDefinitions={dataTypeDefinitions}
                        onCellContextMenu={handleContextMenu}
                        onCellClicked={handleClick}
                    ></AgGridReact>
                </div>
            </div>
            <Modal show={isModal} animation centered>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Xóa sách mượn</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#F6F7FB' }} className="p-5">
                    <div className="d-flex justify-content-center">
                        <img src={imgTrash}></img>
                    </div>
                    <div className="fw-semibold mt-3 d-flex flex-column align-items-center">
                        <p>
                            <span>Mã người dùng : </span>
                            <span>{params?.data.user.id}</span>
                        </p>
                        <p>
                            <span>Người mượn : </span>
                            <span>{params?.data.user.name}</span>
                        </p>
                        <p>
                            <span>Tên sách : </span>
                            <span>{params?.data.book.name}</span>
                        </p>
                        <p>
                            <span>Tác giả : </span>
                            <span>{params?.data.book.author}</span>
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Col>
                        <button
                            style={{ background: '#E4E6EF', color: '#313C59' }}
                            className="border-light w-100 px-3 py-2 rounded-3 fw-semibold"
                            onClick={() => {
                                setIsModal(false);
                                setParams();
                            }}
                        >
                            Hủy
                        </button>
                    </Col>
                    <Col>
                        <button
                            style={{ background: '#E13853', color: '#fff', borderColor: '#BF0929' }}
                            className="w-100 px-3 py-2 rounded-3 fw-semibold"
                            onClick={handleDelete}
                        >
                            Xác nhận
                        </button>
                    </Col>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BorrowBook;
