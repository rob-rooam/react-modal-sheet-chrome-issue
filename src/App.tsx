import "./App.css";

import Sheet from "react-modal-sheet";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <button onClick={handleIsOpen}>Open Modal</button>

      <Sheet isOpen={isOpen} onClose={handleIsOpen} className="modal-sheet">
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <input type="text" />
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onTap={handleIsOpen} />
      </Sheet>
    </div>
  );
}

export default App;
