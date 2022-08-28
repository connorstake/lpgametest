import React, {useState, useEffect} from 'react';


export default function Game({data}) {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    const [areaMap, setAreaMap] = useState({})
    const [, updateState] = React.useState();
    const [counter, setCounter] = useState(0)
    const [matched, setMatched] = useState(0)
    const forceUpdate = React.useCallback(() => updateState({}), []);
    useEffect(() => {
        let counter = 0
        let map = {}
        Object.keys(data).forEach((v)=> {
            map[v] = {a:false, i:counter, p:data[v], d: true}
            counter++
        })
        Object.keys(data).forEach((v)=> {
            map[data[v]] = {a:false, i:counter, p:v, d:true}
            counter++
        })
        setAreaMap(map)
    }, [data, setAreaMap])


    const selectButton = (n) => {
        let currCount = counter
        currCount++
        console.log(currCount)
        let currentMap = areaMap

        // handle if on second Click
        if (currCount === 2) {
            if (checkIfFoundMatch(n)) {
                currentMap[n].d = false
                currentMap[[currentMap[n].p]].d = false
                setAreaMap(currentMap)
                console.log(areaMap)
                setCounter(0)
                setMatched(matched + 2)
                forceUpdate()
                return areaMap
            } else {
                setCounter(0)
                Object.keys(areaMap).forEach((v)=> {
                    if (currentMap[v].a === true) {
                        currentMap[v].a = false
                    }
                })
                forceUpdate()
                return areaMap
            }
        } 
        
        currentMap[n].a = !currentMap[n].a
        setAreaMap(currentMap)
        setCounter(counter + 1)
        forceUpdate()
        return areaMap
    }


    const checkIfFoundMatch = (selected) => {
        if (areaMap[areaMap[selected].p].a) {
            return true
        } 
        return false
    }

    return (
  
        <div>
        {matched === Object.keys(areaMap).length ? "Congratulations, you won!" : null}

        { areaMap && Object.keys(areaMap).length > 0 ? Object.keys(areaMap).map((v,i)=> {
            return areaMap[v].d ? (
            <button key={areaMap[v].i} style={areaMap[v].a ? {backgroundColor: "blue"} : {backgroundColor: "grey"}} onClick={()=>{setAreaMap(selectButton(v))}}>{v}</button>
            ) : null
        }): null}
        </div>
    )

  }