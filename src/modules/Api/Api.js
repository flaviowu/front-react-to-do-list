import axios from "axios";

export const Api = {
  url: "https://todolist-byflaviowu.herokuapp.com/tarefas",

  getTarefas: async (filter) => await axios.get(`${Api.url}/${filter}`),

  getTarefa: async (id) => await axios.get(`${Api.url}/${id}`),
  
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
