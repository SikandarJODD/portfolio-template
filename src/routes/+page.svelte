<script>
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import ResumeCard from '$lib/components/portfolio/ResumeCard.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { DATA } from '$lib/data/resume';
	import { marked } from 'marked';
	let BLUR_FADE_DELAY = 0.04;

	// text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
	// text={DATA.description}
	// <Avatar.Image alt={DATA.name} src={DATA.avatarUrl} />
	// <Avatar.Fallback>{DATA.initials}</Avatar.Fallback>
</script>

<main class="flex min-h-[100dvh] flex-col space-y-10">
	<section id="hero">
		<div class="mx-auto w-full max-w-2xl space-y-8">
			<div class="flex justify-between gap-2">
				<div class="flex flex-1 flex-col space-y-1.5">
					<BlurFade
						delay={BLUR_FADE_DELAY}
						class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
						yOffset={8}>Hi, I'm Bhide 👋</BlurFade
					>
					<BlurFade class="max-w-[600px] md:text-xl" delay={BLUR_FADE_DELAY}
						>Software Engineer turned Entrepreneur. I love building things and helping people. Very
						active on Twitter.</BlurFade
					>
				</div>
				<BlurFade delay={BLUR_FADE_DELAY}>
					<Avatar.Root class="size-28 border">
						<Avatar.Image
							alt="Bhide"
							src="https://i.pinimg.com/564x/e6/15/26/e61526e4ae6bc15392473886993d00aa.jpg"
						/>
						<Avatar.Fallback>KN</Avatar.Fallback>
					</Avatar.Root>
				</BlurFade>
			</div>
		</div>
	</section>
	<section id="about">
		<BlurFade delay={BLUR_FADE_DELAY * 4}>
			<h2 class="text-xl font-bold">About</h2>
		</BlurFade>
		<BlurFade delay={BLUR_FADE_DELAY * 5}>
			<div
				class="prose dark:prose-invert max-w-full text-pretty font-sans text-sm text-muted-foreground"
			>
				{@html marked(DATA.summary)}
			</div>
		</BlurFade>
	</section>
	<section id="work">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY * 5}>
				<h2 class="text-xl font-bold">Work Experience</h2>
			</BlurFade>
			{#each DATA.work as work, id}
				<BlurFade delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
					<ResumeCard resumedata={work} />
				</BlurFade>
			{/each}
		</div>
	</section>
</main>
