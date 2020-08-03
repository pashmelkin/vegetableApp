import VegetablesList from '../VegetablesList';
import * as ApiService from '../utils/ApiCallAsync';

import React from "react";
import { shallow } from 'enzyme';


describe('VegetablesList', () => {
    let wrapper;
    let useEffect;
    let apiCallSpy;
    const items = [{name : "paul"}, {name : "Mark"}];

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };

    beforeEach(() => {
        useEffect = jest.spyOn(React, "useEffect");
        mockUseEffect();

        apiCallSpy = jest.spyOn(ApiService, 'ApiCallAsync');
        apiCallSpy.mockReturnValue(items);

        wrapper = shallow(<VegetablesList />);
    });

    describe("on start", () => {
        it("loads the items", () => {
            //console.log(wrapper.debug());
            items.map(item =>
                expect(wrapper.contains(item.name))
                )

        });
        it("will render ", () => expect(wrapper.find(".mdc-list").length).toEqual(1));
        it("will call useEffect", () => expect(useEffect).toHaveBeenCalled());

    });

});
