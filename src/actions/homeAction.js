import axios from "axios";

export const FETCH_PRODUCTS      = "fetch_products";
export const SET_MODAL_VISIBLE   = "set_modal_visible";
export const SET_FILTERED_DATA   = "set_filtered_data";

export const fetchProducts = (page, eachPage) => {
    return dispatch => {
        axios({
            url: `https://5fc9346b2af77700165ae514.mockapi.io/products?limit=${eachPage}&page=${page}`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            console.log("result", result)
            dispatch({
                type: FETCH_PRODUCTS,
                payload: result.data,
                page: page
            })
        }).catch((err) => {
            console.log("err", err.response)
        })
    }
}

export const setModalVisible = (modalVisible) => {
    return{
        type: SET_MODAL_VISIBLE,
        payload: modalVisible
    }
}

export const setFilteredData = (filteredData) => {
    return{
        type: SET_FILTERED_DATA,
        payload: filteredData
    }
}