import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@/config/theme/gluestack-ui.config';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Init</Text>
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
