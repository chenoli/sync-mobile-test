import { Image, Text, TouchableOpacity, View } from 'react-native';
import User from '../models/user';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

interface UserListItemProps {
  user: User;
}

function UserListItem({ user }: UserListItemProps) {
  const { navigate } = useNavigation();

  const handleNavigateToDetails = () => {
    navigate('Details', { id: user._id });
  };

  return (
    <TouchableOpacity
      onPress={handleNavigateToDetails}
      style={{
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: '700' }}>{user.name}</Text>
      <View>
        <Text>{user.position || 'not informed'}</Text>
        <Text>{user.schoolName || 'not informed'}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default UserListItem;
