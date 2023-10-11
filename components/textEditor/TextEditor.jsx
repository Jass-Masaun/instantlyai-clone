import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import Toolbar, { modules, formats } from './QuillToolbar';
import 'react-quill/dist/quill.snow.css';

export const TextEditor = () => {
  const [state, setState] = useState({ value: null });

  const handleChange = (value) => {
    setState({ value });
  };
  return (
    <div className='flex flex-col flex-1 w-full text-editor'>
      <ReactQuill
        theme='snow'
        value={state.value}
        onChange={handleChange}
        placeholder={'Write something awesome...'}
        modules={modules}
        formats={formats}
        className='h-full'
      />
      <div className='border-t'>
        <Toolbar currentValue={state.value} />
      </div>
    </div>
  );
};

export default TextEditor;
