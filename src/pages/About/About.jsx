import React from 'react';
import './About.css';

function About() {
  return (
    <div className="aboutcontainer">
      <h1>Julian Steven Salamanca Hernandez</h1>
      <p>
        I&apos;m 22 years old, I am passionate about the arts, mainly, the cinema and the rock music
        I also like football, suporting teams that does not match my passion for them haha,
        my favourite movie is Whiplash, maybe because I love playing drums (who knows?),
        too bad at League of Legends and a frustrated FIFA pro player, hoping to become a
        developer soon!
      </p>
      <img className="aboutimage" src="https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/130193752_2105190796278670_9173676660232428948_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGeAEJyJwmknvr6mAHXM4_jK17Zkso935krXtmSyj3fmbP3LuhDOi6QRnO6Ijzoxbo2Bu6WEhLU3O_aP7j0C0n8&_nc_ohc=SNYKXXsSFxsAX8A48wL&tn=mZeFEvHGK-xikuMB&_nc_ht=scontent.fbog4-1.fna&oh=00_AT-VKtmvVvO_rWtzZCfzdfEZnFEiumiMm8xdnmW2c1Cwkg&oe=6286616E" alt="" />
      <p>
        <li>
          MERN, I learned so much about the technologies that compose the MERN stack.
        </li>
        <li>
          Agile methodologies, I learnt for the very first time about SCRUM and how to work agile.
        </li>
        <li>
          Git, i highly learnd about Git and how to work with version control with a team.
        </li>
      </p>
      <p>Email: jsalamancah@unal.edu.co</p>
      <a href="https://github.com/julians55">GITHUB</a>
    </div>
  );
}

export default About;
