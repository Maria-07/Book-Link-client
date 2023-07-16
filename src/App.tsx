import { ToastContainer } from 'react-toastify';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div>
      <MainLayout></MainLayout>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
