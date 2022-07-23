import * as Google from 'expo-auth-session/providers/google'
import { View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import * as WebBrowser from 'expo-web-browser'
import { cAn, cWeb } from '@env'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

WebBrowser.maybeCompleteAuthSession()

const GoogleAuth = () => {
    const [token, setToken] = useState()
    const [user, setUser] = useState()

    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: cAn,
        expoClientId: cWeb
    })

    useEffect(() => {
        if (response?.type === 'success') {
            setToken(response.authentication.accessToken)
            console.log(response.authentication.accessToken)
        }
    }, [response])

    const getUserData = async () => {
        const user = await fetch('https://www.googleapis.com/userinfo/v2/me', {
            header: { Authorization: `bearer ${ token }` }
        })
    }

    return (
        <Pressable onPress={() => promptAsync({ showInRecents: true })}>
            <Text>googleAuth</Text>
        </Pressable>
    )
}

export default GoogleAuth


