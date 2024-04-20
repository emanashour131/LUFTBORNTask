import EmployeeForm from './@forms/EmployeeForm';
import EmployeeList from './@forms/EmployeeList';
import { Routes, Route} from'react-router-dom';

function App() {
  return (
      <Routes>
          <Route path="/employee" element={<EmployeeForm />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="*" element={<h2>Not Found!</h2>} />
      </Routes>
  )
}

export default App;
