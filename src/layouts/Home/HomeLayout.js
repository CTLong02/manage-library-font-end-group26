import { Nav, Container, Navbar } from 'react-bootstrap';
import clsx from 'clsx';
import { useNavigate, useLocation } from 'react-router-dom';
import hust from '~/assets/images/hust.png';
import styles from './HomeLayout.module.scss';
function HomeLayout({ children }) {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div>
            <Navbar expand="lg" className="shadow-lg fixed-top bg-white" style={{ height: '84px' }}>
                <Container fluid="xl">
                    <div>
                        <Navbar.Brand href="/">
                            <img src={hust} className="img-fluid" style={{ height: '48px' }}></img>
                        </Navbar.Brand>
                    </div>
                    <div className="position-relative">
                        <Navbar.Toggle aria-controls="navbarScroll" className="position-relative" />
                        <Navbar.Collapse id="navbarScroll" className={styles.navCollapse}>
                            <Nav className="me-auto my-2 my-lg-0">
                                <div className={clsx(styles.navContainer, 'me-5 d-flex align-items-center')}>
                                    <div className="py-2 me-3" onClick={() => navigate('/')}>
                                        <span
                                            className={clsx(' fw-semibold fs-5', {
                                                [styles.active]: location.pathname === '/',
                                            })}
                                            role="button"
                                        >
                                            Trang chủ
                                        </span>
                                    </div>
                                    <div className="py-2 me-3" onClick={() => navigate('/search')}>
                                        <span
                                            className={clsx(' fw-semibold fs-5', {
                                                [styles.active]: location.pathname === '/search',
                                            })}
                                            role="button"
                                        >
                                            Tra cứu
                                        </span>
                                    </div>
                                    <div className="py-2 me-3" onClick={() => navigate('/contact')}>
                                        <span
                                            className={clsx(' fw-semibold fs-5', {
                                                [styles.active]: location.pathname === '/contact',
                                            })}
                                            role="button"
                                        >
                                            Liên hệ
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.btns}>
                                    <button
                                        className={clsx(styles.btnSignIn, 'me-2 rounded-1 px-2 py-2 fs-5')}
                                        onClick={() => navigate('/signIn')}
                                    >
                                        Đăng nhập
                                    </button>
                                    <button
                                        className={clsx(styles.btnSignUp, 'rounded-1 px-4 py-2 fs-5')}
                                        onClick={() => navigate('/signUp')}
                                    >
                                        Đăng ký
                                    </button>
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

export default HomeLayout;
