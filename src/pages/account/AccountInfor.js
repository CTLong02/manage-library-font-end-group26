import { Row, Col, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styles from './AccountInfor.module.scss';
function AccountInfor() {
    const account = useSelector((state) => state.app.account);
    return (
        <div className="py-5">
            <div className="container-xl p-3 shadow-lg border rounded-3" style={{ backgroundColor: '#f3f6f9' }}>
                <Form className={styles.formInfor}>
                    <Row>
                        <Col lg={6} xl={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Họ tên</Form.Label>
                                <Form.Control value={account?.name} disabled></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col lg={6} xl={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={account?.email} disabled></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col lg={6} xl={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Lớp</Form.Label>
                                <Form.Control value={account?.class} disabled></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col lg={6} xl={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Khoa</Form.Label>
                                <Form.Control value={account?.faculty} disabled></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col lg={6} xl={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Số sách mượn</Form.Label>
                                <Form.Control value={account?.bookBorrowed} disabled></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
}

export default AccountInfor;
