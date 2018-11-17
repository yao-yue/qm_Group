// Application interface 
// Server Web Application
import {
    wxRequest
} from "@/utils/wxRequest";

const apiMall = 'https://sujiefs.com'
const getAdlist = (params) => wxRequest(params, apiMall + '/api/adverts/list');
export default {
    getAdlist
}