import React from "react";
import { observer, inject } from "mobx-react";

import "./addtodo.styles.scss";

import { IAddTodoProps } from "./addtodo.interface";

// import { Input } from "common/components/Input";
// import { Button } from "common/components/Button";

const Addtodo: React.FC<IAddTodoProps> = inject("TodoListStore")(
  observer(() => {
    return <form></form>;
  })
);

export default Addtodo;
