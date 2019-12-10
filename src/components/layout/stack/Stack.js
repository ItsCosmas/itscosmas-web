import React from 'react';
import devStack from '../../../assets/illustration/dev-stack.svg';
import './Stack.scss';

const Stack = () => {
	return (
		<section className={'stack'} id='stack'>
			<h1 className='section-title'>Skills & Technologies</h1>
			<div className={'row'}>
				{/* Intro and Social go here */}
				<div className={'col-1-of-2'}>
					<div className={'grid-container'}>
						<div className={'grid-item'}>
							<ul>
								<li className={'list-title'}>
									<span role='img' aria-label='programmer'>
										👨🏾‍💻
									</span>{' '}
									General Programming
								</li>
								<li>JavaScript | TypeSCript</li>
								<li>Python</li>
								<li>Golang</li>
							</ul>
						</div>
						<div className={'grid-item'}>
							<ul>
								<li className={'list-title'}>
									<span role='img' aria-label='eyes'>
										{' '}
										🕶️{' '}
									</span>{' '}
									Front end
								</li>
								<li>React JS</li>
								<li>Redux</li>
								<li>Sass CSS (SCSS)</li>
							</ul>
						</div>
						<div className={'grid-item'}>
							<ul>
								<li className={'list-title'}>
									<span role='img' aria-label='balance'>
										{' '}
										⚖️{' '}
									</span>{' '}
									Back end
								</li>
								<li>Node.js</li>
								<li>Express</li>
								<li>Flask</li>
							</ul>
						</div>
						<div className={'grid-item'}>
							<ul>
								<li className={'list-title'}>
									<span role='img' aria-label='cloud'>
										{' '}
										☁️{' '}
									</span>{' '}
									Deployment & Services{' '}
								</li>
								<li>Digital Ocean</li>
								<li>AWS Elastic Beanstalk & S3</li>
								<li>Heroku</li>
								<li>C-panel</li>
							</ul>
						</div>
						<div className={'grid-item'}>
							<ul>
								<li className={'list-title'}>
									<span role='img' aria-label='database'>
										{' '}
										🔩{' '}
									</span>{' '}
									Database
								</li>
								<li>SQL: Postgres | MySQL| Sqlite</li>
								<li>NoSQL: Mongo | Firebase</li>
							</ul>
						</div>
						<div className={'grid-item'}>
							<ul>
								<li className={'list-title'}>
									<span role='img' aria-label='toolkit'>
										{' '}
										🛠️{' '}
									</span>{' '}
									Other Tools
								</li>
								<li>Version Control: Git</li>
								<li>Jupyter Notebook</li>
								<li>Google Colab</li>
							</ul>
						</div>
						<div className={'grid-item'}>
							<ul>
								<li className={'list-title'}>
									<span role='img' aria-label='robot'>
										{' '}
										🤖{' '}
									</span>{' '}
									Deep-learning
								</li>
								<li>Keras</li>
								{/* <li>Tensorflow</li> */}
								{/* <li>Pytoch</li> */}
							</ul>
						</div>
					</div>
				</div>

				{/* Illustration Goes Here */}
				<div className={'col-1-of-2'}>
					<img
						src={devStack}
						className={`stack-illustration`}
						alt='Header Illustration'
					/>
				</div>
			</div>
		</section>
	);
};
export default Stack;
