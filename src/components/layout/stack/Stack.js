import React from 'react';
import devStack from '../../../assets/illustration/dev-stack.svg';
import './Stack.scss';

const Stack = () => {
    return(
        <section className={'stack'} id='stack'>
            <h1 className="section-title">Technologies</h1>
            <div className={'row'}>

                {/* Intro and Social go here */}
                <div className={'col-1-of-2'}>
                    <div className={'grid-container'}>
                        <div className={'grid-item'}>
                            <ul>
                                <li className={'list-title'}><span role="img" aria-label="eyes"> 🕶️ </span> Front end</li>
                                <li>React JS</li>
                                <li>Vue JS</li>
                                <li>Sass CSS (SCSS)</li>
                            </ul>
                        </div>
                        <div className={'grid-item'}>
                            <ul>
                                <li className={'list-title'}><span role="img" aria-label="balance"> ⚖️ </span> Back end</li>
                                <li>Django</li>
                                <li>Flask</li>
                                <li>Node JS</li>
                                <li>PHP</li>
                            </ul>
                        </div>
                        <div className={'grid-item'}>
                            <ul>
                                <li className={'list-title'}><span role="img" aria-label="robot"> 🤖 </span> Deep-learning</li>
                                <li>Keras</li>
                                <li>Tensorflow</li>
                                {/* <li>Pytoch</li> */}
                            </ul>
                        </div>
                        <div className={'grid-item'}>
                            <ul>
                                <li className={'list-title'}><span role="img" aria-label="cloud"> ☁️ </span> Deployment & Services </li>
                                <li>Heroku</li>
                                <li>Digital Ocean</li>
                                <li>Azure</li>
                                <li>AWS</li>
                                <li>C-panel</li>
                            </ul>
                        </div>
                        {/* <div className={'grid-item'}>
                            <ul>
                                <li className={'list-title'}><span role="img" aria-label="mobile phone"> 📱 </span> Mobile Development</li>
                                <li>Flutter</li>
                                <li>React Native</li>
                                <li>Android Java</li>
                            </ul>
                        </div> */}
                        <div className={'grid-item'}>
                            <ul>
                                <li className={'list-title'}><span role="img" aria-label="toolkit"> 🛠️ </span> Database, Toolkit & Others</li>
                                <li>SQL/MySQL/Postgres/Sqlite</li>
                                <li>NoSQL/Mongo/Firebase</li>
                                <li>Git</li>
                                <li>Docker</li>
                                <li>Command line/Terminal</li>
                                <li>Google Colab</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Illustration Goes Here */}
                <div className={'col-1-of-2'}>
                    <img src={devStack} className={`stack-illustration`} alt="Header Illustration" />
                </div>

            </div>
        </section>
    )
}
export default Stack;