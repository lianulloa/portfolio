import React, {useState} from "react"
import { Container } from "@material-ui/core"
import Editor from "../../components/algorithms/editor/Editor"
import AlgorithmCard from "../../components/algorithms/algorithmCard/AlgorithmCard"

const tags = {
  0: ["Loops", "Strings"],
  1: ["Data Structures", "Strings", "Loops"],
  2: ["Structures", "Strings"],
  3: ["Recursive", "bitMap"],
  4: ["Dive"]
}

function AlgorithmsPage() {
  const [showEditor, setShowEditor] = useState(false)
  const [algorithm, setAlgorithm] = useState({title: "Product of array except self", difficulty: "EASY"})
  return (
    <div className="App-section" id="App-algorithms">
      <Container maxWidth="md">
        <h1>Algorithms Page</h1>
        <div className="row m-b">
          <div className="col-xs-12 m-b">
            put filters here
          </div>
          {[1,2,3,4,5,6,7,8,9,0].map(_ => 
            (<div className="col-md-6 col-xs-12 m-b-md" key={_} >
              <AlgorithmCard
                title="Product of array except self"
                question="Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running"
                onAvatarClick={(algorithm) => setShowEditor(true)}
                tags={tags[_%5]}
              />
            </div>)
          )}
        </div>
        <div className="row m-b">
          <Editor
            open={showEditor}
            algorithm={algorithm}
            onClose={() => setShowEditor(false)}
          />
        </div>
      </Container>
    </div>
  )
}

export default AlgorithmsPage