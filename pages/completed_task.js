import { BiCheckDouble, BiCommentDetail } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { MdRemoveDone } from "react-icons/md";

import {
  Dropdown,
  Modal,
  Button,
  Text,
  Textarea,
  Tooltip,
} from "@nextui-org/react";
import { useState } from "react";

const completed_task = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div className="container pt-20">
      <>
        <div className="md:w-[90%] mx-auto mb-3 ">
          <div className="w-full inline-flex items-center bg-white leading-none rounded-xl p-2 pl-4 shadow text-teal text-sm group/edit">
            <button className="inline-flex border border-gray-700 text-white rounded-xl h-5 w-5 hover:w-6 hover:h-6 justify-center items-center hover:transition-all hover:duration-300 group/item mr-1">
              <BiCheckDouble className="hidden group-hover/item:block hover:text-xl text-green-500 hover:transition-all hover:duration-500" />
            </button>
            <span className="text-lg inline-flex px-2 text-gray-700">
              Im a sexy badge and you can use me everyday at every hour. Im a
              sexy badge and you can use me everyday at every hour.
            </span>

            {/* <button className="ml-auto mr-3"></button> */}

            <Dropdown className="ml-20">
              <Dropdown.Button className="ml-auto"></Dropdown.Button>

              <Dropdown.Menu aria-label="Actions" variant="light">
                <Dropdown.Item key="edit" color="warning">
                  <span className="flex items-center">
                    <MdRemoveDone /> Undone
                  </span>
                </Dropdown.Item>
                <Dropdown.Item key="delete" color="error">
                  <span className="flex items-center">
                    <AiOutlineDelete /> Delete
                  </span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className=" ml-3 mr-4">
              <Tooltip
                content={"Developers love Next.js"}
                trigger="hover"
                color="secondary"
              >
                <Button auto flat color="secondary">
                  <span onClick={handler}>
                    <BiCommentDetail className="text-primary text-2xl" />
                  </span>
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Comment modal */}

        <Modal
          closeButton
          preventClose
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text b size={18}>
              Comment
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Textarea
              color="secondary"
              bordered
              labelPlaceholder="Write a comment"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Close
            </Button>
            <Button color="" auto onClick={closeHandler}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default completed_task;
