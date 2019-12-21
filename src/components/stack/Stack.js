import React from 'react';
import devStack from '../../assets/illustration/dev-stack.svg';
import './Stack.scss';

const Stack = () => {
	return (
		<section className={'stack'} id='stack'>
			<h1 className='heading__primary'>Skills & Technologies</h1>
			<div className='stack__container'>
				<div className={'stack__grid'}>
					<div className={'stack__grid--item'}>
						<ul>
							<li className={'stack__list--title'}>
								<span role='img' aria-label='programmer'>
									👨🏾‍💻
								</span>{' '}
								General Programming
							</li>
							<li className={'stack__list--item'}>
								JavaScript | TypeSCript
							</li>
							<li className={'stack__list--item'}>Python</li>
							<li className={'stack__list--item'}>Golang</li>
							<li className={'stack__list--item'}>Java</li>
							{/* <li className={'stack__list--item'}>Dart</li> */}
						</ul>
					</div>
					<div className={'stack__grid--item'}>
						<ul>
							<li className={'stack__list--title'}>
								<span role='img' aria-label='eyes'>
									{' '}
									🕶️{' '}
								</span>{' '}
								Front end
							</li>
							<li className={'stack__list--item'}>React JS</li>
							<li className={'stack__list--item'}>Redux</li>
							<li className={'stack__list--item'}>
								Sass CSS (SCSS)
							</li>
							<li className={'stack__list--item'}>Gatsby</li>
						</ul>
					</div>
					<div className={'stack__grid--item'}>
						<ul>
							<li className={'stack__list--title'}>
								<span role='img' aria-label='balance'>
									{' '}
									⚖️{' '}
								</span>{' '}
								Back end
							</li>
							{/* <li className={'stack__list--item'}>Go | Gin</li> */}
							<li className={'stack__list--item'}>
								Node.js | Express
							</li>
							<li className={'stack__list--item'}>
								Python | Flask
							</li>
						</ul>
					</div>
					<div className={'stack__grid--item'}>
						<ul>
							<li className={'stack__list--title'}>
								<span role='img' aria-label='cloud'>
									{' '}
									☁️{' '}
								</span>{' '}
								Deployment & Services{' '}
							</li>
							<li className={'stack__list--item'}>
								Digital Ocean
							</li>
							<li className={'stack__list--item'}>Netlify</li>
							<li className={'stack__list--item'}>Render</li>
							<li className={'stack__list--item'}>Heroku</li>
							{/* <li className={'stack__list--item'}>C-panel</li> */}
							{/* <li className={'stack__list--item'}>AWS</li> */}
						</ul>
					</div>
					<div className={'stack__grid--item'}>
						<ul>
							<li className={'stack__list--title'}>
								<span role='img' aria-label='database'>
									{' '}
									🔩{' '}
								</span>{' '}
								Database
							</li>
							<li className={'stack__list--item'}>
								SQL: Postgres, MySQL, Sqlite
								{/* To add Redis */}
							</li>
							<li className={'stack__list--item'}>
								NoSQL: Mongo, Firebase
							</li>
						</ul>
					</div>
					<div className={'stack__grid--item'}>
						<ul>
							<li className={'stack__list--title'}>
								<span role='img' aria-label='toolkit'>
									{' '}
									🛠️{' '}
								</span>{' '}
								Other Tools
							</li>
							<li className={'stack__list--item'}>
								Web Server: Nginx
							</li>
							<li className={'stack__list--item'}>
								Version Control: Git
							</li>
							<li className={'stack__list--item'}>
								Containerization: Docker
							</li>
							<li className={'stack__list--item'}>
								Notebook Environment: Jupyter & Google Colab
							</li>
							<li className={'stack__list--item'}>
								Text Editor: VS Code & Vim
							</li>
						</ul>
					</div>
					{/* <div className={'stack__grid--item'}>
						<ul>
							<li className={'stack__list--title'}>
								<span role='img' aria-label='robot'>
									{' '}
									🤖{' '}
								</span>{' '}
								Deep-learning
							</li>
							<li className={'stack__list--item'}>Keras</li>
							<li className={'stack__list--item'}>Tensorflow</li>
							<li className={'stack__list--item'}>Pytoch</li>
						</ul>
					</div> */}
				</div>

				{/* Illustration Goes Here */}
				<div className={'stack__visual'}>
					<img
						src={devStack}
						className={`stack__visual--img`}
						alt='Header Illustration'
					/>
				</div>
			</div>
		</section>
	);
};
export default Stack;
