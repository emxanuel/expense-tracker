import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className='flex flex-col'>
        <ThemedView className='py-8 px-4'>
          <ThemedText type='title' className='text-3xl'>Expense Tracker</ThemedText>
        </ThemedView>
        <View className='mx-4'>
          <ThemedView className='py-6 my-6 rounded-xl px-4'>
            <ThemedText type='subtitle'>Monthly Budget</ThemedText>
          </ThemedView>
          <ThemedText type='subtitle' className='mb-4'>Recent Expenses</ThemedText>
          <ScrollView>
            <ThemedView className='rounded-xl my-2'>
              <View className='flex-row justify-between py-4 px-6'>
                <View className='flex-row items-center'>
                  <View className='w-16'>
                    <ThemedText>🍖</ThemedText>
                  </View>
                  <View>
                    <ThemedText type='defaultSemiBold' className='!text-xl'>Food</ThemedText>
                    <ThemedText>Jun 14, 2025</ThemedText>
                    <ThemedText>Lunch at cafe</ThemedText>
                  </View>
                </View>
                <View>
                  <ThemedText type='defaultSemiBold' className='!text-2xl'>-$25.50</ThemedText>
                </View>
              </View>
            </ThemedView>
            <ThemedView className='rounded-xl my-2'>
              <View className='flex-row justify-between py-4 px-6'>
                <View className='flex-row items-center'>
                  <View className='w-16'>
                    <ThemedText>🍖</ThemedText>
                  </View>
                  <View>
                    <ThemedText type='defaultSemiBold' className='!text-xl'>Food</ThemedText>
                    <ThemedText>Jun 14, 2025</ThemedText>
                    <ThemedText>Lunch at cafe</ThemedText>
                  </View>
                </View>
                <View>
                  <ThemedText type='defaultSemiBold' className='!text-2xl'>-$25.50</ThemedText>
                </View>
              </View>
            </ThemedView>
            <ThemedView className='rounded-xl my-2'>
              <View className='flex-row justify-between py-4 px-6'>
                <View className='flex-row items-center'>
                  <View className='w-16'>
                    <ThemedText>🍖</ThemedText>
                  </View>
                  <View>
                    <ThemedText type='defaultSemiBold' className='!text-xl'>Food</ThemedText>
                    <ThemedText>Jun 14, 2025</ThemedText>
                    <ThemedText>Lunch at cafe</ThemedText>
                  </View>
                </View>
                <View>
                  <ThemedText type='defaultSemiBold' className='!text-2xl'>-$25.50</ThemedText>
                </View>
              </View>
            </ThemedView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}