'use client';

import React, { useState } from 'react';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'font-awesome/css/font-awesome.css';
import 'froala-editor/js/third_party/font_awesome.min.js';

import FroalaEditor from 'react-froala-wysiwyg';
import { createFroalaCustomButton } from '@/utils/froala/froalaCustomButton';

const TextEditor = () => {
  const [content, setContent] = useState('<p></p>');

  const handleModelChange = (model) => {
    setContent(model);
  };

  const handleClick = () => {
    console.log(content);
  };

  const handlePreviewEmail = () => {
    alert('Preview email content:\n' + content);
  };

  const handleClearHTML = () => {
    setContent('<p></p>');
  };

  createFroalaCustomButton({
    icon: 'previewEmail',
    iconName: 'eye',
    title: 'Preview email',
    callback: handlePreviewEmail,
  });

  createFroalaCustomButton({
    icon: 'clearHTML',
    iconName: 'eraser',
    title: 'Clear HTML',
    callback: handleClearHTML,
  });

  return (
    <FroalaEditor
      model={content}
      onModelChange={handleModelChange}
      tag='textarea'
      config={{
        placeholderText: 'Start typing here...',
        height: '100%',
        toolbarBottom: true,
        charCounterCount: false,
        toolbarButtons: {
          moreParagraph: {
            // List of buttons used in the  group.
            buttons: [
              'previewEmail',
              'clearHTML',
              // 'inlineClass',
              // 'inlineStyle',
            ],

            // Alignment of the group in the toolbar.
            align: 'left',

            // By default, 3 buttons are shown in the main toolbar. The rest of them are available when using the more button.
            buttonsVisible: 2,
          },
          moreText: {
            // List of buttons used in the  group.
            buttons: [
              'bold',
              'italic',
              'underline',
              'clearFormatting',
              'fontFamily',
              'fontSize',
              'textColor',
              'backgroundColor',
              'strikeThrough',
              'subscript',
              'superscript',
              // 'inlineClass',
              // 'inlineStyle',
            ],

            // Alignment of the group in the toolbar.
            align: 'left',

            // By default, 3 buttons are shown in the main toolbar. The rest of them are available when using the more button.
            buttonsVisible: 2,
          },
          moreRich: {
            buttons: [
              'insertLink',
              'insertImage',
              'insertVideo',
              'insertTable',
              'emoticons',
              'fontAwesome',
              'specialCharacters',
              'embedly',
              'insertFile',
              'insertHR',
            ],
            align: 'left',
            buttonsVisible: 3,
          },
          moreMisc: {
            buttons: [
              // 'undo',
              // 'redo',
              // 'fullscreen',
              // 'print',
              // 'getPDF',
              // 'spellChecker',
              // 'selectAll',
              'html',
              // 'help',
            ],
            align: 'left',
            buttonsVisible: 2,
          },
        },
      }}
    />
  );
};

export default TextEditor;
