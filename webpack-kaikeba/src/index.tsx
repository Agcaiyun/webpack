import * as React from 'react';
import { render } from 'react-dom';
import { Hello } from './Hello/HelloClass';

render(
	<Hello compiler='compiler' framework='adf' />,
	document.getElementById('root')
)
