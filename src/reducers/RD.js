const RDData = [
    {
        name: "Jesse Wilcox",
        task: "Develop Product #15aera",
    },
    {
        name: "Marie Curie",
        task: "Conclude Experiment #cimotabus",
    },
    {
        name: "Polly Pope",
        task: "Deploy Project C.R.E.A.M."
    }
    
]

const status = "Feeling Okay!";

const color = "white";

export default (state = [RDData,status, color], action)=>{

    const newState = [...state];

    if(action.type === 'sold' || action.type === 'coded'){
        
        newState[1] = "Feeling Good!";
        newState[2] = "green";

    }else if(action.type === 'adminstrated'){

        newState[1] = "Not Happy!";
        newState[2] = "red";

    }

    return newState;

}