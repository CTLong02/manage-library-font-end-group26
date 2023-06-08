import { Nav, Container, Navbar } from 'react-bootstrap';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import hust from '~/assets/images/hust.png';
import styles from './LayoutDashboard.module.scss';
function LayoutDashboard({ children }) {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar expand="lg" className="shadow-lg fixed-top bg-white" style={{ height: '84px' }}>
                <Container fluid="xl">
                    <div>
                        <Navbar.Brand href="/dashboard">
                            <img src={hust} className="img-fluid" style={{ height: '48px' }}></img>
                        </Navbar.Brand>
                    </div>
                    <div className="position-relative">
                        <Navbar.Toggle aria-controls="navbarScroll" className="position-relative" />
                        <Navbar.Collapse id="navbarScroll" className={styles.navCollapse}>
                            <Nav className="me-auto my-2 my-lg-0">
                                <div className={clsx(styles.navContainer, 'me-5 d-flex align-items-center')}>
                                    <div className="py-2 me-3" onClick={() => navigate('/dashboard')}>
                                        <span className=" fw-semibold fs-5" role="button">
                                            Tổng quan
                                        </span>
                                    </div>
                                    <div className="py-2 me-3" onClick={() => navigate('/manage')}>
                                        <span className="fw-semibold fs-5" role="button">
                                            Quản lý sách
                                        </span>
                                    </div>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
            <div style={{ marginTop: '84px' }}>{children}</div>
        </div>
    );
}

export default LayoutDashboard;
