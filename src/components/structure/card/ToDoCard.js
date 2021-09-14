import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPrioridade } from "../../../modules/utilities/getPrioridade";
import { dataFormat } from "../../../modules/utilities/getData";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
// import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
// import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import "./ToDoCard.scss";

// OBS: prioridade 1- baixa, 2- normal, 3-alta
const ToDoCard = (props) => {
  const [tarefa, setTarefa] = useState(props.tarefa);
  const [prioridade, setPrioridade] = useState(props.tarefa.prioridade);

  useEffect(() => {
    setPrioridade(getPrioridade(prioridade));
  }, []);

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
          <Link to={`/view/${tarefa._id}`} className="link">
            <VisibilityOutlinedIcon style={{ fontSize: 17 }} />
          </Link>
          {/* <Link to={`/edit/${tarefa._id}`} className="link">
            <EditOutlinedIcon style={{ fontSize: 20 }} />
          </Link>
          <Link to={`/delete/${tarefa._id}`} className="link">
            <DeleteOutlineOutlinedIcon style={{ fontSize: 20 }} />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ToDoCard;
