import{atom} from 'recoil';
import {selector} from 'recoil'

export const networkAtom = atom({
    key: 'networkAtom',
    default: 102
})
export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 0
})
export const notificationAtom = atom({
    key: 'notificationAtom',
    default: 101
})
export const messageAtom = atom({
    key: 'messageAtom',
    default: 5
})

export const totalNotificationAtom = selector({
    key: 'totalNotificationAtom',
    get: ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationAtomCount = get(notificationAtom);
        const messageAtomCount = get(messageAtom);
        return networkAtomCount + jobsAtomCount + notificationAtomCount + messageAtomCount;
    }
})