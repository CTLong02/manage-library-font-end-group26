import { Row, Col } from 'react-bootstrap';
import clsx from 'clsx';
import PieChart from 'highcharts-react-official';
import Highchart from 'highcharts';
import styles from './Dashboard.module.scss';
import BookApi from '~/api/BookApi';
import './Dashboard.css';
import { useEffect, useState } from 'react';
import BorrowingApi from '~/api/BorrowingApi';
import bookHelper from '~/utils/bookHelper';
function DashBoard() {
    const [history, setHistory] = useState();
    const [books, setBooks] = useState({
        curriculum: 0,
        gradutionThesis: 0,
        referenceBook: 0,
        magazine: 0,
        scienceTopic: 0,
    });
    const [booksByType, setBooksByType] = useState({
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
                        y: booksByType.curriculum,
                        dataLabels: {
                            enabled: true,
                            distance: -20,
                            format: '{point.percentage:.1f}%',
                        },
                    },
                    {
                        name: 'Đồ án tốt nghiệp',
                        y: booksByType.gradutionThesis,
                        dataLabels: {
                            enabled: true,
                            distance: -20,
                            format: '{point.percentage:.1f}%',
                        },
                    },
                    {
                        name: 'Sách tham khảo',
                        y: booksByType.referenceBook,
                        dataLabels: {
                            enabled: true,
                            distance: -20,
                            format: '{point.percentage:.1f}%',
                        },
                    },
                    {
                        name: 'Tạp chí',
                        y: booksByType.magazine,
                        dataLabels: {
                            enabled: true,
                            distance: -20,
                            format: '{point.percentage:.1f}%',
                        },
                    },
                    {
                        name: 'Đề tài khoa học',
                        y: booksByType.scienceTopic,
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
    const option2 = {
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
                fontWeight: 500,
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
    const options3 = {
        chart: {
            type: 'spline',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            height: 458,
            scrollablePlotArea: {
                scrollPositionX: 1,
            },
        },
        title: {
            text: null,
        },
        yAxis: {},
        colors: ['#E13853', '#2CBE89', '#FA9124', '#2C78BE'],
        xAxis: {
            categories: history
                ? history.map((item) => {
                      return item.time;
                  })
                : [],
            labels: {
                step: 1,
                rotation: history?.length > 10 ? 315 : 0,
                align: history?.length > 10 ? 'right' : 'center',
            },
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            itemStyle: {
                color: '#3f4254',
                fontSize: '12px',
                fontWeight: 500,
            },
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false,
                },
            },
        },

        series: [
            {
                name: 'Mượn',
                data: history
                    ? history.map((ele) => {
                          return ele.borrowedBooks;
                      })
                    : [],
                marker: {
                    symbol: 'circlec',
                },
            },
            {
                name: 'Hết hạn',
                data: history
                    ? history.map((ele) => {
                          return ele.expiredBooks;
                      })
                    : [],
                marker: {
                    symbol: 'circle',
                },
            },
            // {
            //     name: 'Chưa hoàn thành',
            //     data: history
            //         ? history.map((ele) => {
            //               return ele.notCompleted;
            //           })
            //         : [],
            //     marker: {
            //         symbol: 'circle',
            //     },
            // },
            // {
            //     name: 'Hủy bỏ',
            //     data: history
            //         ? history.map((ele) => {
            //               return ele.canceled;
            //           })
            //         : [],
            //     marker: {
            //         symbol: 'circle',
            //     },
            // },
        ],

        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 768,
                    },
                    chartOptions: {
                        xAxis: {
                            labels: {
                                step: 1,
                            },
                        },
                    },
                },
            ],
        },
    };
    useEffect(() => {
        BookApi.getBooks().then((res) => {
            setBooksByType({
                curriculum: res.data.filter((book) => {
                    return book.type.toLowerCase() === 'giáo trình';
                }).length,
                gradutionThesis: res.data.filter((book) => {
                    return book.type.toLowerCase() === 'đồ án tốt nghiệp';
                }).length,
                referenceBook: res.data.filter((book) => {
                    return book.type.toLowerCase() === 'sách tham khảo';
                }).length,
                magazine: res.data.filter((book) => {
                    return book.type.toLowerCase() === 'tạp chí';
                }).length,
                scienceTopic: res.data.filter((book) => {
                    return book.type.toLowerCase() === 'đề tài khoa học';
                }).length,
            });
        });
    }, []);
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
    const dateVNToGlobal = (s) => {
        const date = new Date();
        date.setFullYear(s.slice(6, 10));
        date.setMonth(s.slice(3, 5) - 1);
        date.setDate(s.slice(0, 2));
        return date;
    };
    useEffect(() => {
        BorrowingApi.listBorrowing()
            .then((res) => {
                const arr = bookHelper.countBookByDate(0, Date.now(), res.data);
                arr.sort((a, b) => {
                    const timeA = dateVNToGlobal(a.time);
                    const timeB = dateVNToGlobal(b.time);
                    return timeA - timeB;
                });
                setHistory([...arr]);
            })
            .catch((err) => console.log(err));
    }, []);
    // console.log(history);
    return (
        <div className={styles.dashboard}>
            <div className="container-xl p-4">
                <Row>
                    <Col lg={4} className="mt-3">
                        <div className="mx-3 p-3 bg-white">
                            <p className="fs-5 fw-bold">Thống kê loại sách</p>
                            <PieChart highcharts={Highchart} options={option1}></PieChart>
                        </div>
                        <div className="mx-3 p-3 mt-3 bg-white">
                            <p className="fs-5 fw-bold">Thống kê số sách theo loại sách</p>
                            <div>
                                <PieChart highcharts={Highchart} options={option2}></PieChart>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8} className="mt-3">
                        <div className="mx-3 p-3 h-100 bg-white">
                            <p className="fs-5 fw-bold">Thống kê sách mượn và hết hạn theo ngày</p>
                            <PieChart highcharts={Highchart} options={options3}></PieChart>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default DashBoard;
