import { ThemedInput } from '@/components/ThemedInput';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddHomeScreen() {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm()
  console.log(getValues())
  return (
    <SafeAreaView>
      <View className='flex flex-col'>
        <ThemedView className='py-8 px-4'>
          <ThemedText type='title' className='text-3xl'>Add Expense</ThemedText>
        </ThemedView>
        <ThemedView className='m-4 p-4 rounded-lg gap-2'>
          <View>
            <ThemedText>Amount</ThemedText>
            <Controller 
              control={control}
              name='amount'
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <ThemedInput
                  onChangeText={onChange}
                  value={value}
                  placeholder='0.00'
                  className=''
                />
              )}
            />
          </View>
          <View>

          </View>
          <View>

          </View>
          <View>
            <ThemedText>Note (Optional)</ThemedText>
            <Controller 
              control={control}
              name='note'
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <ThemedInput
                  onChangeText={onChange}
                  value={value}
                  placeholder='Add a note...'
                  multiline={true}
                  numberOfLines={4}
                  
                />
              )}
            />
          </View>
        </ThemedView>
      </View>
    </SafeAreaView>
  );
}