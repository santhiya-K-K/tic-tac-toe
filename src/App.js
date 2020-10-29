import React,{useState} from 'react';
import Icons from "./components/icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card,CardBody,Container,Button,Col,Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const itemArray= new Array(9).fill('empty')

function App() {
  const [isCross,setIsCross]=useState(false)
  const [winMessage,SetWinMessage]=useState('')
  const reloadGame=()=>{
    setIsCross(false);
    SetWinMessage("");
    itemArray.fill("empty",0,9)
  }

  const checkwinner=()=>{
      if(
        itemArray[0]===itemArray[1] && 
        itemArray[0]===itemArray[2] &&
        itemArray[0] !=="empty"
      ){
       SetWinMessage(`${itemArray[0]} won`);
      }
      else if(
        itemArray[3]!=="empty" &&
        itemArray[3]===itemArray[4]&&
        itemArray[3]===itemArray[5]
      ) {
        SetWinMessage(`${itemArray[3]} won`)
      }
      else if(
        itemArray[6]!=="empty"&&
        itemArray[6]===itemArray[7]&&
        itemArray[6]===itemArray[8]
      ){
        SetWinMessage(`${itemArray[6]} won`)
      }
      else if(
        itemArray[0]!=="empty" &&
        itemArray[0]===itemArray[3]&&
        itemArray[0]===itemArray[6]
      ) {
        SetWinMessage(`${itemArray[0]} won`)
      }
      else if(
        itemArray[1]!=="empty"&&
        itemArray[1]===itemArray[4]&&
        itemArray[1]===itemArray[7]
      ){
        SetWinMessage(`${itemArray[1]} won`)
      }
      else if(
        itemArray[2]!=="empty"&&
        itemArray[2]===itemArray[5]&&
        itemArray[2]===itemArray[8]
      ){
        SetWinMessage(`${itemArray[2]} won`)
      }
      else if(
        itemArray[0]!=="empty"&&
        itemArray[0]=== itemArray[4]&&
        itemArray[0]=== itemArray[8]
      ) {
        SetWinMessage(`${ itemArray[0]} won`)
      }
      else if(
        itemArray[2]!=="empty"&&
        itemArray[2]===itemArray[4]&&
        itemArray[2]===itemArray[6]
      )
      {
        SetWinMessage(`${itemArray[2]} won`)
      }
      else if(
        itemArray[0]!=="empty"&& itemArray[1 ]!=="empty"&& itemArray[2]!=="empty" && itemArray[3]!=="empty" && 
        itemArray[4 ]!=="empty"&& itemArray[5]!=="empty" && itemArray[6]!=="empty" && itemArray[8]!=="empty"&&itemArray[7]  !=="empty"
        )
        {
          SetWinMessage("game tie")
        }
      
      
  };

  
  const changeItem=(itemNumber)=>{
    if(winMessage){
      return toast(winMessage,{type:"success"});
    }
    if(itemArray[itemNumber]==="empty"){
      itemArray[itemNumber]=isCross?"cross":"circle"
      setIsCross(!isCross)
    }
    else{
      return toast("aldready filled",{type:"error"})
    }
    checkwinner()
 }
  
  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center"/>
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage?(
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
               {winMessage}
              </h1> 
            </div>
          ): (
            <h1 className="text-center text-warning">
              {isCross?"cross":"circle"} turns
            </h1>
          )}
          <div className="grid">
                {itemArray.map((item,index)=>{
                 return(
                  <Card color="warning" onClick={()=>changeItem(index)}>
                    <CardBody className="box">
                     <Icons name={item} />
                    </CardBody>
                  </Card>
                );
              })}
          </div>
        </Col>
      </Row>
      <br />
      <Button  color="success" block onClick={reloadGame}>reload</Button>
    </Container>
  );
            }

export default App;
