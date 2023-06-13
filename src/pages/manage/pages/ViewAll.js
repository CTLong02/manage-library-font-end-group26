import { Dropdown } from 'react-bootstrap';
import styles from './ViewAll.module.scss';
import clsx from 'clsx';
function ViewAll() {
    return (
        <div className="min-vh-100" style={{ backgroundColor: '#eff1f5' }}>
            <div className="container-xl">
                <div className="d-flex align-items-center px-4 py-3 justify-content-between">
                    <span>Chí Hiếu ngu</span>
                    <div className="d-flex align-items-center">
                        <div className="bg-white px-3 py-2 rounded-3">
                            <i className="fa-regular fa-magnifying-glass me-2"></i>
                            <input className={clsx('border-0', styles.inputSearch)}></input>
                        </div>
                        <div>
                            <span>Tác giả:</span>
                            <Dropdown className="d-inline">
                                <Dropdown.Toggle className="bg-transparent text-secondary border-secondary fw-semibold">
                                    Tất cả
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div>
                            <span>Loại sách:</span>
                            <Dropdown className="d-inline">
                                <Dropdown.Toggle className="bg-transparent text-secondary border-secondary fw-semibold">
                                    Tất cả
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewAll;
