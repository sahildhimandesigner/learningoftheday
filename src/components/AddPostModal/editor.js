import React, { useState } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class TextEditor extends React.Component {
  
  state = {
    content: '',
  }
  
  checkEditorState = (event, editor) => {
    const data = editor.getData();
    this.setState({content: data})
    console.log(event, data)
  }

  render(){
    return(
      <CKEditor
        editor={ ClassicEditor }
        onChange={this.checkEditorState}
      />
    )
  }
}

export default TextEditor;