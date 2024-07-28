import { render, screen } from '@testing-library/react';
import Post from '.';

describe('Test Posr', () => {
    test('Deve renderizar corretamente', () => {
        render(
            <Post imageUrl="https://images.tcdn.com.br/img/img_prod/460977/batmovel_batmobile_batman_1989_escala_1_6_mms170_hot_toys_cg_12779_1_20201211160638.png">
                cemntario teste
            </Post>
        );
        expect(screen.getByText('cemntario teste')).toBeInTheDocument();
    });
})
