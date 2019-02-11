import React, { Component } from 'react'
import './Services.css'

const Services = () => {
  return (
    <section className="section-about">
      <div className="about-uss">
        <h2 style={{ textAlign: 'center' }}>OUR SERVICES</h2>
        <div class="about-hr">
          <hr />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex
          ligula, mollis nec molestie id, bibendum vel dui. Duis scelerisque,
          est vitae facilisis eleifend, eros dolor dignissim lectus, sed
          suscipit sapien arcu ut erat. Ut non mollis lacus, vulputate convallis
          lacus. Donec imperdiet tempus sapien, non condimentum quam.
          Suspendisse potenti. Integer ut dignissim metus. Curabitur dui nibh,
          cursus non augue sit amet, faucibus efficitur tortor. Fusce a felis ac
          lacus fermentum porttitor sed id dolor. Donec facilisis tristique
          urna, a sodales lorem vehicula in. Duis scelerisque bibendum
          dignissim. Maecenas sit amet ipsum facilisis, auctor libero et,
          interdum tortor.
          <br />
          <br />
          Suspendisse facilisis imperdiet varius. Morbi dictum velit ac tellus
          auctor, vitae pretium sem tempus. In luctus id ex in porttitor.
          Aliquam sit amet bibendum sem. Ut maximus commodo augue, bibendum
          tempor ex viverra quis. Duis ac lorem ac sem vestibulum lobortis.
          Mauris interdum sodales nunc id lobortis. Cras gravida dapibus
          fermentum. Proin mattis enim sit amet massa auctor, quis condimentum
          arcu finibus. Nunc malesuada pharetra massa, sed interdum sapien
          feugiat eu. Curabitur luctus eu odio a tempor. Vestibulum venenatis
          velit turpis. Sed ornare rutrum eros, quis varius augue sollicitudin
          in. Mauris nec ullamcorper augue, quis varius erat.
        </p>
        <div className="div-about">
          <a className="about-button" href="/about">
            READ MORE
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
