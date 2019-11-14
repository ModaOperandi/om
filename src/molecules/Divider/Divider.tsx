import classNames from 'classnames';
import React from 'react';
import './Divider.scss';

export interface Props {
    text: string;
    noLine?: boolean;
    doubleLine?: boolean;
}

export const Divider : React.FC<Props> = ({text, noLine, doubleLine}) => {
    const classes = classNames({
        'Divider': true,
        'Divider--no-line': noLine,
        'Divider--is-double': doubleLine
    });

    return (
        <div className={classes}>
            <hr className="Divider__left"/>
            <div className="Divider__text">{text}</div>
            <hr className="Divider__right"/>
        </div>
    );
};