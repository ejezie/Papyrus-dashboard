import React from "react";

import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import chart from "./assets/chart.png";

function Dashboard() {
  const [modal, setModal] = React.useState(false);

  const toggleModal = () => {
    setModal(true);
  };
  return (
    <div className="dashboard">
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126844.06348606381!2d3.3718272!3d6.537216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1648493124236!5m2!1sen!2sng"
      ></iframe>
      <div className="block flex" style={{ marginTop: "2.2rem" }}>
        <div className="box flex">
          <div className="text1">Insights</div>
          <div className="top flex">
            <div className="content left flex">
              <div className="bold-text">0/0</div>
              <div className="text">Planned Visits</div>
              <div className="greentext flex">
                <AiOutlineArrowUp className="box-icon" />
                +3%
              </div>
            </div>
            <div className="content right flex">
              <div className="bold-text">0</div>
              <div className="text">Total Sales</div>
              <div className="redtext flex">
                <AiOutlineArrowDown className="box-icon" />
                -0.22%
              </div>
            </div>
          </div>
          <div className="bottom flex">
            <div className="content left-bottom flex">
              <div className="bold-text">0/23</div>
              <div className="text">Fiels Users</div>
              <div className="greentext flex">
                <AiOutlineArrowUp className="box-icon" />
                +3%
              </div>
            </div>
            <div className="content flex">
              <div className="bold-text">0</div>
              <div className="text">Visit Exceptions</div>
              <div className="greentext flex">
                <AiOutlineArrowUp className="box-icon" />
                +40.22%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block flex">
        <div className="box2 flex">
          <div className="text">Payment Summary</div>
          <div className="text-wrap flex">
            <div className="redtext">View All</div>{" "}
            <BsArrowUpRight className="box-icn redtext" />
          </div>
          <div className="top flex">
            <div className="content up flex">
              <div className="bold-text">N4M+</div>
              <div className="text">Total Payments</div>
              <div className="greentext flex">
                <AiOutlineArrowUp className="box-icon" />
                +2.22%
              </div>
            </div>
          </div>
          <div className="bottom flex">
            <div className="content flex">
              <div className="bold-text">N36K+</div>
              <div className="text">Total Sales</div>
              <div className="redtext flex">
                <AiOutlineArrowDown className="box-icon" />
                -0.22%
              </div>
            </div>
          </div>
        </div>
        <div className="box3 flex">
          <div className="text">Another Section</div>
          <div className="text-wrap flex">
            <div className="redtext">View All</div>{" "}
            <BsArrowUpRight className="box-icn redtext" />
          </div>
          <div className="top flex">
            <div className="content up flex">
              <div className="bold-text">N4M+</div>
              <div className="text">Total Payments</div>
              <div className="greentext flex">
                <AiOutlineArrowUp className="box-icon" />
                +2.22%
              </div>
            </div>
          </div>
          <div className="bottom flex">
            <div className="content flex">
              <div className="bold-text">N36K+</div>
              <div className="text">Total Sales</div>
              <div className="redtext flex">
                <AiOutlineArrowDown className="box-icon" />
                -0.22%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block2 flex">
        <div className="box flex">
          <div className="text1">Insights</div>
          <div className="top flex">
            <div className="content left flex">
              <div className="bold-text">0/0</div>
              <div className="text">Planned Visits</div>
              <div className="greentext flex">
                <AiOutlineArrowUp className="box-icon" />
                +3%
              </div>
            </div>
            <div className="content right flex">
              <div className="bold-text">0</div>
              <div className="text">Total Sales</div>
              <div className="redtext flex">
                <AiOutlineArrowDown className="box-icon" />
                -0.22%
              </div>
            </div>
          </div>
          <div className="bottom flex">
            <div className="content left-bottom flex">
              <div className="bold-text">0/23</div>
              <div className="text">Fiels Users</div>
              <div className="greentext flex">
                <AiOutlineArrowUp className="box-icon" />
                +3%
              </div>
            </div>
            <div className="content flex">
              <div className="bold-text">0</div>
              <div className="text">Visit Exceptions</div>
              <div className="greentext flex">
                <AiOutlineArrowUp className="box-icon" />
                +40.22%
              </div>
            </div>
          </div>
        </div>
        <div className="box flex">
          <div className="text1">Insights</div>
          <div className="top flex">
            <div className="content left flex">
              <div className="bold-text">0/0</div>
              <div className="text">Planned Visits</div>
              <div className="greentext flex">
                <AiOutlineArrowUp className="box-icon" />
                +3%
              </div>
            </div>
            <div className="content right flex">
              <div className="bold-text">0</div>
              <div className="text">Total Sales</div>
              <div className="redtext flex">
                <AiOutlineArrowDown className="box-icon" />
                -0.22%
              </div>
            </div>
          </div>
          <div className="bottom flex">
            <div className="content left-bottom flex">
              <div className="bold-text">0/23</div>
              <div className="text">Fiels Users</div>
              <div className="greentext flex">
                <AiOutlineArrowUp className="box-icon" />
                +3%
              </div>
            </div>
            <div className="content flex">
              <div className="bold-text">0</div>
              <div className="text">Visit Exceptions</div>
              <div className="greentext flex">
                <AiOutlineArrowUp className="box-icon" />
                +40.22%
              </div>
            </div>
          </div>
        </div>
        <div className="box flex">
          <div className="text1">Insights</div>
          <img src={chart} alt="chat" />
        </div>
      </div>
      <div className={`info flex ${modal && "nodisplay"}`}>
        <div className="text-wrap flex">
          <div className="text">Key Info</div>
          <div className="icon-wrap flex">
            <AiOutlineClose onClick={toggleModal} />
          </div>
        </div>
        <div className="info-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          praesentium libero veniam. Molestiae unde, esse ducimus reiciendis,
          voluptate, minus inventore itaque sunt ea distinctio autem.
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
