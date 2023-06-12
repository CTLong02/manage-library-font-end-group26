import { Nav, Container, Navbar, Dropdown } from 'react-bootstrap';
import clsx from 'clsx';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '~/store/appSlice';
import hust from '~/assets/images/hust.png';
import styles from './LayoutDashboard.module.scss';
function LayoutDashboard({ children }) {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(signOut());
        navigate('/');
    };
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
                                            <span
                                                className={clsx('fw-semibold fs-5', {
                                                    [styles.active]: location.pathname === '/dashboard',
                                                })}
                                                role="button"
                                            >
                                                Tổng quan
                                            </span>
                                        </div>
                                        <div className="py-2 me-3" onClick={() => navigate('/manage')}>
                                            <span
                                                className={clsx('fw-semibold fs-5', {
                                                    [styles.active]: location.pathname === '/manage',
                                                })}
                                                role="button"
                                            >
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
                                <Dropdown.Menu align={'end'} className={clsx(styles.menu, 'border-0 shadow-lg')}>
                                    <Dropdown.Item className={styles.item}>Chu Thiện Long</Dropdown.Item>
                                    <Dropdown.Item className={styles.item}>IT01-K65</Dropdown.Item>
                                    <Dropdown.Item className={clsx(styles.item, 'border-0')}>
                                        <button
                                            className={clsx(styles.btnSignOut, 'rounded-3 px-3 py-1 ')}
                                            onClick={handleSignOut}
                                        >
                                            <i className="fa-regular fa-right-from-bracket me-2"></i>
                                            Đăng xuất
                                        </button>
                                    </Dropdown.Item>
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
