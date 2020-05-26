import React  from 'react'
import { Editor } from "react-draft-wysiwyg";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";
import { EditorState, convertToRaw, ContentState } from "draft-js";


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