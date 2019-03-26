import React, { useState } from 'react';
import { News } from '../../typings';
import { cn } from '@bem-react/classname';

import './NewsBlock.scss';
import { Button } from '../Button/Button';
import { noop } from '../../utils';
import { ButtonControl } from '../ButtonControl/ButtonControl';
import { withIcon } from '../Button/_icon/Button_icon';
import { deleteAction } from '../../store/store.actionCreators';
import { IDispatchComponentProps, DispatchComponent } from '../DispatchComponent/DispatchComponent';

export interface INewsBlockProps extends IDispatchComponentProps {
    news: News;
}

const IconButton = withIcon(Button);

const cnNewsBlock = cn('NewsBlock');

const NewsBlockPresenter: React.FC<INewsBlockProps> = props => {
    const { news, dispatch } = props;
    const [richMode, setRichMode] = useState(false);
    const [deleteMode, setDeleteMode] = useState(false);

    const onDeleteCancelClick = () => setDeleteMode(!deleteMode);
    const onDeleteClick = () => dispatch && dispatch(deleteAction(news));

    const renderRichControl = () => {
        return (
            <div className={cnNewsBlock('RichControl')} onClick={() => setRichMode(!richMode)}>
                {richMode ? 'Свернуть' : 'Развернуть'}
            </div>
        );
    };

    const renderDeleteWarning = () => {
        if (!deleteMode) {
            return null;
        }

        return (
            <div className={cnNewsBlock('DeleteWarning')}>
                <div className={cnNewsBlock('DeleteText')}>Удалить новость?</div>
                <ButtonControl className={cnNewsBlock('DeleteButtons')}>
                    <Button text='Да' onButtonClick={onDeleteClick} />
                    <Button text='Нет' onButtonClick={onDeleteCancelClick} />
                </ButtonControl>
            </div>
        );
    };

    return (
        <div className={cnNewsBlock()}>
            <h2 className={cnNewsBlock('Title')}>
                <span className={cnNewsBlock('TitleText')}>{news.title}</span>
                <ButtonControl>
                    <IconButton icon={{ name: 'create' }} onButtonClick={noop} text='Редактировать' />
                    <IconButton icon={{ name: 'trash' }} onButtonClick={onDeleteCancelClick} text='Удалить' />
                </ButtonControl>
            </h2>
            <div className={cnNewsBlock('Text', { rich: richMode })}>{news.text}</div>
            {renderRichControl()}
            {renderDeleteWarning()}
        </div>
    );
};

export const NewsBlock = React.memo(DispatchComponent(NewsBlockPresenter));