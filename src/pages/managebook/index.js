import { Routes, Route } from 'react-router-dom';
import Manage from './Manage';
import CreateBook from './pages/CreateBook';
import ViewAll from './pages/ViewAll';
function ManageRouter() {
    return (
        <Routes>
            <Route path="/" element={<Manage></Manage>}></Route>
            <Route path="/createBook" element={<CreateBook></CreateBook>}></Route>
            <Route path="/viewAllBooks" element={<ViewAll></ViewAll>}></Route>
        </Routes>
    );
}

export default ManageRouter;
