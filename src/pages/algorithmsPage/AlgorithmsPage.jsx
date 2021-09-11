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
        <h1>Algorithms Page</h1>
        <div className="row m-b">
          <div className="col-xs-12 m-b">
            put filters here
          </div>
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
        </div>
        <div className="row m-b">
          <Editor
            open={showEditor}
            algorithm={selectedAlgorithm}
            onClose={() => {
              setShowEditor(false)
              setAlgorithm({})

            }}
          />
        </div>
      </Container>
    </div>
  )
}

export default AlgorithmsPage