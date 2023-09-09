import React from 'react'
import { Welcome } from '../screens/Welcome';
import { Confirmation } from '../screens/Confirmation';
import { UserIdentification } from '../screens/UserIdentification';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator>
      <Screen
        name='Welcome'
        component={Welcome}
        options={{ headerShown: false }
        }
      />

      < Screen
        name='UserIdentification'
        component={UserIdentification}
      />

      <Screen
        name='Confirmation'
        component={Confirmation}
      />
    </Navigator>
  )
}
