import {createClient} from 'redis'

export class PubSubManager {

    private static instance: PubSubManager;
    private redisClient: RedisClientType;
    private subscriptions: Map<string, string[]>;

    private constructor() {

    }

    public static  getInstance(): PubSubManager {
        if(!PubSubManager.instance) {
            PubSubManager.instance = new PubSubManager;
        }
        return PubSubManager.instance;
    }

    userSubscribe(userId: string, stock: string){


    }
    userUnsubscribe(userId: string, stock: string) {


    }
    handleMessage(userId: string, stock: string) {


    }
}