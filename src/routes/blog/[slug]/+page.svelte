<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="-mt-10">
	<Button
		href="/blog"
		style="padding: 0 0px !important; background:transparent; border:none;"
		class=" mb-2 h-6 border-none bg-transparent text-xs text-muted-foreground outline-none"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-arrow-left mb-px mr-1"
			><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
		>
		Back</Button
	>
</div>
<article>
	<!-- Title -->
	<hgroup class="mb-1">
		<h1 class="title max-w-[650px] text-2xl font-medium capitalize tracking-tighter">
			{data.meta.title}
		</h1>
		<div class="mb-3 mt-2 flex max-w-[650px] items-center justify-between text-sm">
			<p class="text-sm text-neutral-600 dark:text-neutral-400">
				{formatDate(data.meta.date)}
			</p>
		</div>
	</hgroup>

	<!-- Tags -->
	<div class="tags mb-2 flex space-x-2">
		{#each data.meta.categories as category}
			<Badge variant="outline" class="rounded-[4px]">{category}</Badge>
		{/each}
	</div>
	<Separator class="mb-4" />

	<!-- Post -->
	<div
		class=" prose-video prose-ol:my2 prose dark:prose-invert prose-h1:my-1 prose-h2:my-1 prose-h3:my-1 prose-p:my-0 prose-a:my-3 prose-blockquote:my-3 prose-figcaption:my-3 prose-pre:my-3 prose-ul:my-3 prose-table:border-b last:prose-table:border-b prose-thead:border prose-thead:bg-zinc-100 prose-th:border prose-td:border-x prose-td:text-center prose-img:mx-auto prose-img:my-3 prose-img:text-center prose-hr:my-3 dark:prose-thead:bg-zinc-900"
	>
		<svelte:component this={data.content} />
	</div>
</article>
