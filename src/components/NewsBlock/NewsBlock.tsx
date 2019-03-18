import React, { useState } from 'react';
import { News } from '../../typings';
import { cn } from 'recn';

import './NewsBlock.scss';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';
import { noop } from '../../utils';
import { ButtonControl } from '../ButtonControl/ButtonControl';

export interface INewsBlockProps {
    news: News;
}

const cnNewsBlock = cn('NewsBlock');

export const NewsBlock: React.FC<INewsBlockProps> = props => {
    const { news } = props;
    const [text, setText] = useState(news.text);
    const [editMode, setEditMode] = useState(false);
    const [richMode, setRichMode] = useState(false);
    const [deleteMode, setDeleteMode] = useState(false);

    const onDeleteCancelClick = () => setDeleteMode(!deleteMode);
    const renderControls = () => {
        return (
            <div className={cnNewsBlock('Controls')}>

            </div>
        );
    };

    const renderRichControl = () => {
        return (
            <div className={cnNewsBlock('RichControl')} onClick={() => setRichMode(!richMode)}>
                {richMode ? 'Свернуть' : 'Развернуть'}
            </div>
        )
    }

    const renderDeleteWarning = () => {
        if (!deleteMode) {
            return null;
        }

        return (
            <div className={cnNewsBlock('DeleteWarning')}>
                <div className={cnNewsBlock('DeleteText')}>Удалить новость?</div>
                <ButtonControl className={cnNewsBlock('DeleteButtons')}>
                    <Button text='Да' onButtonClick={noop} />
                    <Button text='Нет' onButtonClick={onDeleteCancelClick} />
                </ButtonControl>
            </div>
        );
    }

    return (
        <div className={cnNewsBlock()}>
            <h2 className={cnNewsBlock('Title')}>
                {news.title}
                <ButtonControl>
                    <Button icon={{ name: 'create' }} onButtonClick={noop} />
                    <Button icon={{ name: 'trash' }} onButtonClick={onDeleteCancelClick} />
                </ButtonControl>
            </h2>
            <div className={cnNewsBlock('Text', { rich: richMode })}>{text}</div>
            {renderRichControl()}
            {renderControls()}
            {renderDeleteWarning()}
        </div>
    );
}