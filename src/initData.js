export default {
    '1': {
        id: '1',
        name: 'John',
        isRoot: true,
        children: ['2', '3'],
    },
    '2': {
        id: '2',
        name: 'David',
        children: ['4'],
    },
    '4': {
        id: '4',
        name: 'David-Mary',
        children: [],
    },
    '3': {
        id: '3',
        name: 'DavidsBro',
        children: ['5', '6'],
    },
    '5': {
        id: '5',
        name: 'DavidsBroChild1',
        children: ['7'],
    },
    '7': {
        id: '7',
        name: 'DavidsBroChildChild',
        children: [],
    },
    '6': {
        id: '6',
        name: 'DavidsBroChild2',
        children: [],
    },
};
