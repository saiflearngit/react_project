

function Filter(props) {

  //  arrayObject.filter(callback, contextObject)

 // text.includes("world")

    function bytitle(e){
       let arr = [...props.list]
       let oldarr = [...props.list]
      arr = arr.filter((item) => item.title.includes(e.target.value))
      return e.target.value=="" ? oldarr : arr
    }

    return (
      <div>
       <input type='text' onChange={(e) => props.setList([...bytitle(e)])} ></input>
       </div>
    );
  }
  
  export default Filter;