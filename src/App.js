import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./Components/Demo/DemoList";
import Button from "./Components/UI/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [sortList, setSortList] = useState('Change to Ascending');

  const changeButtonHandler = useCallback(() => {
    console.log('changedTOAscendingorDescending');
    if(sortList === 'Change to Ascending'){
      setSortList('Change to Descending')
    }
    else{
      setSortList('Change to Ascending')
    }
  }, [sortList]);

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => {
    console.log('sortList value Changed');
    return [5, 3, 1, 10, 9]
  }, [sortList]);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} sortList = {sortList}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <br /><br />
      <Button onClick={changeButtonHandler}>
        {sortList}
      </Button>
    </div>
  );
}

export default App;