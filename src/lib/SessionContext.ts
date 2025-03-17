import { createContext } from "solid-js";
import { createStore } from "solid-js/store";
import { authClient } from "./auth-client";

export interface Session {
    state: "alive",
    user: {
        name: string;
        email: string;
        image: string;
    },
    token: string;
    created: string;
    expires: string;
}
export interface PendingSession {
    state: "pending" | "empty",
    user: null;
    token: null;
    created: null;
    expires: null;
}
const EMPTY_SESSION = {
    state: "empty",
    user: null,
    token: null,
    created: null,
    expires: null
} as PendingSession;

export const [session, setSession] = createStore<Session | PendingSession>(EMPTY_SESSION);

export const useSession: () => Session | PendingSession = () => {

    if (session.state === "empty") {
        setSession({ state: "pending" });

        authClient.getSession().then((resp) => {
            console.log(resp);
            const { error, data } = resp;

            if (error) {
                console.error("Received error while retrieving session", error);
                setSession(EMPTY_SESSION);
        
            } else if (data) {
                const { user, session } = data;
                console.log("Received User data from session", user);
                setSession({
                    user,
                    token: session.token,
                    created: session.createdAt.toISOString(),
                    expires: session.expiresAt.toISOString(),
                    state: "alive"
                } as Session);
            }
        }) ;
    }

    return session;
};
