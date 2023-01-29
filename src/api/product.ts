import axios from "axios";

const apiProducts = {
    popularProducts: function () {
        return axios.get('https://servicios.neunapp.com/api/tienda/productos/lista/')
    }
}

export default apiProducts;