import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-pink flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-pink rounded-xl shadow-2xl p-8 border border-pink-soft">
          <h1 className="text-4xl font-bold text-center mb-8 text-pink-dark font-cute">
            Todo List
          </h1>
          <AddTask />
          <ListTask />
        </div>
      </div>
    </Provider>
  );
}

export default App;
