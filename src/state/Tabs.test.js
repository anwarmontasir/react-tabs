import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tabs from './Tabs';

describe('Tabs Component', () => {

    const tabsProp = [
        { name: 'First tab', content: 'Don Rickles Speaks! is a comedy album released in 1969 by insult comic Don Rickles.'},
        { name: 'Second tab', content: 'It begins with an introduction by G. Bernard Owens who tells the audience that the recording they are about to hear reveals the serious side of Rickles, and his "thoughts of people, life, philosophy." Immediately after the introduction, we hear laughter, which completely contradicts what was heard previously.'},
        { name: 'Third tab', content: 'In the album, Rickles is interviewed by a panel of "eminent experts" who ask him about celebrities such as Dean Martin, Johnny Carson, Kirk Douglas, Robert Goulet, and Frank Sinatra, as well as music acts such as The Electric Prunes and Snooky Lanson.' }
      ];

    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Tabs />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders empty given no tabs', () => {
        const wrapper = shallow(<Tabs />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('renders the first tab by default', () => {
        const wrapper = shallow(<Tabs tabs={tabsProp} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('closes the first tab and opens any clicked tab', () => {
        const wrapper = shallow(<Tabs tabs={tabsProp} />);
        /* simulate clicking second button */
        wrapper.find('button').at(1).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})