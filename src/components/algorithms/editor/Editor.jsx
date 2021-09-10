import React from "react"
import PropTypes from "prop-types"
import AceEditor from "react-ace"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import Tag from "../../tag/tag"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/theme-nord_dark"

Editor.propTypes = {
  open: PropTypes.bool,
  algorithm: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    question: PropTypes.string,
    difficulty: PropTypes.oneOf(["TOO_EASY","EASY", "MEDIUM", "HARD", "INSANE"])
  }),
  onClose: PropTypes.func
}

function Editor({ open, algorithm, onClose }) {
  return (
    <Dialog
      open={open}
      maxWidth="md"
      onClose={onClose}
      fullWidth
    >
      <DialogTitle>
        {algorithm && algorithm.title}
        {
          algorithm.difficulty &&
          <Tag
            className="m-0"
            tag={algorithm.difficulty.toLowerCase()}
            size="small"
          />
        }
      </DialogTitle>
      <DialogContent className="p-t-0" style={{maxHeight: 100}} >
        <DialogContentText id="alert-dialog-description" style={{whiteSpace: "pre-wrap"}}>
          {algorithm && algorithm.question}
        </DialogContentText>
      </DialogContent>
      <AceEditor
        placeholder={`show one programmer quote from that crazy api (https://github.com/15Dkatz/official_joke_api)
        `}
        mode="python"
        theme="nord_dark"
        name={algorithm.id}
        value={`
def productExceptSelf(input):
  '''I didn't get to this solution by myself'''
  right_mul = [0] * len(input)
  right_mul[-1] = input[-1]
  i = len(input) - 2
  while i >= 0:
    right_mul[i] = right_mul[i+1] * input[i]
    i -= 1

  output = [0]*len(input)
  prefix = 1
  for i in range(len(output) - 1):
    output[i] = prefix * right_mul[i + 1]
    prefix *= input[i]

  output[-1] = prefix
  return output
`}
        fontSize={14}
        width="100%"
        editorProps={{ $blockScrolling: true }}
        enableBasicAutocompletion
        enableSnippets
        readOnly
      />
    </Dialog>
  )
}

export default Editor