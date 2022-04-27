import * as request from "./request";
import axios from "axios";

export default class API {

    static getValues = async () => {
        return axios({
            method: "GET",
            url: request.getValues,
        })
            .then((response) => {
                return response;
            })
            .catch((err) => err);
    };
}