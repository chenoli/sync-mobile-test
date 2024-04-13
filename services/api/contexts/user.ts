import { useQuery } from '@tanstack/react-query';

import { api } from '..';

import User from '../../../models/user';

interface UserResponse {
  users: User[];
}

export default function useUser() {
  const get = async () => {
    const response = await api.get<UserResponse>('');
    return response.data;
  };

  return useQuery({
    queryKey: ['user'],
    queryFn: get,
    retry: 1,
  });
}
