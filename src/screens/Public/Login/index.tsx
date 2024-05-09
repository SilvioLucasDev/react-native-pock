import React from 'react';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AlertTriangle, EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import {
  Button,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
  Link,
  useToast,
  Toast,
  ToastTitle,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  InputIcon,
  FormControlHelper,
  ButtonText,
  LinkText,
  InputSlot,
  Box,
} from '@gluestack-ui/themed';

import { useAuth } from '@/context/AuthContext';
import PublicLayout from '@/screens/Layouts/PublicLayout';
import { LoginSchemaType, loginSchema } from '@/screens/Public/Login/schema';

export default function LoginScreen() {
  const { navigate } = useNavigation();
  const { login, error, loading } = useAuth();
  // const toast = useToast();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  const onSubmit = ({ email, password }: LoginSchemaType) => {
    // usar esse roas somente no erro
    // toast.show({
    //   placement: 'top right',
    //   render: ({ id }) => {
    //     const toastId = `toast-success-${id}`;
    //     return (
    //       <Toast nativeID={toastId} variant="solid" action="success">
    //         <ToastTitle>Login Realizado com Sucesso!</ToastTitle>
    //       </Toast>
    //     );
    //   },
    // });
    reset();
    login({ email, password });
  };

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  return (
    <PublicLayout>
      <VStack px={50} h="$full">
        <Box flex={1} justifyContent="center">
          <FormControl isInvalid={!!errors.email} isRequired={true}>
            <Controller
              name="email"
              defaultValue=""
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await loginSchema.parseAsync({ email: value });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    fontSize="$sm"
                    placeholder="Email"
                    type="text"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon size="md" as={AlertTriangle} />
              <FormControlErrorText>
                {errors?.email?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <FormControl my="$6" isInvalid={!!errors.password} isRequired={true}>
            <Controller
              name="password"
              defaultValue=""
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await loginSchema.parseAsync({
                      password: value,
                    });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    fontSize="$sm"
                    placeholder="Senha"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                    type={showPassword ? 'text' : 'password'}
                  />
                  <InputSlot onPress={togglePassword} pr="$3">
                    <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                  </InputSlot>
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon size="sm" as={AlertTriangle} />
              <FormControlErrorText>
                {errors?.password?.message}
              </FormControlErrorText>
            </FormControlError>

            <FormControlHelper></FormControlHelper>
          </FormControl>

          <Link ml="auto" onPress={() => navigate('Restore')}>
            <LinkText fontSize="$xs">Recuperar a Senha?</LinkText>
          </Link>

          <Button
            variant="solid"
            size="lg"
            mt="$5"
            onPress={handleSubmit(onSubmit)}
          >
            <ButtonText fontSize="$sm">Login</ButtonText>
          </Button>
        </Box>
        <HStack
          space="xs"
          alignItems="center"
          justifyContent="center"
          mt="auto"
          mb={50}
        >
          <Text
            color="$textLight500"
            fontSize="$sm"
            sx={{ _dark: { color: '$textDark400' } }}
          >
            Você não tem uma conta?
          </Text>

          <Link onPress={() => navigate('Register')}>
            <LinkText fontSize="$sm">Cadastre-se</LinkText>
          </Link>
        </HStack>
      </VStack>
    </PublicLayout>
  );
}
