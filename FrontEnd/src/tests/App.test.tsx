import { expect } from 'chai';
import { render } from 'enzyme';

import App from '../App';
import * as React from "react";

describe('App', () => {
<<<<<<< HEAD

=======
    
>>>>>>> Add typescript ujit test
    it('is as expected', () => {
            const app = App();
            expect(app).to.not.be.null;;
        });
    it('renders the title', () => {
        const wrapper = render(<App />);
        expect(wrapper.text()).to.contain('Get Vegetables');
    });
    });
