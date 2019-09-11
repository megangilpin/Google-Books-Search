import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Saved extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: []
  };

  // Add code here to get all books from the database and save them to this.state.books

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>(React) Google Book Search</h1>
              <h3>search and save for books of interest</h3>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3 style={{ padding: 20}}>No Results to Display</h3>
            )}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
