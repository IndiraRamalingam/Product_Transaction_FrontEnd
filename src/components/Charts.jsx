import React, { useContext, useEffect, useState } from 'react'
import instance from '../services/instance';
import AppContext from './AppContext';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Charts() {
  const { month } = useContext(AppContext)
  const [count0, setCount0] = useState('');
  const [count1, setCount1] = useState('');
  const [count2, setCount2] = useState('');
  const [count3, setCount3] = useState('');
  const [count4, setCount4] = useState('');
  const [count5, setCount5] = useState('');
  const [count6, setCount6] = useState('');
  const [count7, setCount7] = useState('');
  const [count8, setCount8] = useState('');
  const [count9, setCount9] = useState('');
  const [category0, setCategory0] = useState('');
  const [category1, setCategory1] = useState('');
  const [category2, setCategory2] = useState('');
  const [category3, setCategory3] = useState('');

  useEffect(() => {
    getBarData();
    getPieData();
  }, [month])

  const getBarData = async () => {
    try {
      const response = await instance.authInstance.get(`/barChart/${month}`);
      const res = response.data;
      setCount0(res.b_count0), setCount1(res.b_count1), setCount2(res.b_count2),
      setCount3(res.b_count3), setCount4(res.b_count4), setCount5(res.b_count5)
      setCount6(res.b_count6), setCount7(res.b_count7), setCount8(res.b_count8), setCount9(res.b_count9)
    }
    catch (error) {
      console.log("Error in fetching price range count ", error)
    }
  }

  const getPieData = async () => {
    try {
      const response = await instance.authInstance.get(`/pieChart/${month}`);
      const res = response.data;
      setCategory0(res.count0), setCategory1(res.count1),
      setCategory2(res.count2), setCategory3(res.count3)
    }
    catch (error) {
      console.log("Error in fetching products category", error)
    }
  }

  //For Bar Chart
  const data1 = {
    labels: ['0-100', '101-200', '201-300', '301-400', '401-500', '501-600', '601-700', '701-800', '801-900', '901-above'],
    datasets: [
      {
        label: 'Price_Range_Count',
        data: [count0, count1, count2, count3, count4, count5, count6, count7, count8, count9],
        borderColor: ['rgba(255,206,86,0.2)'],
        backgroundColor: ['rgba(232,99,132,1)',
          'rgba(232,211,6,1)',
          'rgba(54,162,235,1)',
          'RGB(40, 167, 69)',
          '	RGB(249, 203, 82)',
          '	RGB(180, 75, 161)',
        ],
        pointBackgroundColor: 'rgba(255,206,86,0.2)',
      }

    ]
  }
  const options1 = {
    maintainaspectratio: false,
    plugins: {
      title: {
        display: true,
        text: 'Bar Chart Stats',
        color: '#301091',
        font: {
          size: 34
        },
        padding: {
          top: 30,
          bottom: 30
        },
        responsive: true,
        animation: {
          animateScale: true,
        },
      }
    }
  }

  //For Pie Chart
  const data = {
    labels: ["Men's Clothing", "Jewellery", "Electronics", "Women's Clothing"],
    datasets: [
      {
        label: 'Category_Count',
        data: [category0, category1, category2, category3],
        borderColor: ['rgba(255,206,86,0.2)'],
        backgroundColor: ['rgba(232,99,132,1)',
          'rgba(232,211,6,1)',
          'rgba(54,162,235,1)',
          'RGB(40, 167, 69)',
          '	RGB(249, 203, 82)',
          '	RGB(180, 75, 161)',
        ],
        pointBackgroundColor: 'rgba(255,206,86,0.2)',
      }

    ]
  }
  const options = {
    maintainaspectratio: false,
    plugins: {
      title: {
        display: true,
        text: 'Pie Chart Stats',
        color: '#301091',
        font: {
          size: 34
        },
        padding: {
          top: 30,
          bottom: 30
        },
        responsive: true,
        animation: {
          animateScale: true,
        },
      }
    }
  }

  return (
    <>
      <div className="container">
        <div className='headStyle'>
          <h1 className="mt-5 mr-5" style={{ color: "rgb(92 209 39)", 'fontWeight': 'bolder', 'textAlign': 'center', fontStyle: 'italic' }}>Transaction Chart Stats <span style={{ fontSize: '25px', fontStyle: 'italic', color: '#2cdbcb', 'textAlign': 'center' }}>- {month}</span></h1>
        </div>
        <hr />
        <div className='contianer m-5'>

          {/* For Bar Chart */}
          <div className='row g-4 mb-5'>
            <div className='col-sm-2'></div>
            <div className='col-sm-8'>
              <div className='dough'>
                <Bar data={data1} options={options1} />
              </div>
            </div>
            <div className='col-sm-2'></div>
          </div>
          <hr />

          {/* For Pie Chart */}
          <div className='row g-4'>
            <div className='col-sm-3'></div>
            <div className='col-sm-6'>
              <div className='dough'>
                <Pie data={data} options={options} />
              </div>
            </div>
            <div className='col-sm-3'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Charts