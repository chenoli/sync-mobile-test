import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UsersPage from '../pages/users';
import DetailsPage from '../pages/details';

const Stack = createNativeStackNavigator();

const MainRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Users" component={UsersPage} />
      <Stack.Screen name="Details" component={DetailsPage} />
    </Stack.Navigator>
  );
};

export default MainRoutes;
