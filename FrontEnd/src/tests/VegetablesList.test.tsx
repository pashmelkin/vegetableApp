import { expect } from 'chai';
import { render } from 'enzyme';

import VegetablesList from '../VegetablesList';
import * as React from "react";

describe('MainButtonGet', () => {
    it('is as expected', () => {
            const app = VegetablesList();
            expect(app).to.not.be.null;;
        });
    it('renders the title', () => {
        const wrapper = render(<VegetablesList />);
        expect(wrapper.text()).to.contain('Get Vegetables');
    });
    });
