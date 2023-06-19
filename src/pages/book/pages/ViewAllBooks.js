import { AgGridReact } from 'ag-grid-react';
import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookApi from '~/api/BookApi';
import toasts from '~/app/components/Toast';
function ViewAllBooks() {
    const [books, setBooks] = useState([]);
    const handleUpdate = (event) => {
        const res = BookApi.updateBook({
            id: event.data.id,
            remaining: event.newValue,
        });
        if (res) {
            toasts.showSuccess('Bạn đã cập nhập sách thành công');
        }
    };
    const columnDefs = [
        {
            field: 'id',
            headerName: 'Số thứ tự',
        },
        {
            field: 'name',
            headerName: 'Tên sách',
        },
        {
            field: 'author',
            headerName: 'Tên tác giả',
        },
        {
            field: 'type',
            headerName: 'Loại sách',
        },

        {
            field: 'position',
            headerName: 'Vị trí để sách',
        },
        {
            field: 'remaining',
            editable: true,
            headerName: 'Số quyển sách còn',
            onCellValueChanged: handleUpdate,
        },
    ];
    const [colDefs, setColDefs] = useState(columnDefs);
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
    useEffect(() => {
        BookApi.getBooks().then((res) => {
            setBooks([...res.data]);
        });
    }, []);

    return (
        <div className="container-xl py-5">
            <div>
                <p className="fs-5 fw-semibold">
                    <Link to={'/book'} className="text-decoration-none">
                        Sách
                    </Link>{' '}
                    / <span>Xem tất cả</span>
                </p>
            </div>
            <div className="h-100">
                <div className="ag-theme-alpine" style={{ height: 500 }}>
                    <AgGridReact
                        rowData={books}
                        columnDefs={colDefs}
                        defaultColDef={defaultColDef}
                        dataTypeDefinitions={dataTypeDefinitions}
                    ></AgGridReact>
                </div>
            </div>
        </div>
    );
}

export default ViewAllBooks;
