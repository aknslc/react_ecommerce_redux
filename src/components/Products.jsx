import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

export default function Products() {

  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [datafilter, setDataFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;



  useEffect(() => {
    getData();

  }, [])

  // api data
  const getData = async () => {

    setLoading(true)
    const response = await fetch('https://fakestoreapi.com/products/');

    if (componentMounted) {
      const JsonData = await response.json();
      setData(JsonData);
      setDataFilter(JsonData);
      setLoading(false);
    }

    return () => componentMounted = false;

  };


  const dataFiltering = (e) => {
    const updatedList = data.filter((x) => e.target.value === x.category);

    setDataFilter(updatedList);
    if (e.target.value === "All") {
      setDataFilter(data);
    };

  }


  // filter price

  const filterPrice = (e) => {
    const updatedPriceList = data.filter((x) => x.price < e.target.value);
    setDataFilter(updatedPriceList);


  }


  const Loading = () => {
    return (
      <div className='mx-auto my-auto'>
        <Grid container className=''>
          {(loading ? Array.from(new Array(4)) : data).map((item, index) => (
            <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
              {item ? (
                <img
                  style={{ width: 210, height: 118 }}
                  alt={item.title}
                  src={item.src}
                />
              ) : (
                <Skeleton variant="rectangular" width={210} height={118} />
              )}

              {item ? (
                <Box sx={{ pr: 2 }}>
                  <Typography gutterBottom variant="body2">
                    {item.title}
                  </Typography>
                  <Typography display="block" variant="caption" color="text.secondary">
                    {item.channel}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {`${item.views} • ${item.createdAt}`}
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              )}
            </Box>
          ))}
        </Grid>
      </div>
    )
  }


  const ShowProduct = () => {
    return (
      <div className='grid grid-cols-4 justify-items-center gap-y-4'>

        {datafilter.map(product => {

          const addToCart = () => {

            setOpen(true);
          }

          const handleClose = (reason) => {
            if (reason === 'clickaway') {
              return;
            }

            setOpen(false);
          };

          const action = (
            <React.Fragment>
              <Button color="info" size="small" onClick={handleClose}></Button>
              <IconButton
                size="small"
                aria-label="close"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          );

          return (

            <div className='card flex flex-col justify-center items-center w-52 p-2 gap-y-3' key={product.id} >
              <img className='h-[230px]' src={product.image} alt="" />
              <p className='text-center'>{product.title.substring(0, 10)}</p>
              <p className='text-center'>${product.price}</p>
              <button onClick={addToCart} className='hover:bg-gray-500 hover:text-white text-md font-medium border-2 p-2 rounded-md text-gray-700 transition-colors duration-200'>Buy Now</button>
              <Snackbar open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                action={action}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Item added to cart
                </Alert>
              </Snackbar>
            </div>

          )
        })}
      </div>
    )
  }

  return (
    <>
      <h2 className='font-bold text-3xl text-gray-700 text-center my-20'>Products</h2>

      <div className='container flex justify-between'>

        <div className='filtering_products border-r-2 px-10'>

          <h2 className='text-2xl font-semibold'>Filter</h2>



          <div className="filter_content my-10 grid gap-y-8">

            <div className="category-area flex items-center gap-x-4">
              <h4 className=' border-gray-300'>Select Category :</h4>
              <select onChange={dataFiltering} className="outline-none border-2 p-1">
                <option value="All">All</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
              </select>
            </div>

            <div className="price flex items-center gap-x-4">
              <h4 className='border-gray-300 '>Price : </h4>
              <div className=''>
                <input className='border-b-2 outline-none' placeholder='Max price ($)' onChange={filterPrice} type="text"/>
              </div>
            </div>

          </div>

        </div>



        {loading ? <Loading /> : <ShowProduct />}


      </div>
    </>
  )
}
