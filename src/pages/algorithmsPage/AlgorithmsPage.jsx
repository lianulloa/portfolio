import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Container } from "@material-ui/core"
import Editor from "../../components/algorithms/editor/Editor"
import AlgorithmCard from "../../components/algorithms/algorithmCard/AlgorithmCard"
import { selectors, actions } from "../../store/slices/algorithms"

const tags = {
  0: ["Loops", "Strings"],
  1: ["Data Structures", "Strings", "Loops"],
  2: ["Structures", "Strings"],
  3: ["Recursive", "bitMap"],
  4: ["Dive"]
}

function AlgorithmsPage() {
  const algorithms = useSelector(selectors.algorithms)
  const dispatch = useDispatch()
  const [showEditor, setShowEditor] = useState(false)
  const [selectedAlgorithm, setAlgorithm] = useState({})
  
  useEffect(() => {
    if (!algorithms.length)
      dispatch(actions.getAlgorithms())
  }, [])

  return (
    <div className="App-section" id="App-algorithms">
      <Container maxWidth="md">
        <h1 className="m-b-xs">Problem Solving</h1>
        <div className="row m-b">
          <div className="col-xs-12 m-b">
            For some problems, the provided answer is not mine.
            I have had to look some solutions up.
          </div>
          {false && 
            <div className="col-xs-12 m-b">
              put filters here
            </div>
          }
          {algorithms.map(algorithm => 
            (<div className="col-md-6 col-xs-12 m-b-md" key={algorithm.id} >
              <AlgorithmCard
                title={algorithm.title}
                question={algorithm.questionPreview}
                source={algorithm.source}
                onAvatarClick={() => {
                  setAlgorithm(algorithm)
                  setShowEditor(true)
                }}
                tags={algorithm.tags}
              />
            </div>)
          )}
          {
            !algorithms.length &&
            // TODO: show a better component for this
            <p style={{ minHeight: 350, display: "flex", alignItems: "center", margin: "auto" }}>
              Loading (May take a few seconds for the heroku deployed backend to start)...
            </p>
          }
        </div>
        {!!algorithms.length &&
          <div className="col-xs-12 m-b">
          Still more to come
          </div>
        }
        <div className="row m-b">
          <Editor
            open={showEditor}
            algorithm={selectedAlgorithm}
            onClose={() => {
              setShowEditor(false)
            }}
          />
        </div>
      </Container>
    </div>
  )
}

export default AlgorithmsPage