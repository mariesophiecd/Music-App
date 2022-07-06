/**
 * @jest-environment jsdom
 */

import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.js';



describe('App', () => {
    beforeEach(() => {
        render(<App />)
    })

    test('it changes the artist\'s name', async () => {
        const button = screen.getByRole('button')
        const heading = screen.getByRole('heading')
        await userEvent.click(button)
        expect(heading.textContent).toBe('Tom')
    })
})
