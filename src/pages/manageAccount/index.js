import { Routes, Route } from 'react-router-dom';
import ManageAccount from './MangeAccount';

function ManageAccountRouter() {
    return (
        <Routes>
            <Route path="/" element={<ManageAccount></ManageAccount>}></Route>
        </Routes>
    );
}

export default ManageAccountRouter;
