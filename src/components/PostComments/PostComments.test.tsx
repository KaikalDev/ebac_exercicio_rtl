import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    });

    test('Deve renderizar dois documentos', () => {
        render(<PostComment/>)
        fireEvent.change(screen.getByTestId('textarea-post'), {
            target: {
                value: 'comentario 1'
            }
        })
        fireEvent.click(screen.getByTestId('btn-post'))
        fireEvent.change(screen.getByTestId('textarea-post'), {
            target: {
                value: 'comentario 2'
            }
        })
        fireEvent.click(screen.getByTestId('btn-post'))

        expect(screen.getByText('comentario 1')).toBeInTheDocument()
        expect(screen.getByText('comentario 1')).toBeInTheDocument()
    })
});