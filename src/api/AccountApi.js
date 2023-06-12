import axiosClient from './AxiosClient';

const AccountApi = {
    createBook: (params) => {
        const url = 'book/create-book';
        return axiosClient.post(url, params);
    },
};
export default AccountApi;
