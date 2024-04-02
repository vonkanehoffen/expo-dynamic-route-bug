import { Stack, Tabs, useLocalSearchParams } from 'expo-router';

export default function ThingsLayout() {
  const { thingId } = useLocalSearchParams<{ thingId: string }>();
  return (
    <>
      <Stack.Screen options={{ title: `Thing ${thingId}` }} />
      <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Index' }} />
        <Tabs.Screen name="status" options={{ title: 'Status' }} />
      </Tabs>
    </>
  );
}
