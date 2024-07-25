<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
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

<article>
	<!-- Title -->
	<hgroup class="mb-1">
		<h1 class="capitalize title max-w-[650px] text-2xl font-medium tracking-tighter">
			{data.meta.title}
		</h1>
		<div class="mb-3 mt-2 flex max-w-[650px] items-center justify-between text-sm">
			<p class="text-sm text-neutral-600 dark:text-neutral-400">
				{formatDate(data.meta.date)}
			</p>
		</div>
	</hgroup>

	<!-- Tags -->
	<div class="tags flex mb-2 space-x-2">
		{#each data.meta.categories as category}
			<Badge variant="outline" class="rounded-[4px]">{category}</Badge>
		{/each}
	</div>
	<Separator class="mb-4" />

	<!-- Post -->
	<div class="prose dark:prose-invert">
		<svelte:component this={data.content} />
	</div>
</article>


