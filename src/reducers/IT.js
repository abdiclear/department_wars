const ITData = [
    {
        name: "Steve Jobs",
        task: "Develop iOS apps",
    },
    {
        name: "Bill Gates",
        task: "Update to Windows 11",
    },
    {
        name: "Larry Page",
        task: "Integrate Google Do-It-All"
    }
    
]

const status = "Feeling Okay!";

const color = "white";

export default (state = [ITData,status, color], action)=>{

    const newState = [...state];

    if(action.type === 'administrated' || action.type === 'researched'){
        
        newState[1] = "Feeling Good!";
        newState[2] = "green";

    }else if(action.type === 'sold' || action.type === 'resourced'){

        newState[1] = "Not Happy!";
        newState[2] = "red";

    }

    return newState;
}