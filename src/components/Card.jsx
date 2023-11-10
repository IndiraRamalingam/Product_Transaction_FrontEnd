import React, { useContext, useEffect } from 'react'
import instance from '../services/instance';
import AppContext from './AppContext';
function Cards() {

  const options = [
    { value: '', text: '--Choose an option--' },
    { value: 'January', text: 'January' },
    { value: 'February', text: 'February' },
    { value: 'March', text: 'March' },
    { value: 'April', text: 'April' },
    { value: 'May', text: 'May' },
    { value: 'June', text: 'June' },
    { value: 'July', text: 'July' },
    { value: 'August', text: 'August' },
    { value: 'September', text: 'September' },
    { value: 'October', text: 'October' },
    { value: 'November', text: 'November' },
    { value: 'December', text: 'December' },
  ];

  const { product, setProduct,
    month, setMonth,
    word, setWord,
    msg, setMsg } = useContext(AppContext);

  useEffect(() => {
    getDataByMonth(month)
    setMsg('')
  }, [month])

  const getDataByMonth = async (month) => {
    try {
      const response = await instance.authInstance.get(`/by_month/${month}`);
      setProduct(response.data)
      setMsg('')
    }
    catch (error) {
      console.log("Error in fetching Data ", error)
    }
  }

  const getDataByWord = async (word, month) => {
    try {
      const response = await instance.authInstance.get(`/by_search/${word}/${month}`);
      const len = response.data.length;
      if (len !== 0) {
        setProduct(response.data)
        setMsg(''), setWord('')
      }
      else {
        setMsg('No matching records found.')
      }
    }
    catch (error) {
      console.log("Error in fetching Data ", error)
    }
  }

  const handleChange = event => {
    setMsg('')
    setMonth(event.target.value);
  };

  const handleWordChange = () => {
    setMsg('')
    getDataByWord(word, month)
  }


  return (
    <>
      <div className="container">
        <div className='headStyle'>
          <h1 className="mt-4 mr-5" style={{ color: "rgb(92 209 39)", 'fontWeight': 'bolder', 'textAlign': 'center', fontStyle: 'italic' }}>Transaction Dashboard <span style={{ fontSize: '25px', fontStyle: 'italic', color: '#2cdbcb', 'textAlign': 'center' }}>- {month}</span></h1>
        </div>
        <hr />
        <div className='contianer m-5'>
          <div className='row g-4'>

            {/* Search bar for title */}
            <div className='col-sm-8 mb-3' style={{ 'display': 'flex' }}>
              <input type="text" className="form-control form-control-lg"
                value={word}
                placeholder='Search by Title or Description...'
                onChange={(event) => setWord(event.target.value)}
              />
              <button className='btn btn-lg btn-primary' onClick={handleWordChange}><i class="fa fa-search"></i></button>

            </div>


            {/* Dropdown for month */}
            <div className='col-sm-4 mb-3 text-center'>
              <select type="button" class="btn btn-secondary btn-lg" value={month} onChange={handleChange}>
                {options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>

          </div>

          <p style={{ color: 'red' }}>{msg}</p>
          <div className="row g-4">
            {product.map((p, i) => {
              $(function () {
                $('[data-toggle="popover"]').popover()
              })

              $('.popover-dismiss').popover({
                trigger: 'focus'
              })

              return (
                <>
                  <div className="col-md-4 mt-5 mb-5">
                    <div className="card border-success h-100 text-center p-4" key={i}>
                      <img src={p.image} className="card-img-top" alt={p.title} height="250px" />
                      <div className="card-body">
                        <h5 className="card-title mb-0 mt-2 mb-2 fst-italic" style={{ color: 'rgb(6 248 20)' }}>{p.title.substring(0, 50)}...</h5>
                        <p className="card-text fs-5 fw-bold fst-italic" style={{ color: 'rgb(33 13 233)' }}>
                          Price: ₹{p.price}
                        </p>
                        <p className="card-text fs-6 fw-bold fst-italic" style={{ color: 'rgb(33 13 233)' }}>
                          Category: {p.category}
                        </p>
                        <button type="button" className="btn btn-success" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content={p.description}>
                          Description
                        </button>

                      </div>
                    </div>
                  </div>
                </>
              )

            })}
          </div>
        </div>
      </div>


    </>
  )
}

export default Cards