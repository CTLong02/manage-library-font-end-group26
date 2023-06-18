import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import clsx from 'clsx';
import styles from './CreateBorrowingBook.module.scss';
function CreateBorrowingBook() {
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState();
    const handleForm = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [`${name}`]: value,
        });
    };
    const handleSubmit = (event) => {
        const formAdd = event.currentTarget;
        event.preventDefault();
        if (formAdd.checkValidity() === false) {
            event.stopPropagation();
        } else {
        }
        setValidated(true);
    };
    return (
        <div>
            <div className="container-xl">
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                    className={clsx(
                        'd-flex col-xl-9 col-lg-10 col-md-10 col-sm-10 col-10 shadow-lg p-5 rounded-4 flex-wrap align-items-center',
                        styles.form,
                    )}
                >
                    <div className="col-12">
                        <p className="fs-5 fw-semibold ">
                            <Link to={'/book'} className="text-decoration-none">
                                Sách
                            </Link>{' '}
                            / <span>Cho mượn sách</span>
                        </p>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-4 px-3">
                        <Form.Group>
                            <Form.Label>Ngày mượn</Form.Label>
                            <Form.Control
                                required
                                placeholder="Nhập ngày mượn"
                                name="name"
                                onChange={handleForm}
                                type="date"
                            ></Form.Control>
                            <Form.Control.Feedback type="invalid">Vui lòng nhập ngày mượn</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Ngày hết hạn</Form.Label>
                            <Form.Control
                                required
                                placeholder="Nhập ngày hết hạn"
                                name="author"
                                onChange={handleForm}
                                type="date"
                            ></Form.Control>
                            <Form.Control.Feedback type="invalid">Vui lòng nhập ngày hết hạn</Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-4 px-3">
                        <Form.Group>
                            <Form.Label>Sinh viên : </Form.Label>
                            <Form.Control
                                required
                                placeholder="Nhập thông tin sinh viên"
                                name="position"
                                onChange={handleForm}
                            ></Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Vui lòng nhập thông tin sinh viên
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mã sách</Form.Label>
                            <Form.Control
                                placeholder="Nhập mã sách"
                                name="remaining"
                                required
                                onChange={handleForm}
                            ></Form.Control>
                            <Form.Control.Feedback type="invalid">Vui lòng nhập mã sách</Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-4 px-3">
                        <Button className={styles.btnAdd} type="submit">
                            Thêm
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default CreateBorrowingBook;
