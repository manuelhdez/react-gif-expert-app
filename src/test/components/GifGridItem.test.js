import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";


describe("Pruebas en <GifGridItem />", () => {
  const title = "Mi titulo";
  const url = "http://localhost/img.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("should display the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should has a paragraph with a title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('should has an img tag & alt property on props', () => {
    const img = wrapper.find("img");
    //console.log(img.props());
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  })


});
