import axios from "axios"
import { getFilterByBrand, getMensProductsAPI, getProductsSorting } from "./Product.api"
import * as types from "./Product.type"
import { GET_PRODUCTS_ERROR } from "./Product.type"
import { GET_PRODUCTS_SUCCESS } from "./Product.type"
import { GET_PRODUCTS_LOADING } from "./Product.type"



// export const getMensProducts = (obj) => async (dispatch) => {
//    dispatch({ type: types.GET_PRODUCTS_LOADING })
//    try {
//       let data = await getMensProductsAPI(obj)
//       //   console.log("data:", data )
//       dispatch({
//          type: types.GET_PRODUCTS_SUCCESS,
//          payload: data
//       })
//    } catch (err) {
//       dispatch({ type: types.GET_PRODUCTS_ERROR })
//    }
// }
export const getMainData = (page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING })
   try {
      let data = await getMensProductsAPI(page)
      //   console.log("data:", data )
      dispatch({
         type: types.GET_MAIN_DATA_SUCCESS,
         payload: data
      })
   } catch (err) {
      dispatch({ type: types.GET_PRODUCTS_ERROR })
   }
}
export const getFilterdProducts = (val) => async (dispatch) => {

   //console.log("val:", val)
   //   dispatch({type:types.GET_PRODUCTS_LOADING})

   try {

      dispatch({
         type: types.GET_FILTERED_PRODUCTS,
         payload: val
      })
   } catch (err) {
      dispatch({ type: types.GET_PRODUCTS_ERROR })
   }
}

export const getMensProductsSorted = (val, page) => async (dispatch) => {

   dispatch({ type: types.GET_PRODUCTS_LOADING })

   try {
      let data = await getProductsSorting(val, page)

      //console.log("data:", data)
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      })
   } catch (err) {
      dispatch({ type: types.GET_PRODUCTS_ERROR })
   }
}

export const getFilteredByBrand = (val, page) => async (dispatch) => {
   // console.log("Val:",val)
   dispatch({ type: types.GET_PRODUCTS_LOADING })

   try {
      let data = await getFilterByBrand(val, page)

      // console.log("data:", data)
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      })
   } catch (err) {
      dispatch({ type: types.GET_PRODUCTS_ERROR })
   }
}


const getProductRequest = () => {
   return { type: GET_PRODUCTS_LOADING };
};

const getProductSuccess = (payload) => {
   return { type: GET_PRODUCTS_SUCCESS, payload };
};

const getProductFailure = () => {
   return { type: GET_PRODUCTS_ERROR };
};


const getProductSuggestion = (payload) => {
   return { type: types.GET_PRODUCT_SUGGESTION_SUCCESS, payload };
}


export const getMensProduct = (data = {}, page = 1) => async (dispatch) => {
   dispatch(getProductRequest());
   let { params } = data

   try {
      let productData = await axios.get(`https://fair-pink-millipede-gear.cyclic.app/products?category=cloths&product=men&limit=10&page=${page}`, {
         params,
         headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
         }
      });
      dispatch(getProductSuccess(productData));
   } catch (error) {
      dispatch(getProductFailure())
   };
};


// get products for frontend search
export const getproductssuggestion = async (dispatch) => {
   // dispatch(getProductRequest());
   try {
      let productData = await axios.get(`https://puce-busy-zebra.cyclic.app/MensData`);
      dispatch(getProductSuggestion(productData));
   } catch (error) {
      dispatch(getProductFailure())
   };

}


