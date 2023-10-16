import { postData } from '@/utils/axios/instance';
import { ACCESS_TOKEN_KEY } from '@/utils/constants/common';

export const login = async ({ payload, setLoading, toast, router }) => {
  try {
    setLoading(true);
    const response = await postData('/login', payload);

    if (response.status === 200) {
      toast({
        title: 'Login Successfull',
      });
      window?.localStorage.setItem(ACCESS_TOKEN_KEY, response.data.data.token);
      //   dispatch({ type: 'LOGIN', value: true });
      router.push('/accounts');
    } else {
      toast({
        variant: 'destructive',
        title: response?.data?.message || 'Something went wrong',
      });
    }
    return response;
  } catch (e) {
    toast({
      variant: 'destructive',
      title: 'Something went wrong',
    });
  } finally {
    setLoading(false);
  }
};
