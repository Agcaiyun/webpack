import * as React from 'react';
import './hello.styles.less'

export interface HelloProps {
    compiler: string;
    framework: string;
}

export class Hello extends React.Component<HelloProps, any> {
    render() {
        return (
            <h1>
                {
                    `Hello from ${this.props.compiler} and ${this.props.framework}`
                }
                <div className={'box'}>color</div>
            </h1>
        )
    }
} 