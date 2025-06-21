import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useGetExpenses } from '@/services/expenses.service';
import { View } from 'react-native';

import { Pressable, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const { data: expenses, isLoading: isLoadingExpenses, refetch: refetchExpenses, isRefetching: isRefetchingExpenses } = useGetExpenses()
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
          <View className='flex-row justify-between'>
            <ThemedText type='subtitle' className='mb-4'>Recent Expenses</ThemedText>
            <Pressable onPress={() => refetchExpenses()} disabled={isLoadingExpenses || isRefetchingExpenses}>
              <ThemedText>Reload</ThemedText>
            </Pressable>
          </View>
          <ScrollView>
            {
              isLoadingExpenses || isRefetchingExpenses? (
                <ThemedText>Loading your expenses, wait a a moment</ThemedText>
              ) : !expenses || expenses?.length === 0? (
                <ThemedText>Ups, it looks like you have not registered anything yet</ThemedText>
              ) : (
                expenses?.map((e, index) => (
                  <ThemedView className='rounded-xl my-2' key={`expense-${index}`}>
                    <View className='flex-row justify-between py-4 px-6'>
                      <View className='flex-row items-center'>
                        <View className='w-16'>
                          <ThemedText>💵</ThemedText>
                        </View>
                        <View>
                          <ThemedText type='defaultSemiBold' className='!text-xl'>{e.Category}</ThemedText>
                          <ThemedText>{new Date(e.Date).toLocaleDateString()}</ThemedText>
                          <ThemedText>{e.Note}</ThemedText>
                        </View>
                      </View>
                      <View>
                        <ThemedText type='defaultSemiBold' className='!text-2xl'>-{Intl.NumberFormat('en-US').format(e.Amount || 0)}</ThemedText>
                      </View>
                    </View>
                  </ThemedView>
                ))
              )
            }
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}