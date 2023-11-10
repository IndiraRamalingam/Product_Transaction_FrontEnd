import React, { useContext,useEffect } from 'react'
import instance from '../services/instance';
import { Table } from 'react-bootstrap';
import AppContext from './AppContext';


function Statistics() {
  const{
    month,
    sale,setSale,
    saleCount,setSaleCount,
    saleNotCount,setSaleNotCount}=useContext(AppContext);

  useEffect(() => {
    getDataByMonth(month)
  }, [month])

  const getDataByMonth = async (month) => {
    try {
      const response = await instance.authInstance.get(`/statistics/${month}`);
      const res=response.data
      setSale(res.Amount)
      setSaleCount(res.Total_Sale_Count)
      setSaleNotCount(res.Total_Not_Sale_Count)
    }
    catch (error) {
      console.log("Error in fetching Data ", error)
    }
  }

  return (
   <>
     <div className="container">
        <div className='headStyle'>
          <h1 className="mt-5 mr-5" style={{ color: "rgb(92 209 39)", 'fontWeight': 'bolder', 'textAlign': 'center', fontStyle: 'italic' }}>Transaction Statistics <span style={{ fontSize: '25px', fontStyle: 'italic', color: '#2cdbcb', 'textAlign': 'center' }}>- {month}</span></h1>
        </div>
        <hr />
        <div className='contianer m-5'>
          <div className='row g-4'>
          <div className="table-responsive text-nowrap">
                    <Table striped>
                      <tbody style={{}}>
                        <tr>
                          <td style={{fontWeight:'bold',textAlign:'center'}}>Total Sale</td>
                          <td>{sale}</td>
                        </tr>
                        <tr>
                          <td style={{fontWeight:'bold',textAlign:'center'}}>Total Sold Item</td>
                          <td>{saleCount}</td>
                        </tr>
                        <tr>
                          <td style={{fontWeight:'bold',textAlign:'center'}}>Total Not Sold Item</td>
                          <td>{saleNotCount}</td>
                        </tr>
                        </tbody>
                      </Table>
                      </div>
          </div>
          </div>
          </div>
   </>
  )
}

export default Statistics