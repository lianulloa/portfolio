import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import AceEditor from "react-ace"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import Slide from "@material-ui/core/Slide"
import Tag from "../../tag/tag"
import { actions } from "../../../store/slices/algorithms"
import { mdIt } from "../../../utils/mdIt"
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
  const [language, setLanguage] = useState("")
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value)
  }

  useEffect(async () => {
    if (open && !algorithm.question) {
      algorithm = await dispatch(actions.getAlgorithmDetail(algorithm.id))
      setFetchedAlgorithm(algorithm)
    }
  }, [open])

  const answers = algorithm.answers || fetchedAlgorithm.answers
  const languages = Object.keys(answers)

  const question = algorithm.question || fetchedAlgorithm.question
  let markdownQuestion = ""
  if (question) {
    markdownQuestion = mdIt.render(question)
  }

  return (
    <Dialog
      className="editor"
      open={open}
      maxWidth="md"
      onClose={() => {
        onClose()
        setShowQuestion(false)
        setLanguage("")
        setFetchedAlgorithm({ answers: {} })
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
        <div>
          {languages.length > 1 && 
            <Select
              className="m-r"
              value={language}
              onChange={handleLanguageChange}
              displayEmpty
              SelectDisplayProps={{style: {minWidth: 142, boxSizing: "border-box"}}}
            >
              <MenuItem value="" disabled>
                Select language
              </MenuItem>
              {Object.keys(answers).map(lang => <MenuItem key={lang} value={lang}>{lang}</MenuItem>)}
            </Select>
          }
          <Button onClick={() => { setShowQuestion(!showQuestion)}}
            style={{
              textTransform: "none"
            }}>
            {showQuestion ? "Hide" : "Show"} question
          </Button>
        </div>

      </DialogTitle>
      <div style={{position: "relative"}}>
        <AceEditor
          // TODO: When it get fixed
          placeholder={"\n\n\n\n\n\t\tHow many programmers does it take to change a lightbulb?\n\n\t\tNone that's a hardware problem\n\n\n"}
          mode={language || languages[0]}
          theme="nord_dark"
          name={algorithm.id}
          value={
            answers[ language || languages[0] ]
          }
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
          <div className="question-container" dangerouslySetInnerHTML={{__html: markdownQuestion}} />
        </Slide>
      </div>
    </Dialog>
  )
}

export default Editor