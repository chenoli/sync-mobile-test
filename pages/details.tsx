import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import useUser from '../services/api/contexts/user';

function DetailsPage() {
  const { data, isLoading } = useUser();

  const { params } = useRoute();
  const { goBack } = useNavigation();

  const onBackPressed = () => {
    goBack();
  };

  const user = useMemo(() => {
    if (!data && !isLoading) return null;

    return data.users.find((u) => u._id === params?.id);
  }, []);

  return (
    <View style={{ marginTop: 64, padding: 16 }}>
      <View style={{}}>
        <TouchableOpacity onPress={onBackPressed}>
          <Text>back</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 16, fontSize: 32 }}>User details</Text>
        <View style={{ marginTop: 16 }}>
          <Text>{user.name}</Text>
          <Text>{user.interest}</Text>
        </View>
      </View>
    </View>
  );
}

export default DetailsPage;
