
import VegetablesList from '../VegetablesList';
import React from "react";
import { shallow } from 'enzyme';


describe('VegetablesList', () => {
    let wrapper;
    let props;
    let useEffect;
    const items = [{name: "bob"}, {name: "alice"}];
    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };

    beforeEach(() => {
        useEffect = jest.spyOn(React, "useEffect");
        mockUseEffect();
        wrapper = shallow(<VegetablesList {...props} />);
    });

    describe("on start", () => {
        it("loads the items", () => {
            console.log(wrapper.debug());
        });

    });

});
