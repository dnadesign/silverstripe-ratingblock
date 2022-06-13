import React, { forwardRef } from 'react';
import Tag from '../tag/tag';

export const TagList = forwardRef((props, ref) => {
    const { tags, activeTags, disabled, onChange } = props;

    return <div className='rating__tags' ref={ref} >
        {
            Object.values(tags).map((tag) => {
                const checked = activeTags.includes(tag);
                // need to include the checked prop on the key
                // as react's diff algo will try and reuse the html
                // as the element has not changed (it doesn't pick up on the checked prop)
                // inclduing the checked prop on the key will force it to re-render
                return <Tag
                    key={`tag_${tag}${checked ? '_checked' : ''}`}
                    label={tag}
                    active={checked}
                    disabled={disabled}
                    onChange={e => onChange(e, tag)}
                />;
            })
        }
        <input type='hidden' name='input_tags' id='input_tags' value={tags} />
    </div>;
});
