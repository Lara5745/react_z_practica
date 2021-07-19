import React, { useState } from "react";
import { Container, Divider, Image, Reveal } from "semantic-ui-react";

const Login = () => {
  return (
    <>
      <div>
        <Container textAlign="left">
          <Image
            src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
            size="small"
            rounded
            style={{ marginTop: "40px" }}
          />
        </Container>
        <Container textAlign="center">Center Aligned</Container>
        <Container textAlign="right" style={{paddingLeft:"70%"}}>
        
          <Reveal animated="rotate left">
            <Reveal.Content visible>
              <Image
                circular
                size="small"
                src="https://www.pngkit.com/png/detail/19-194063_discord-logo-discord-icon.png"
              />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image
                circular
                size="small"
                src="https://www.pngkit.com/png/detail/52-526974_kfc-logo.png"
              />
            </Reveal.Content>
          </Reveal>
        </Container>
        <Container textAlign="justified">
          <b>Justified</b>
          <Divider />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
            elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
            ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
            lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
            imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
            elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
            ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
            lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
            imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi.
          </p>
        </Container>
      </div>
    </>
  );
};

export default Login;
