function Faculties1(){
    useEffect(() => {
        fetch("url")
     
        .then((res) =>{
            return res.json();
        }
        )
        .then(
            (res)=> {
                console.log(res);
            });
    },[]);
    return <h1>Hello</h1>
}

export default Faculties1;