import axiosClient from './AxiosClient';

const BorrowingApi = {
    createBorrowing: (params) => {
        const url = 'borrowing/create-borrowing';
        return axiosClient.post(url, params);
    },
    listBorrowing: (params) => {
        const url = 'borrowing/list-borrowing';
        return axiosClient.get(url);
    },
    delelteBorrowing: (params) => {
        const url = 'borrowing/delete-borrowing';
        return axiosClient.delete(url, params);
    },
};
export default BorrowingApi;
