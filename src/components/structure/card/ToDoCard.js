import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPrioridade } from "../../../modules/utilities/getPrioridade";
import { dataFormat } from "../../../modules/utilities/getData";
// import { Api } from "../../../modules/Api/Api";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import DoneIcon from '@material-ui/icons/Done';
import "./ToDoCard.scss";

// OBS: prioridade 1- baixa, 2- normal, 3-alta
const ToDoCard = (props) => {
  const [tarefa, setTarefa] = useState(props.tarefa);
  const [prioridade, setPrioridade] = useState(props.tarefa.prioridade);

  useEffect(() => {
    setPrioridade(getPrioridade(prioridade));
  }, []);

  function handleDelete(id) {
    props.onDelete(id);
  }

  return (
    <div className={`to-do-card-${tarefa.prioridade}`}>
      <div className="card-title">
        <h5>{tarefa.titulo}</h5>
      </div>
      <div className="info-parcial">
        <p>
          <span>Prazo:</span> {dataFormat(tarefa.prazo)}
        </p>
        <p>
          <span>Prioridade:</span> {prioridade}
        </p>
        <div className="action-icons">
          <Link to={"/"} className="link">
          <DoneIcon style={{ fontSize: 15 }} />
          </Link>
          <Link to={`/view/${tarefa._id}`} className="link">
            <VisibilityOutlinedIcon style={{ fontSize: 15 }} />
          </Link>
          <Link to={`/edit/${tarefa._id}`} className="link">
            <EditOutlinedIcon style={{ fontSize: 15 }} />
          </Link>
          <Link to={"/"} className="link">
            <DeleteOutlineOutlinedIcon
              style={{ fontSize: 15 }}
              onClick={() => handleDelete(tarefa._id)}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToDoCard;
