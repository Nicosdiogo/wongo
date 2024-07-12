import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity 
            onPress={handlePress}
            activeOpacity={0.7}
            className={` rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
            style={{
                backgroundColor: '#A550CC'
            }}
            >
            <Text 
                className={`
                    text-primary 
                    font-psemibold 
                    text-lg 
                    ${textStyles}`
                }
            >   
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton