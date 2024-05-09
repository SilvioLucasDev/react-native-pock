import React from 'react';
import { Box, StatusBar, ScrollView, VStack } from '@gluestack-ui/themed';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

type ProtectedLayoutProps = {
  children: React.ReactNode;
};

export default function ProtectedLayout(props: ProtectedLayoutProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box
          sx={{
            _web: {
              height: '100vh',
              overflow: 'hidden',
            },
          }}
          height="100%"
        >
          <StatusBar barStyle="light-content" />
          <ScrollView
            flex={1}
            contentContainerStyle={{
              alignItems: 'center',
              flexGrow: 1,
              justifyContent: 'center',
            }}
            sx={{
              '@base': { _light: { bg: '$primary0' } },
              '@md': { _light: { bg: '$primary0' }, p: '$8' },
              _dark: { bg: '$backgroundDark900' },
            }}
            bounces={false}
          >
            <VStack
              w="$full"
              flex={1}
              overflow="hidden"
              justifyContent="center"
              alignItems="center"
              sx={{
                '@md': {
                  maxWidth: '$containerWidth',
                  flexDirection: 'row',
                  rounded: '$xl',
                  flex: undefined,
                },
              }}
            >
              {props.children}
            </VStack>
          </ScrollView>
        </Box>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
