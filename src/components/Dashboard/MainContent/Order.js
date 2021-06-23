import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../../App";
import OrderCard from './OrderCard'
const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [showOrder, setShowOrder] = useState([]);
  useEffect(() => {
    fetch(
      `https://server-agency.herokuapp.com/showOrder?email=` +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setShowOrder(data));
  }, [loggedInUser.email]);

  console.log(showOrder);
  return (
      <section>
          <Container>
              <Row>
                  <Col className='py-3'>
                    <h2 className='text-center py-3'>Your Total Booking Services : {showOrder.length}</h2>
                    <div className="row">
                    {
                        showOrder.map(singleOrder => (
                                <OrderCard singleOrder={singleOrder}/>
                        ))
                    }
                    </div>
                  </Col>
              </Row>
          </Container>
      </section>
  )
};

export default BookingList;
