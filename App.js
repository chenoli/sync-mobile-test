import Routes from './routes';

import AppProvider from './hooks/index';

export default function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
