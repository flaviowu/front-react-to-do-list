import axios from "axios";

export const Api = {
  url: "https://todolist-byflaviowu.herokuapp.com/tarefas",

  getTarefas: async (filter) => axios.get(`${Api.url}/${filter}`),

  getTarefa: async (id) => axios.get(`${Api.url}/${id}`),
  
  postTarefa: async (body) => axios.post(`${Api.url}/add`, body),

  putTarefa: async (id, body) => axios.put(`${Api.url}/update/${id}`, body),

  deleteTarefa: async (id) => axios.delete(`${Api.url}/delete/${id}`)
};
