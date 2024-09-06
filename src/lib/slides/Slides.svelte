<script>
	import { DeviceMockup } from 'flowbite-svelte';
	import Code from './Code.svelte';
	import Container from './Container.svelte';
	import Section from './Section.svelte';
	import { Laptop } from 'svelte-radix';
	import { Server, Smartphone, Sparkles } from 'lucide-svelte';
</script>

<div class="reveal">
	<div class="slides">
		<Section>
			<div>
				<img src="/logo/dark.svg" alt="ecosphere" />
			</div>
		</Section>
		<Section>
			<Section>
				<h2>The Team</h2>
				<ul>
					<li>
						<a target="_blank" href="https://www.linkedin.com/in/hani-daoud-462023234/"> Hani Daoud</a>:
						Backend developer
					</li>
					<li>
						<a target="_blank" href="https://www.linkedin.com/in/zeghdani/"> Zeghdani Salah Eddine</a>:
						Frontend developer
					</li>
					<li>
						<a target="_blank" href="https://www.linkedin.com/in/mohamed-wail-bentafat-36319428a/">
							Wail Bentafat</a>: Backend Developer
					</li>
					<li>
						<a target="_blank" href="https://www.linkedin.com/in/abdelhafid-hadjadj-3ba602229/">
							AbdelHafid Hadjadj</a>: Mobile Developer
					</li>
					<li>
						<a target="_blank" href="https://www.facebook.com/profile.php?id=100034218691439">
							Amine Bessa</a>: Ai engineer
					</li>
				</ul>
			</Section>
			<Section>
				<h2>The Hackathon</h2>
				<p>
					<a href="https://www.squid-tech.fr/" target="_blank">SquidTech</a> We thank them very much for this
					opportunity <br />
					We learned a lot and had a lot of fun.
				</p>
			</Section>
		</Section>
		<Section>
			<Section>
				<div class="flex flex-col items-center">
					<h2 style="margin: 0;">What is ecosphere?</h2>
					<img src="/images/landing.png" alt="" class="border-gray-800 border-4 rounded-2xl h-[30vh]" />
				</div>
			</Section>
			<Section>
				<div class="flex items-center justify-center gap-4">
					<div class="flex items-center flex-col text-left">
						<h2>What we developed</h2>
						<p>
							Our team spent the past week developing both a mobile application and a web platform. with
							both design and functionality in mind.
						</p>
					</div>
					<img
						src="/images/chat.png"
						alt="display of the app"
						class="h-[30vh] border-4 border-gray-800 rounded-3xl"
					/>
				</div>
			</Section>
			<Section>
				<h2>We focused on</h2>
				<ul>
					<li>not delivering a rushed product but a scalable and viable solution</li>
					<li>
						making the platform user-friendly and easy to use by adapting to a wide range of devices and
						accessibility needs
					</li>
					<li>making the platform secure and reliable</li>
				</ul>
			</Section>
			<Section>
				<h2>We did that by</h2>
				<ul>
					<li>developing a localization system for English, French, Arabic and Spanish</li>
					<li>offering both dark and light modes</li>
					<li>creating a fully responsive design for the website</li>
					<li>using the most reliable and well researched technologies</li>
					<li>integrating Ai models to automate processes</li>
				</ul>
			</Section>
			<Section>
				<div class="flex items-center justify-center gap-8">
					<div class="flex flex-col text-left mb-12">
						<h2>core features we developed</h2>
						<ul>
							<li>user profiles</li>
							<li>event creation and management</li>
							<li>live chat communications</li>
							<li>real time notifications</li>
						</ul>
					</div>
					<img
						src="/images/profile.png"
						alt="display of the app"
						class="h-[30vh] border-4 border-gray-800 rounded-3xl"
					/>
				</div>
			</Section>
			<Section>
				<div class="flex flex-col items-center">
					<h2 style="margin: 0;">Artificial Intelligence</h2>
					<img src="/images/charts.png" alt="" class="border-gray-800 border-4 rounded-2xl h-[30vh]" />
				</div>
			</Section>
		</Section>
		<Section>
			<Section>
				<h2>Technologies</h2>
				<ul class="iconsUl">
					<li><Laptop /> Frontend: Svelte, TailwindCSS and Shadcn</li>
					<li><Server /> Backend: Rust, Sveltekit, Flask micro services</li>
					<li><Smartphone /> Mobile: Expo, React Native with Nativewind</li>
					<li><Sparkles /> AI: Python, TensorFlow</li>
				</ul>
			</Section>
			<Section>
				<!-- TODO: add to this -->
				<h2>Additional Technologies</h2>
				<ul class="pr-32">
					<li>Authentication: OAuth</li>
					<li>Deployment: Docker, nginx</li>
					<li>Databases: PostgreSQL, MongoDB</li>
				</ul>
			</Section>
			<Section>
				<h2>Challenges</h2>
				<ul class="pr-20">
					<li>Time constraints</li>
					<li>Working remotely</li>
					<li>Project scale</li>
				</ul>
			</Section>
		</Section>
		<Section>
			<Section>
				<h2>Future</h2>
				<p>
					We plan to continue developing the platform to a finished state launching it in for a small
					community and adding more social features.
				</p>
			</Section>
			<Section>
				<h2>Thank you</h2>
				<p>We would like to thank SquidTech again for this opportunity and for the support they provided us.</p>
			</Section>
		</Section>
		<Section>
			<h1>Q&A</h1>
		</Section>
	</div>
</div>

<img src="/logo/dark.svg" alt="LOGO" style="position: fixed; top: 10px; left: 10px; height: 110px" />
