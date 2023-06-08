import { Nav, Container, Navbar, Dropdown } from 'react-bootstrap';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import hust from '~/assets/images/hust.png';
import styles from './LayoutDashboard.module.scss';
function LayoutDashboard({ children }) {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar expand="lg" className="shadow-lg fixed-top bg-white" style={{ height: '84px' }}>
                <div className="container-xl">
                    <div>
                        <Navbar.Brand href="/dashboard">
                            <img src={hust} className="img-fluid" style={{ height: '48px' }}></img>
                        </Navbar.Brand>
                    </div>
                    <div className="d-flex align-items-center position-relative">
                        <div className={clsx(styles.nav, 'border-end border-3')}>
                            <Navbar.Toggle aria-controls="navbarScroll" className={styles.navToggle} />
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
                        <div className={styles.user}>
                            <Dropdown>
                                <Dropdown.Toggle className="border-0 bg-transparent">
                                    <i className="fa-regular fa-user text-secondary fs-3"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu align={'end'}>
                                    <Dropdown.Item>Chu Thiện Long</Dropdown.Item>
                                    <Dropdown.Item>IT01-K65</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </Navbar>
            <div style={{ marginTop: '84px' }}>{children}</div>
        </div>
    );
}

export default LayoutDashboard;
