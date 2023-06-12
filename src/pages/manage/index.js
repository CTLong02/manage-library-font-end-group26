import { Routes, Route } from 'react-router-dom';
import Manage from './Manage';
import CreateBook from './pages/CreateBook';
function ManageRouter() {
    return (
        <Routes>
            <Route path="/" element={<Manage></Manage>}></Route>
            <Route path="/createBook" element={<CreateBook></CreateBook>}></Route>
        </Routes>
    );
}

export default ManageRouter;
