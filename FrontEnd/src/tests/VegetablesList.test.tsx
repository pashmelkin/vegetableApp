import VegetablesList from '../VegetablesList';
import React from "react";
import { shallow } from 'enzyme';


describe('VegetablesList', () => {
    let wrapper;
    let useEffect;
    let getItemsMock;
    const items = [{name : "paul"}, {name : "Mark"}];

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };

    beforeEach(() => {
        useEffect = jest.spyOn(React, "useEffect");
        mockUseEffect();

       // getItemsMock = jest.spyOn(VegetablesList, "GetItems");
      //  getItemsMock.mockReturnValue(items);

        wrapper = shallow(<VegetablesList />);
    });

    describe("on start", () => {
        it("loads the items", () => {
            console.log(wrapper.debug());
        });
        it("will render ", () => expect(wrapper.find(".mdc-list").length).toEqual(1));
        it("will call useEffect", () => expect(useEffect).toHaveBeenCalled());

    });

});
