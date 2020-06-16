export default (e)=>{

    if(e.target.textContent === "Pending"){
        e.target.textContent = "In Progress";
    }else{
        e.target.textContent = "Completed";
        e.target.disabled = true;
    }

    return {
        type: 'buttonChangeR',
        payload: {e}
    }
}