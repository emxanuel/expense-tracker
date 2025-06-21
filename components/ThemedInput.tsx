import { useThemeColor } from "@/hooks/useThemeColor";
import { TextInput, TextInputProps } from "react-native";

type ThemedInputProps = TextInputProps & {
  lightColor?: string
  darkColor?: string
}

export function ThemedInput({ lightColor, darkColor, ...props }: ThemedInputProps) {
  const placeHolderColor = useThemeColor({light: lightColor, dark: darkColor}, 'placeholder')
  const textColor = useThemeColor({light: lightColor, dark: darkColor}, 'text')
  return (
    <TextInput 
      {...props} 
      placeholderTextColor={placeHolderColor}  
      style={{
        color: textColor,
        borderWidth: 1,
        borderColor: placeHolderColor,
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 14

      }}
    />
  )
}