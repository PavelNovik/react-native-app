export type FakeDataUserType = {
    id: number;
    firstName: string;
    lastName: string;
    avatar: string | null;
    location: {
        country: string;
        city: string;
    };
    skills: string[];
    role: string;
}

export const fakeDataUser: FakeDataUserType[] = [{
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'https://icons-for-free.com/iff/png/256/avatar-1320568024619304547.png',
    location: {
        country: 'Spain',
        city: 'Barcelona'
    },
    skills: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Next JS'],
    role: 'Boss'
}]
