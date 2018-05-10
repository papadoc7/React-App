import React from 'react';

import ReactDOM from 'react-dom';

import { shallow, mount, render } from 'enzyme';

import Posts from './Posts/Posts';



it('the Posts component is rendering', () => {

    const div = document.createElement('div');
    ReactDOM.render(<Posts />, div);
    ReactDOM.unmountComponentAtNode(div);
});



it('should throw error when the preview title is longer than 15 characters', () => {
    expect(() => {
        shallow(
            <Posts title={15} />
        );
    }).toThrow();
});


it('should throw error when the post content preview is longer than 30 characters', () => {
    expect(() => {
        shallow(
            <Posts body={30} />
        );
    }).toThrow();
});

it('should throw error when there is not neither title nor body', () => {
    expect(() => {
        shallow(
            <Posts title={' '} body={' '} />
        );
    }).toThrow();
});