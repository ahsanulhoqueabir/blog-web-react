import { useEffect, useState } from "react";

const PropsVsState = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ahsanulhoqueabir/blog-web-react/main/src/propStats.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="overflow-x-auto text-center mx-10">
        <h1 className="text-3xl font-bold text-center py-5">Props Vs State</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Props</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mutability</td>
            <td>Immutable (Read-only).</td>
            <td>Mutable (Can be changed using setState).</td>
          </tr>
          <tr>
            <td>Source</td>
            <td>Received from parent component. </td>
            <td>Managed within the component.</td>
          </tr>
          <tr>
            <td>Ownership</td>
            <td>Owned by the parent component. </td>
            <td>Owned and controlled by the component itself.</td>
          </tr>
          <tr>
            <td>Modification</td>
            <td>Cannot be modified by the component itself. </td>
            <td>Can be modified using setState method.</td>
          </tr>
          <tr>
            <td>Initialization</td>
            <td>
              Passed down from parent component during component creation.{" "}
            </td>
            <td>
              Initialized within the component's constructor or through
              useState.
            </td>
          </tr>
          <tr>
            <td>Use Case </td>
            <td>Ideal for passing data from parent to child components. </td>
            <td>
              Suitable for managing internal component state and triggering
              re-renders.
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        
      </div>
    </div>
  );
};

export default PropsVsState;
// data.map((item,index)=>
// {
//     console.log(item);
//     {
//         for(let p in item)
//         {
//             console.log(p);
//             return (
//                 <>
//                 <tr key={p}>
//                     <td>{p}</td>
//                     <td>{item.p}</td>
//                     <td>{item.p} </td>
//                 </tr>
//                 </>
//             )
//         }
//     }

// })
