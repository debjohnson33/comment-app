import React from 'react';
import { render, fireEvent, wait, cleanup, getAllByTestId } from 'react-testing-library';
import axios from 'axios';
import Comments from '../Comments';
import waitForExpect from 'wait-for-expect';

const comment1 = {
    id: 1,
    comment: 'I do love writing tests',
    author: 'The Notester'
}

const comment2 = {
    id: 2,
    comment: 'Nothing is better than a good comment app',
    author: 'Comment Hater'
}
const comments = [ comment1, comment2 ]

describe('Comments Screen', () => {
    afterEach(cleanup)
    beforeEach(() => {
        axios.get = jest.fn(() => Promise.resolve(comments))
    })

    test('It fetches comments and renders them to the page', async() => {
        const { getByText } = render(<Comments />)

        await wait(() => getByText(comment1.comment))

        const firstCommentNode = getByText(comment1.comment)
        const firstAuthorTagNode = getByText(`- ${comment1.author}`)
        const secondCommentNode = getByText(comment2.comment)
        const secondAuthorTagNode = getByText(`- ${comment2.author}`)

        expect(firstCommentNode).toBeDefined()
        expect(firstAuthorTagNode).toBeDefined()
        expect(secondCommentNode).toBeDefined()
        expect(secondAuthorTagNode).toBeDefined()
    })
})