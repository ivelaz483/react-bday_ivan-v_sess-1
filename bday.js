function Bday({myObj}) {
return (
    <div>
<div class="data-container">
  <div className="img-container"><img src={myObj.pic} id=""></img></div>
  <div className="data-info">
  <p>Name: {myObj.name}<br/>
    Age: {myObj.age}<br/>
    Date of Birth: {myObj.bday}</p>
  </div>
</div> 
</div>
)
}

export default Bday;
