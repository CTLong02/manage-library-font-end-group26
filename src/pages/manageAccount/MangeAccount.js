import { useEffect, useState } from 'react';
import Styles from './ManageAccount.module.scss';
import UserApi from '~/api/UserApi';
function ManageAccount() {
    const [lisUser, setListUser] = useState([]);
    useEffect(() => {
        UserApi.getListUser().then((res) => {
            setListUser([
                ...res.data.filter((user, index) => {
                    return user.role === 'user';
                }),
            ]);
        });
    }, []);
    return <div></div>;
}

export default ManageAccount;
