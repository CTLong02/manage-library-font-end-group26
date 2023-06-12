import styles from './CreateBooj.module.scss';
import AccountApi from '~/api/AccountApi';
import { Button, Form } from 'react-bootstrap';
import clsx from 'clsx';
import { useState } from 'react';
function CreateBook() {
    const [form, setForm] = useState({
        name: '',
        author: '',
        type: 'Giáo trình',
        position: '',
        remaining: '',
        book: null,
        image: null,
    });
    const handleForm = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [`${name}`]: value,
        });
    };
    const handleFormByFile = (event) => {
        const { name } = event.target;
        const fileData = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        setForm({
            ...form,
            [name]: fileData,
        });
    };
    console.log('form----', form);
    const handleCreateBook = () => {
        const res = AccountApi.createBook({
            ...form,
        });
        console.log(res);
    };
    return (
        <div className="d-flex justify-content-center align-content-center py-5">
            <Form className={clsx('col-xl-3 col-lg-4 col-md-5 col-sm-8 col-10 shadow-lg p-5 rounded-4', styles.form)}>
                <Form.Group>
                    <Form.Label>Tên sách:</Form.Label>
                    <Form.Control placeholder="Nhập tên sách" name="name" onChange={handleForm}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tên tác giả:</Form.Label>
                    <Form.Control placeholder="Nhập tên tác giả" name="author" onChange={handleForm}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Loại sách:</Form.Label>
                    <Form.Select onChange={handleForm} name="type">
                        <option value={'Giáo trình'}>Giáo trình</option>
                        <option value={'Đồ án tốt nghiệp'}>Đồ án tốt nghiệp</option>
                        <option value={'Sách tham khảo'}>Sách tham khảo</option>
                        <option value={'Tạp chí'}>Tạp chí</option>
                        <option value={'Đề tài khoa học'}>Đề tài khoa học</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nơi để:</Form.Label>
                    <Form.Control placeholder="Nhập nơi để" name="position" onChange={handleForm}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Số sách còn:</Form.Label>
                    <Form.Control
                        placeholder="Nhập số sách còn"
                        type="number"
                        min={0}
                        name="remaining"
                        onChange={handleForm}
                    ></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>File sách:</Form.Label>
                    <Form.Control type="file" name="book" onChange={handleFormByFile}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Ảnh bìa sách</Form.Label>
                    <Form.Control type="file" name="image" onChange={handleFormByFile}></Form.Control>
                </Form.Group>
                <Button className={styles.btnAdd} onClick={handleCreateBook}>
                    Thêm
                </Button>
            </Form>
        </div>
    );
}

export default CreateBook;
