import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import AceEditor from "react-ace"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import Slide from "@material-ui/core/Slide"
import Tag from "../../tag/tag"
import { actions } from "../../../store/slices/algorithms"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/theme-nord_dark"
import "./Editor.scss"

Editor.propTypes = {
  open: PropTypes.bool,
  algorithm: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    question: PropTypes.string,
    difficulty: PropTypes.oneOf(["TOO_EASY", "EASY", "MEDIUM", "HARD", "INSANE"]),
    answers: PropTypes.objectOf(PropTypes.string)
  }),
  onClose: PropTypes.func
}

function Editor({ open, algorithm, onClose }) {
  const dispatch = useDispatch()
  const [fetchedAlgorithm, setFetchedAlgorithm] = useState({ answers: {} })
  const [showQuestion, setShowQuestion] = useState(false)
  useEffect(async () => {
    if (open && !algorithm.question) {
      algorithm = await dispatch(actions.getAlgorithmDetail(algorithm.id))
      setFetchedAlgorithm(algorithm)
    }
  }, [open])

  const question = algorithm.question || fetchedAlgorithm.question
  const answers = algorithm.answers || fetchedAlgorithm.answers

  return (
    <Dialog
      className="editor"
      open={open}
      maxWidth="md"
      onClose={() => {
        onClose()
        setShowQuestion(false)
        
      }}
      fullWidth
    >
      <DialogTitle style={{ position: "relative" }}>
        <div>
          {algorithm && algorithm.title}
          {
            algorithm.difficulty &&
            <Tag
              className="m-0"
              tag={algorithm.difficulty.toLowerCase()}
              size="small"
            />
          }
        </div>
        <Button onClick={() => setShowQuestion(!showQuestion)}
          style={{
            textTransform: "none"
          }}>
          {showQuestion ? "Hide" : "Show"} question
        </Button>

      </DialogTitle>
      <div style={{position: "relative"}}>
        <AceEditor
          placeholder={`show one programmer quote from that crazy api (https://github.com/15Dkatz/official_joke_api)
          `}
          mode="python"
          theme="nord_dark"
          name={algorithm.id}
          value={answers.python || `
  def productExceptSelf(input):
    '''DEFAULT: I didn't get to this solution by myself'''
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
          // enableBasicAutocompletion
          // enableSnippets
          readOnly
        />
        <Slide
          className="question-slide"
          direction="left"
          in={showQuestion}
          mountOnEnter
          unmountOnExit
        >
          <div className="question-container" >
            {question}
          </div>
        </Slide>
      </div>
    </Dialog>
  )
}

export default Editor