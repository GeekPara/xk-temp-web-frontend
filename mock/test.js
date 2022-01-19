export default [
    {
        url: '/student/:only_code/action/generate_bind_token',
        method: 'GET',
        response: ({ query, url }) => {
            let only_code = -1
            try {
                only_code = url.match(/\/student\/(.*?)\/action\/generate_bind_token/)[1]
            } catch {
                return {
                    code: -10,
                    msg: 'Internal Server Error.'
                }
            }
            if (!query.access_token || query.access_token !== 'test_access_token')
                return {
                    code: -5,
                    msg: 'Parameters is Invalid.'
                }
            return {
                code: 0,
                bind_token: 'test_bind_token_' + only_code + '_' + Math.random().toString()
            }
        }
    }
]