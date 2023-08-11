import countComments from "./countComments";

describe('Testing comments count', () => {
    Test('Test the total number of Comments', () => {
        const comments = [
            {
                comment: 'this is a new comment',
                creation_date: '2023-8-11',
                username: 'Fire',

            },
            {
                comment: 'It is lovely',
                creation_date: '2023-8-11',
                username: 'Fire',

            },
            {
                comment: 'this is some comment too',
                creation_date: '2023-8-11',
                username: 'Fire',

            },
        ];
        expect(countComments(comments)).toBe(3);
    });
});