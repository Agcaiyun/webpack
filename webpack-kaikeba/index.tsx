import * as React from 'react';
import { render } from 'react-dom';
import { Hello } from './helloClass'

render(
	<Hello compiler='compiler' framework='adf' />,
	document.getElementById('root')
)
