import { Text, View } from 'react-native';

import UserList from '../components/user-list';

function UsersPage() {
  return (
    <View style={{ padding: 16, marginTop: 32, flex: 1, paddingBottom: 0 }}>
      <Text style={{ fontWeight: '700', fontSize: 32 }}>Users</Text>
      <View style={{ marginTop: 16, flex: 1 }}>
        <UserList />
      </View>
    </View>
  );
}

export default UsersPage;
