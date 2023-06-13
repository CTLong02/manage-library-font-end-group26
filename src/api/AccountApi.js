import axiosClient from './AxiosClient';

const AccountApi = {
    createBook: (params) => {
        const url = 'book/create-book';
        return axiosClient({
            method: 'post',
            url: url,
            headers: { 'Content-Type': 'multipart/form-data' },
            data: params,
        });
    },
};
export default AccountApi;
