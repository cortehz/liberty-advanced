import React from "react";
import "../components/About/About.css";
import MainHeader from "../components/MainHeader/MainHeader";
import Layout from "../layout";

const About = () => {
  return (
    <Layout>
      <div>
        <MainHeader />
        <section id="about" style={{ zIndex: "-1000" }}>
          <div className="wrapper">
            <article>
              <div className="title">
                <h3>Our Services</h3>
                <p className="separator" />
              </div>
              <div className="desc">
                <h4 className="subtitle">Ecotherapy</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  ex ligula, mollis nec molestie id, bibendum vel dui. Duis
                  scelerisque, est vitae facilisis eleifend, eros dolor
                  dignissim lectus, sed suscipit sapien arcu ut erat. Ut non
                  mollis lacus, vulputate convallis lacus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  ex ligula, mollis nec molestie id, bibendum vel dui. Duis
                  scelerisque, est vitae facilisis eleifend, eros dolor
                  dignissim lectus, sed suscipit sapien arcu ut erat. Ut non
                  mollis lacus, vulputate convallis lacus.
                </p>
              </div>
              <div className="desc">
                <h4 className="subtitle">Psychotherapy</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  ex ligula, mollis nec molestie id, bibendum vel dui. Duis
                  scelerisque, est vitae facilisis eleifend, eros dolor
                  dignissim lectus, sed suscipit sapien arcu ut erat. Ut non
                  mollis lacus, vulputate convallis lacus.
                </p>
                <p>
                  Donec imperdiet tempus sapien, non condimentum quam.
                  Suspendisse potenti. Integer ut dignissim metus. Curabitur dui
                  nibh, cursus non augue sit amet, faucibus efficitur tortor.
                  Fusce a felis ac lacus fermentum porttitor sed id dolor. Donec
                  facilisis tristique urna, a sodales lorem vehicula in. Duis
                  scelerisque bibendum dignissim.
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
