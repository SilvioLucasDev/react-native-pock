import { StyleSheet } from 'react-native';

import { Text } from '@gluestack-ui/themed';

import ProtectedLayout from '@/screens/Layouts/ProtectedLayout';

export default function NotificationScreen() {
  return (
    <ProtectedLayout>
      <Text style={styles.title}>Notificação</Text>
    </ProtectedLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});
