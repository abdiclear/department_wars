const AdminData = [
    {
        name: "Nancy Bellkins",
        task: "Meet with MoneyMaking Inc.",
    },
    {
        name: "Popovich Gregory",
        task: "Performance Reviewing",
    },
    {
        name: "Kcarab Amabo",
        task: "P-Level Duties"
    }
    
]

const status = "Feeling Okay!";

const color = "white";

export default (state = [AdminData,status, color], action)=>{

    const newState = [...state];

    if(action.type === 'resourced'){
        
        newState[1] = "Feeling Good!";
        newState[2] = "green";

    }else if(action.type === 'coded' || action.type === 'researched' || action.type === 'sold'){

        newState[1] = "Not Happy!";
        newState[2] = "red";

    }

    return newState;
}