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
                <div className={'border'}>
                    {
                        `Hello from ${this.props.compiler} and ${this.props.framework}`
                    }
                </div>
                <div className={'color'}>color</div>
            </h1>
        )
    }
} 