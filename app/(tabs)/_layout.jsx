import { StyleSheet, Text, View, Image } from 'react-native'
import {Tabs, Redirect} from 'expo-router';
import {icons} from '../../constants'

const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image 
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold' : 'font font-pregular'} text-xs`} style={{ color: color}}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#F80194',
                tabBarInactiveTintColor: '#cdcde0',
                tabBarStyle: {
                    backgroundColor: '#161622',
                    borderTopWidth: 1,
                    borderTopColor: '#232533',
                    height: 84,
                }
            }} 
        >
            <Tabs.Screen 
                name="home"
                options={{
                    title: 'Início',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            name="Início"
                            focused={focused}
                        />   
                    )
                }}
            />
            <Tabs.Screen 
                name="bookmark"
                options={{
                    title: 'Marcar',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon={icons.bookmark}
                            color={color}
                            name="Marcar"
                            focused={focused}
                        />   
                    )
                }}
            />
            <Tabs.Screen 
                name="create"
                options={{
                    title: 'Criar',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon={icons.plus}
                            color={color}
                            name="Criar"
                            focused={focused}
                        />   
                    )
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{
                    title: 'Perfil',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                            name="Perfil"
                            focused={focused}
                        />   
                    )
                }}
            />
            
        </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})