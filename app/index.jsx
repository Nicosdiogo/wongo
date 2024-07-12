import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
/*
  const {isLoading, isLoggedIn} = useGlobalContext();

  if(!isLoading && isLoggedIn) return <Redirect href="/home"/>*/
  
  return (
    <SafeAreaView className="bg-white h-full" style={{ backgroundColor: '#fafafa' }}>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center  px-4 min-h-[85vh]">
          <Image
            source={images.logo2}
            className="w-[200px] h-[85px]"
            resizeMode='contain'
          />

          <Image
            source={images.cards1}
            className="max-w-[380px] h-[300px]"
            resizeMode='contain'
          />

          <View className="relative mt-1">
          <Text style={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: 30,
            lineHeight: 36, // Ou 120% em relação ao tamanho da fonte
            textAlign: 'center',
            letterSpacing: -1,
            color: '#000000',
            textShadowOffset: { width: 0, height: 4 },
            textShadowRadius: 4,
            textShadowColor: 'rgba(0, 0, 0, 0.25)',
          }}>
            {/* Seu texto aqui */}
            Descubra Possibilidades Infinitas com a
             {' '}
              <Text className="" style={{ color: '#BB63D0' }}>Wongo</Text>
              <Text>

              </Text>
            </Text>
            <Image
              source={images.path}
              className="w-[95px] h-[60px] absolute -bottom-7 left-48"

              resizeMode="contain"

            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-4 text-center">
            Onde a criatividade encontra a inovação: embarque em uma
             jornada de exploração ilimitada com a Wongo
          </Text>

          <CustomButton
            title="Continuar com E-mail"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-5"
          />

        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='dark' />
    </SafeAreaView>
  );
}

