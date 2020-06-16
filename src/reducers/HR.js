
const HRData = [
    {
        name: "Jeff Smith",
        task: "Sign New Hire Forms",
    },
    {
        name: "Larry Joe",
        task: "Handle Fired Employees",
    },
    {
        name: "Miranda Keyton",
        task: "Handle Budget"
    }
    
]

const status = "Feeling Okay!";

const color = "white";

export default (state = [HRData,status,color], action)=>{

    const newState = [...state];

    if(action.type === 'administrated'){
        
        newState[1] = "Feeling Good!";
        newState[2] = "green";

    }

    return newState;
}