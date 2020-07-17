import { expect } from 'chai';
import { render } from 'enzyme';

import MainButtonGet from '../MainButtonGet';
import * as React from "react";

describe('MainButtonGet', () => {
    it('is as expected', () => {
            const app = MainButtonGet();
            expect(app).to.not.be.null;;
        });
    it('renders the title', () => {
        const wrapper = render(<MainButtonGet />);
        expect(wrapper.text()).to.contain('Get Vegetables');
    });
    });
