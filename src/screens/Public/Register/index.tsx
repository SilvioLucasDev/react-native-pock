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
import {
  RegisterSchemaType,
  registerSchema,
} from '@/screens/Public/Register/schema';

export default function RegisterScreen() {
  const { navigate } = useNavigation();
  const { register, error, loading } = useAuth();
  // const toast = useToast();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const toggleConfirmPassword = () => {
    setShowConfirmPassword((showState) => {
      return !showState;
    });
  };

  const onSubmit = ({
    email,
    password,
    confirm_password,
  }: RegisterSchemaType) => {
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
    register({ email, password, confirmPassword: confirm_password });
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
                    await registerSchema.parseAsync({ email: value });
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
                    await registerSchema.parseAsync({
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

          <FormControl isInvalid={!!errors.confirm_password} isRequired={true}>
            <Controller
              defaultValue=""
              name="confirm_password"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await registerSchema.parseAsync({
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
                    placeholder="Confirmar Senha"
                    fontSize="$sm"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                    type={showConfirmPassword ? 'text' : 'password'}
                  />
                  <InputSlot onPress={toggleConfirmPassword} pr="$3">
                    <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                  </InputSlot>
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon size="sm" as={AlertTriangle} />
              <FormControlErrorText>
                {errors?.confirm_password?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <Button
            variant="solid"
            size="lg"
            mt="$5"
            onPress={handleSubmit(onSubmit)}
          >
            <ButtonText fontSize="$sm">Cadastrar-se</ButtonText>
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
            Você já tem uma conta?
          </Text>

          <Link onPress={() => navigate('Login')}>
            <LinkText fontSize="$sm">Login</LinkText>
          </Link>
        </HStack>
      </VStack>
    </PublicLayout>
  );
}
