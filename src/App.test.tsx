import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test <App />', () => {
    test('Expect render correctly', () => {
        render(
            <App />
        );
        expect(screen.getByText('Olha só que legal minha miniatura do Batmóvel.')).toBeInTheDocument();
    });
})