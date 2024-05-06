import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import "../ComponentCss/discripition.css"

export default function Discription(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  function showDetail() {
    // alert('detailssss')
    let showbutton = document.querySelector('.showbutton')
    let mod = document.querySelector('.model')
    // mod.style.border = '5px solid'
    mod.style.position = 'absolute';
    mod.style.width = ' 100%';
    mod.style.height = ' 100vh';
    mod.style.top = '10%';
    // mod.style.boxShadow = '1px 1px 5px 5px black'
    mod.style.zIndex = '1'
    console.log(props.pr)
    console.log(props.ind)
    if (props.pr) {
      console.log("hello")
      // showbutton.disabled = true

    }
  }
  return (
    <>
      <Button className="showbutton" style={{ background: 'black', padding: '5px 0px' }} onClick={showDetail} onPress={onOpen}>Detail</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>

        <ModalContent className="model" style={{ border: '1px solid', height: 'auto' }}>
          {(onClose) => (
            <>
              <div className="content">
                <div className="left">
                  <img src={props.pr.thumbnail} alt="" />
                  <p>{'brand:' + props.pr.brand}</p>
                  <p>{'model:' + props.pr.title}</p>
                  <p>{props.pr.description}</p>
                  <p>{'category:' + props.pr.category}</p>
                  <p>{'ratings:' + props.pr.rating}</p>
                </div>
                <div className="right">
                  <h1>the product is</h1>
                  <p>{'price: $' + props.pr.price}</p>
                  <p>{'discount:' + props.pr.discountPercentage + "%"}</p>
                  <div className="buttons">
                    <button onPress={''}>Add to cart</button><br />
                    <button>buy now</button>
                  </div>
                  <p>{'availability:' + props.pr.stock}</p>
                  <div className="footer">
                    <Button className="close" color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    {/* <Button color="primary" onPress={onClose}>
                  Action
                      </Button> */}
                  </div>
                </div>
              </div>
            </>
          )}
        </ModalContent>

      </Modal>
    </>
  );
}
