import { GET_DATA } from './types'
import axios from 'axios'
// get the current profile
export const getproduct = () => async (dispatch) => {
  try {
    const res = await axios.get('https://fakestoreapi.com/products')
    dispatch({
      type: GET_DATA,
      payload: res.data,
    })
    console.log('responce for getdata', res)
  } catch (err) {
    dispatch({
      //   type: PROD_ERROR,
    })
  }
}
