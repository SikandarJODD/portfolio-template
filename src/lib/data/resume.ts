import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from 'lucide-svelte';
import AtomicImg from '$lib/imgs/atomic.png';
import ShopifyImg from '$lib/imgs/shopify.svg';
import NvidiaImg from '$lib/imgs/nvidia.png';
import SplunkImg from '$lib/imgs/splunk.svg';
import LimeImg from '$lib/imgs/lime.svg';
import MitreMediaImg from '$lib/imgs/mitremedia.png';

// Your resume data
export let DATA = {
	name: 'Sikandar Bhide',
	initials: 'SB',
	url: 'https://github.com/SikandarJODD',
	location: 'Mumbai, India',
	locationLink: 'https://www.google.com/maps/place/mumbai',
	description:
		'Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.',
	summary:
		'At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).',
	avatarUrl: '/me.png',
	skills: [
		'Svelte',
		'Sveltekit',
		'Typescript',
		'Node.js',
		'Python',
		'Go',
		'Postgres',
		'Docker',
		'Kubernetes',
		'Java',
		'C++'
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
		{ href: '#', icon: CodeIcon, label: 'Projects' },
		{ href: '#', icon: PencilLine, label: 'Notes' }
	],
	contact: {
		email: 'hello@example.com',
		tel: '+123456789',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://dub.sh/dillion-github',
				// icon: Icons.github,

				navbar: true
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://dub.sh/dillion-linkedin',
				// icon: Icons.linkedin,

				navbar: true
			},
			X: {
				name: 'X',
				url: 'https://dub.sh/dillion-twitter',
				// icon: Icons.x,

				navbar: true
			},
			Youtube: {
				name: 'Youtube',
				url: 'https://dub.sh/dillion-youtube',
				// icon: Icons.youtube,
				navbar: true
			},
			email: {
				name: 'Send Email',
				url: '#',
				// icon: Icons.email,
				navbar: false
			}
		}
	},
	work: [
		{
			company: 'Atomic Finance',
			href: 'https://atomic.finance',
			badges: [],
			location: 'Remote',
			title: 'Bitcoin Protocol Engineer',
			logoUrl: AtomicImg,
			start: 'May 2021',
			end: 'Oct 2022',
			description:
				'Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.'
		},
		{
			company: 'Shopify',
			badges: [],
			href: 'https://shopify.com',
			location: 'Remote',
			title: 'Software Engineer',
			logoUrl: ShopifyImg,
			start: 'January 2021',
			end: 'April 2021',
			description:
				'Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.'
		},
		{
			company: 'Nvidia',
			href: 'https://nvidia.com/',
			badges: [],
			location: 'Santa Clara, CA',
			title: 'Software Engineer',
			logoUrl: NvidiaImg,
			start: 'January 2020',
			end: 'April 2020',
			description:
				'Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.'
		},
		{
			company: 'Splunk',
			href: 'https://splunk.com',
			badges: [],
			location: 'San Jose, CA',
			title: 'Software Engineer',
			logoUrl: SplunkImg,
			start: 'January 2019',
			end: 'April 2019',
			description:
				'Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.'
		},
		{
			company: 'Lime',
			href: 'https://li.me/',
			badges: [],
			location: 'San Francisco, CA',
			title: 'Software Engineer',
			logoUrl: LimeImg,
			start: 'January 2018',
			end: 'April 2018',
			description:
				'Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.'
		},
		{
			company: 'Mitre Media',
			href: 'https://mitremedia.com/',
			badges: [],
			location: 'Toronto, ON',
			title: 'Software Engineer',
			logoUrl: MitreMediaImg,
			start: 'May 2017',
			end: 'August 2017',
			description:
				'Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener'
		}
	]
};
