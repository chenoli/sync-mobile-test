import { FlatList, Text, View } from 'react-native';
import useUser from '../services/api/contexts/user';
import Loading from './loading';
import UserListItem from './user-list-item';
import { useMemo } from 'react';

function UserList() {
  const { data, isLoading } = useUser();

  const users = useMemo(() => {
    if (data) return data.users.filter((u) => u.name?.length > 0);

    return [];
  }, [data]);

  if (isLoading) return <Loading />;

  return (
    <FlatList
      style={{ flex: 1 }}
      data={users}
      renderItem={({ item }) => <UserListItem user={item} />}
      ListEmptyComponent={() => <Text>No users found</Text>}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
    />
  );
}

export default UserList;
