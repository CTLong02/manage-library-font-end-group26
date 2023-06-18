import { Row, Col } from 'react-bootstrap';
import clsx from 'clsx';
import PieChart from 'highcharts-react-official';
import Highchart from 'highcharts';
import styles from './Dashboard.module.scss';
import BookApi from '~/api/BookApi';
import './Dashboard.css';
import { useEffect, useState } from 'react';
function DashBoard() {
    const [books, setBooks] = useState({
        curriculum: 0,
        gradutionThesis: 0,
        referenceBook: 0,
        magazine: 0,
        scienceTopic: 0,
    });
    const option1 = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            style: {
                'font-family': ' Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen',
            },
            height: 200,
        },
        title: {
            text: null,
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}%</b>',
        },
        accessibility: {
            point: {
                valueSuffix: '%',
            },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                },
                showInLegend: true,
            },
        },
        colors: ['#2C78BE', '#FA9124', '#2CBE89', '#E13853', '#ccc'],
        legend: {
            verticalAlign: 'middle',
            layout: 'vertical',
            align: 'right',
            enabled: true,
            useHTML: true,
            itemMarginBottom: 8,
            labelFormatter: function () {
                return this.name + '<span>' + this.y + '</span>';
            },
            itemStyle: {
                color: '#3f4254',
                fontSize: '12px',
            },
            title: {
                style: {
                    'font-family': ' Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen',
                },
            },
        },
        series: [
            {
                color: '#fff',
                colorByPoint: true,

                data: [
                    {
                        name: 'Giáo trình',
                        y: books.curriculum,
                        dataLabels: {
                            enabled: true,
                            distance: -20,
                            format: '{point.percentage:.1f}%',
                        },
                    },
                    {
                        name: 'Đồ án tốt nghiệp',
                        y: books.gradutionThesis,
                        dataLabels: {
                            enabled: true,
                            distance: -20,
                            format: '{point.percentage:.1f}%',
                        },
                    },
                    {
                        name: 'Sách tham khảo',
                        y: books.referenceBook,
                        dataLabels: {
                            enabled: true,
                            distance: -20,
                            format: '{point.percentage:.1f}%',
                        },
                    },
                    {
                        name: 'Tạp chí',
                        y: books.magazine,
                        dataLabels: {
                            enabled: true,
                            distance: -20,
                            format: '{point.percentage:.1f}%',
                        },
                    },
                    {
                        name: 'Đề tài khoa học',
                        y: books.scienceTopic,
                        dataLabels: {
                            enabled: true,
                            distance: -20,
                            format: '{point.percentage:.1f}%',
                        },
                    },
                ],
            },
        ],
    };
    useEffect(() => {
        BookApi.getBooks().then((res) => {
            setBooks({
                curriculum: res.data
                    .filter((book) => {
                        return book.type.toLowerCase() === 'giáo trình';
                    })
                    .reduce((acc, current) => {
                        return acc + current.remaining;
                    }, 0),
                gradutionThesis: res.data
                    .filter((book) => {
                        return book.type.toLowerCase() === 'đồ án tốt nghiệp';
                    })
                    .reduce((acc, current) => {
                        return acc + current.remaining;
                    }, 0),
                referenceBook: res.data
                    .filter((book) => {
                        return book.type.toLowerCase() === 'sách tham khảo';
                    })
                    .reduce((acc, current) => {
                        return acc + current.remaining;
                    }, 0),
                magazine: res.data
                    .filter((book) => {
                        return book.type.toLowerCase() === 'tạp chí';
                    })
                    .reduce((acc, current) => {
                        return acc + current.remaining;
                    }, 0),
                scienceTopic: res.data
                    .filter((book) => {
                        return book.type.toLowerCase() === 'đề tài khoa học';
                    })
                    .reduce((acc, current) => {
                        return acc + current.remaining;
                    }, 0),
            });
        });
    }, []);
    return (
        <div className={styles.dashboard}>
            <div className="container-xl p-4">
                <Row>
                    <Col lg={4} className="mx-3 bg-white">
                        <div>
                            <p className="fs-3 fw-semibold">Thống kê loại sách</p>
                        </div>
                        <div>
                            <p className="fs-3 fw-semibold">Thống kê số sách theo loại sách</p>
                            <div>
                                <PieChart highcharts={Highchart} options={option1}></PieChart>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8} className="mx-3 bg-white"></Col>
                </Row>
            </div>
        </div>
    );
}

export default DashBoard;
