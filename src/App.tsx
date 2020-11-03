import React from "react";
import { Provider } from "mobx-react";

import stores from "stores";

import { Button } from "common/components/Button";

function App() {
  return (
    <Provider {...stores}>
      <div className="App">
        <Button size="large">Кнопка</Button>
      </div>
    </Provider>
  );
}

export default App;
