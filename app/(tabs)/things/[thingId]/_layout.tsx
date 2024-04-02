import { Stack, Tabs, router, useLocalSearchParams } from 'expo-router';

export default function ThingsLayout() {
  const { thingId } = useLocalSearchParams<{ thingId: string }>();
  return (
    <>
      <Stack.Screen options={{ title: `Thing ${thingId}` }} />
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{ title: 'Index' }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              router.push(`/(tabs)/things/${thingId}/`);
            },
          }}
        />
        <Tabs.Screen
          name="status"
          options={{ title: 'Status' }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              router.push(`/(tabs)/things/${thingId}/status`);
            },
          }}
        />
      </Tabs>
    </>
  );
}
``;
