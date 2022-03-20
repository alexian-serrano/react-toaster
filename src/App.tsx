import ToastProvider from './ToastProvider/ToastProvider';
import useToaster from './ToastProvider/useToaster';

const App = () => {
  const toaster = useToaster();

  return (
    <div>
      <h1>Hello world !</h1>
      <button onClick={() => toaster.add('Ceci est un toast venu délivrer un message de la plus haute importance 🍕!')}>Add toast</button>
    </div>
  );
};

export default App;
