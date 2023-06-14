import axiosClient from './AxiosClient';

const BookApi = {
    createBook: (params) => {
        const url = 'book/create-book';
        return axiosClient({
            method: 'post',
            url: url,
            headers: { 'Content-Type': 'multipart/form-data' },
            data: params,
        });
    },
    getBooks: () => {
        const url = 'book/list-book';
        return axiosClient.get(url);
    },
};
export default BookApi;
