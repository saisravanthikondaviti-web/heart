import { useState } from "react";

function History(){

const [history] = useState([]);

return(

<div>

<h2>Prediction History</h2>

{history.length === 0 ?

<p>No predictions yet</p>

:

history.map((item,i)=>(
<p key={i}>{item}</p>
))

}

</div>

)

}

export default History