
const SalesData = [
    {
        name: "Vanessa Portrait",
        task: "Sell 100 Products",
    },
    {
        name: "Louise Milton",
        task: "Negotiate Contracts",
    },
    {
        name: "Bob Kief",
        task: "Oversee Processes"
    }
    
]

const status = "Feeling Okay!";

const color = "white";

export default (state = [SalesData,status, color], action)=>{

    const newState = [...state];

    if(action.type === 'administrated' || action.type === 'resourced'){
        
        newState[1] = "Feeling Good!";
        newState[2] = "green";

    }else if(action.type === 'coded' || action.type === 'researched'){

        newState[1] = "Not Happy!";
        newState[2] = "red";

    }

    return newState;
}