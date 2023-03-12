import "./App.css";
import group from "core-js/full/array/group";

function App() {
  /**
   * Experimental
   * https://tc39.es/proposal-array-grouping/#sec-array.prototype.group
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/groupToMap
   * https://github.com/zloirock/core-js#array-grouping
   * */

  //  Example 01
  // let groupTest = [1, 2, 3, 4, 5].group((it) => it % 2);
  // console.log(groupTest);

  // const map = [1, 2, 3, 4, 5].groupToMap((it) => it % 2);
  // console.log(map.get(0));
  // console.log(map.get(1));

  //  Example 02
  const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];
  function callbackFunc({ quantity }) {
    return quantity > 5 ? "ok" : "restock";
  }
  console.log(inventory);
  const result2 = inventory.group(callbackFunc);
  console.log(result2);

  /**PIPELINE*/
  
  // With pipes
  // result
  // |> encase(concat("Anything "))
  // |> map(toUpper)
  // |> chain(encase((x) => x + " and that"))
  // |> fork(console.log)(setResult);

  return <div className="App">Hello</div>;
}

export default App;
