import * as React from 'react';
import { RouterProps } from 'react-router';
import { withRouter } from 'react-router-dom';

class FooterComponent extends React.Component<RouterProps> {
    public render() {
        if (this.props.history.location.pathname.startsWith('/confirm')) {
            return <React.Fragment />;
        }

        return (
            <React.Fragment>
                <footer className="pg-footer">
                    <span>Copyrights Reserved</span>
                    <a href="https://www.chankura.com">Chankura Inc</a>
                </footer>
            </React.Fragment>
        );
    }
}

// tslint:disable-next-line:no-any
const Footer = withRouter(FooterComponent as any) as any;

export {
    Footer,
};
