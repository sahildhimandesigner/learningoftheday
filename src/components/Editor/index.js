import React from 'react'
import { Editor } from "react-draft-wysiwyg";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";
import { EditorState, convertToRaw, ContentState } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorField = ({
  input,
  meta,
  field,
  form,
  label,
  placeholder,
  labelCss
}) => {
  const [active, setActive] = React.useState();
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
  React.useEffect(() => {
    if (form.dirty) {
      return;
    }
    if (!field.value) {
      return;
    }
    const contentBlock = htmlToDraft(field.value);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  }, [field.value, form.dirty]);

  const onEditorStateChange = editorState => {
    changeValue(editorState);
  };

  const changeValue = editorState => {
    setEditorState(editorState);
    form.setFieldValue(
      field.name,
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };
  return (
    <>
        <Editor
          editorState={editorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          onEditorStateChange={editorState => onEditorStateChange(editorState)}
          name={field.name}
          id={field.name}
          onFocus={() => setActive(true)}
          onBlur={e => {
            setActive(false);
            field.onBlur(e);
          }}
        />
    </>
  );
};

export default EditorField;