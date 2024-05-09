import React from 'react';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AlertTriangle } from 'lucide-react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import {
  Button,
  FormControl,
  HStack,
  Input,
  VStack,
  Link,
  useToast,
  Toast,
  ToastTitle,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  ButtonText,
  LinkText,
  Box,
} from '@gluestack-ui/themed';

import PublicLayout from '@/screens/Layouts/PublicLayout';
import {
  RestoreSchemaType,
  restoreSchema,
} from '@/screens/Public/Restore/schema';

export default function RestoreScreen() {
  const { navigate } = useNavigation();
  const toast = useToast();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<RestoreSchemaType>({
    resolver: zodResolver(restoreSchema),
  });

  const onSubmit = ({ email }: RestoreSchemaType) => {
    toast.show({
      placement: 'top right',
      render: ({ id }) => {
        const toastId = `toast-restore-${id}`;
        return (
          <Toast nativeID={toastId} variant="solid" action="success">
            <ToastTitle>
              Você receberá um email para alterar sua senha em breve!
            </ToastTitle>
          </Toast>
        );
      },
    });
    reset();
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
                    await restoreSchema.parseAsync({ email: value });
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

          <Button
            variant="solid"
            size="lg"
            mt="$5"
            onPress={handleSubmit(onSubmit)}
          >
            <ButtonText fontSize="$sm">Enviar</ButtonText>
          </Button>
        </Box>
        <HStack
          space="xs"
          alignItems="center"
          justifyContent="center"
          mt="auto"
          mb={50}
        >
          <Link onPress={() => navigate('Login')}>
            <LinkText fontSize="$sm">Voltar</LinkText>
          </Link>
        </HStack>
      </VStack>
    </PublicLayout>
  );
}
