// import axios from "axios";
// import * as actionTypes from "./actionTypes";
// import jwtDecode from "jwt-decode";

// //register------------start
// export const addMeal = () => async (dispatch) => {
//   try {
//     let payload = await axios.post(
//       "http://localhost:4000/api/meals/add-meals"
//       //   userInfo
//     );
//     console.log(payload);
//     dispatch({
//       type: actionTypes.ADD_MEAL,
//       //   message: payload.data.message,
//     });
//     // alert(payload.data.message);
//   } catch (e) {
//     // dispatch({
//     //   type: actionTypes.AUTH_USER_REGISTER_SUCCESSFUL,
//     //   message: e.response.data.message,
//     // });
//     alert(e.response.data.message);
//   }
// };
