import { AgGridReact } from 'ag-grid-react';
import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookApi from '~/api/BookApi';
function ViewAllBooks() {
    const [books, setBooks] = useState([]);
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
            headerName: 'Số quyển sách còn  ',
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
