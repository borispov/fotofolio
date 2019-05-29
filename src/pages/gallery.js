import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  margin: 3em auto;
  max-width: 900px;
`

const gal = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  // grid-template-rows: repeat(8, 5vw);
  grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 15px;
` 

const Photo = styled.img`
  width: 265px;
  height: 300px;
  border-radius: 2px;
  box-shadow: 0 2px 6px 2px hsla(210, 80%, 10%, 0.15);
`

const Post = props => <Photo src={props.pic} alt="" />


const Gallery = () => (
  <Container>
    <gal>
      <Post pic="https://images.unsplash.com/photo-1510936470381-68e4c0a5e24b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"/>
      <Post pic="https://images.unsplash.com/photo-1467991521834-fb8e202c7074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
     <Post pic="https://images.unsplash.com/photo-1510936470381-68e4c0a5e24b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"/>
      <Post pic="https://images.unsplash.com/photo-1467991521834-fb8e202c7074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
     <Post pic="https://images.unsplash.com/photo-1510936470381-68e4c0a5e24b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"/>
      <Post pic="https://images.unsplash.com/photo-1467991521834-fb8e202c7074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
     <Post pic="https://images.unsplash.com/photo-1510936470381-68e4c0a5e24b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"/>
      <Post pic="https://images.unsplash.com/photo-1467991521834-fb8e202c7074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />

      <h1>hi</h1>
    </gal>
  </Container>
)

export default Gallery
