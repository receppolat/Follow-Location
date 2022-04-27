import * as actions from "./actions";
import api from "@api";

export const getValues = () => (dispatch) => {
    dispatch(actions.locationsPending());

    try {
        api
            .getValues()
            .then((response) => dispatch(actions.locationsSuccess(response)))
            .catch((err) => {
                console.log("Error is: " + err)
                dispatch(actions.locationsError());
            });
    }
    catch (error) {
        console.log("Error is: " + err)
        dispatch(actions.locationsError());
    }

}