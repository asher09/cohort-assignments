import CredentialsProvider from 'next-auth/providers/credentials';

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: {label:'email', type: 'text', placeholder: 'Email'},
                password: {label:'password', type:'password',placeholder: 'Password'}
            },
            async authorize(credentials: any) {
                
                return {
                    id: "user1",
                    name: "User One",
                    email: "test@mail.com"
                }
            }
        })
    ],
    secret: process.env.NEXT_AUTH_SECRET,
    callbacks: {
        jwt: ({token, user}: { token: any; user?: any }) => {
            token.userId = token.sub;
            return token;
        },
        session: ({session, token, user}: any) => {
            if( session&& session.user) {
                session.user.id = token.userId;
            }
            return session;
        }
    }
}