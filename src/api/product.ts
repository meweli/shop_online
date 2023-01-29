import axios from "axios";

const apiProducts = {
    popularProducts: function () {
        return axios.get('https://servicios.neunapp.com/api/tienda/productos/lista/')
    },
    filtrarProductos: function (filtros:any) {
        return axios.get('https://servicios.neunapp.com/api/tienda/productos/lista/?' + filtros)
    },
}

export default apiProducts;