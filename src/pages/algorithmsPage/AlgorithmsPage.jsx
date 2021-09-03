import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Container } from "@material-ui/core"
import Editor from "../../components/algorithms/editor/Editor"
import AlgorithmCard from "../../components/algorithms/algorithmCard/AlgorithmCard"
import { selectors } from "../../store/slices/algorithms"

const tags = {
  0: ["Loops", "Strings"],
  1: ["Data Structures", "Strings", "Loops"],
  2: ["Structures", "Strings"],
  3: ["Recursive", "bitMap"],
  4: ["Dive"]
}

function AlgorithmsPage() {
  const algorithms = useSelector(selectors.algorithms)
  const [showEditor, setShowEditor] = useState(false)
  const [selectedAlgorithm, setAlgorithm] = useState({title: "Product of array except self", difficulty: "EASY"})
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
                question="Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running"
                onAvatarClick={(algorithm) => setShowEditor(true)}
                tags={tags[algorithm.id%5]}
              />
            </div>)
          )}
        </div>
        <div className="row m-b">
          <Editor
            open={showEditor}
            algorithm={selectedAlgorithm}
            onClose={() => setShowEditor(false)}
          />
        </div>
      </Container>
    </div>
  )
}

export default AlgorithmsPage