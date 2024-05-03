// function App() {
//   return (
//     <div>
//       <Student />
//       <h1>Hello buddy</h1>
//       <Student />
//       <p> this is introduction of react framework </p>;
//       <Student />
//     </div>
//   );
// }
// function Student() {
//   return (
//     <div>
//       <h1>Shivam</h1>
//       <h2>Roll No:168</h2>
//       <h3>year& section:2,A</h3>
//       <h4>Branch:CS</h4>
//     </div>
//   );
// }
// //to give function export is used//
// export default App;
import BookStore from "./BookStore";

const App = () => (
<>
<h1 style={{textAlign:"center"}}>Best book seller</h1>
<BookStore />;
</>
)
export default App;
