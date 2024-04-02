import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function InfoScreen() {
  const { thingId } = useLocalSearchParams<{ thingId: string }>();
  return (
    <View>
      <Text>Index: {thingId}</Text>
    </View>
  );
}
