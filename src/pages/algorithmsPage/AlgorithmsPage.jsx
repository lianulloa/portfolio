import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Container } from "@material-ui/core"
import Editor from "../../components/algorithms/editor/Editor"
import AlgorithmCard from "../../components/algorithms/algorithmCard/AlgorithmCard"
import { selectors, actions } from "../../store/slices/algorithms"
import HerokuLoading from "../../components/common/HerokuLoading"


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
                difficulty={algorithm.difficulty.toLowerCase().replace("_", " ")}
                onClick={() => {
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
            <HerokuLoading />
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