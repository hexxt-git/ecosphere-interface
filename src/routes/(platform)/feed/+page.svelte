<script>
	import EventCard from '$lib/modules/EventCard.svelte';
	import NewPost from '$lib/modules/NewPost.svelte';
	import Post from '$lib/modules/Post.svelte';
</script>

<main class="w-[80%] max-w-[1000px] mobile:w-full mx-auto p-5 space-y-5">
	<EventCard buttons_class="ml-0 mobile:ml-auto mobile:mr-0" />
	<NewPost />
	<Post />
	<Post />
	<Post />
	<Post />
	<Post />
	<Post />
	<Post />
	<Post />
	<Post />
</main>
