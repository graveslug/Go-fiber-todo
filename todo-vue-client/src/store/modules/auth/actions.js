export default {
    async login(context, payload) {
        const response = await fetch('localhostandallthatjazz', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        })

        const responseData = await response.json()

        if (!response.ok) {
            console.log(responseData)
            const error = new Error(responseData.message || 'Failed to authenticate! Check your login data')
            throw error
        }

        console.log(responseData)
        context.commit('setUser', {
            token: responseData.token,
            userId: responseData.userID,
            tokenExpiration: responseData.expiresIn

        })
    },

    async signup(context, payload) {
        //will adjust to axios after
        const response = await fetch('localhostandallthatjazz', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        })

        const responseData = await response.json()

        if (!response.ok) {
            console.log(responseData)
            const error = new Error(responseData.message || 'Failed to authenticate! Check your login data')
            throw error
        }

        console.log(responseData)
        context.commit('setUser', {
            token: responseData.token,
            userId: responseData.userID,
            tokenExpiration: responseData.expiresIn

        })
    }
}
