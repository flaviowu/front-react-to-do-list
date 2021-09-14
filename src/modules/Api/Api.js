import axios from "axios";

export const Api = {
  url: "http://localhost:3005/tarefas",

  getTarefas: () => axios.get(Api.url),

  getTarefa: (id) => axios.get(`${Api.url}/${id}`),
  
  postTarefa: (body) => {
    return axios.post(`${Api.url}/add`, body);
  },

  putTarefa: (id, body) => {
    return axios.put(`${Api.url}/update/${id}`, body);
  },

  deleteTarefa: (id) => {
    return axios.delete(`${Api.url}/delete/${id}`);
  },
};
