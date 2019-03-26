import React, { useState, useRef, useMemo, useContext } from 'react';
import { cn } from '@bem-react/classname';
import { Input } from '../Input/Input';
import { withRichControl } from '../Input/control/Input_control_rich';
import { withDefaultControl } from '../Input/control/Input_control_default';

import './NewsCreator.scss';
import { Button } from '../Button/Button';
import { DispatchContext } from '../App';
import { addAction } from '../../store/store.actionCreators';

const cnNewsCreator = cn('NewsCreator');
const TextAreaInput = withRichControl(Input);
const DefaultInput = withDefaultControl(Input);

export interface INewsCreatorProps {
    //addNewsItem: (newsItem: News) => void;
}

export const NewsCreator: React.FC<INewsCreatorProps> = React.memo(() => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const dispatch = useContext(DispatchContext);

    const MDefaultInput = useMemo(() => <DefaultInput ref={inputRef} text={title} label='Заголовок' control='default' onChangeText={e => setTitle(e.target.value)} />, [title]);
    const MTextareaInput = useMemo(() => <TextAreaInput ref={textAreaRef} text={text} label='Текст новости' control='rich' onChangeText={e => setText(e.target.value)} />, [text]);

    const onAddButtonClick = () => {
        setTitle('');
        setText('');
        dispatch(addAction({
            text,
            title,
            timestamp: new Date().getUTCMilliseconds()
        }));
    };

    return (
        <div className={cnNewsCreator()}>
            {MDefaultInput}
            {MTextareaInput}
            <Button text='Добавить' onButtonClick={onAddButtonClick} />
        </div>
    );
});