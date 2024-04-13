import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type PropsWithChildren } from 'react';

const client = new QueryClient();

function AppProvider({ children }: PropsWithChildren): React.ReactElement {
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>{children}</NavigationContainer>
    </QueryClientProvider>
  );
}

export default AppProvider;
