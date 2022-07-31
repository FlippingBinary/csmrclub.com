<script lang="ts">
	import href from './hacker-workshop-2018-11-02-large.jpg?format=jpg&image';
	import src from './hacker-workshop-2018-11-02-large.jpg?w=720&format=jpg&image';
	import srcset from './hacker-workshop-2018-11-02-large.jpg?w=720&format=webp;jpg&srcset';
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light" rel="stylesheet" />
	<title>CSMR - Computer Science Mathematics and Robotics</title>
</svelte:head>

<div class="grid h-screen place-items-center">
	<div class="text-center p-6 w-96">
		<a href={href}>
			<img
				class="poster"
				{srcset}
        {src}
				alt="Hacker Workshop in Student Union Computer Lab @ 6PM 2nd of
    November"
				title="Hacker Workshop in Student Union Computer Lab @ 6PM
    2nd of November"
			/>
		</a>
		<h1>
			You are invited to join.
			<br /><a
				target="_blank"
				href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MTN0bThidmhydWY5ZmQyYXRydmNqMDNqdHMgam11c3NlbHdoaXRlQHd2c3RhdGV1LmVkdQ&amp;tmsrc=jmusselwhite%40wvstateu.edu"
				>Add this event to your calendar <img
					alt="Add event"
					src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"
				/></a
			>
		</h1>
	</div>
</div>

<style>
	div {
		font-family: 'Shadows Into Light', cursive;
	}
	a:link,
	a:visited {
		text-decoration: none;
		color: black;
	}
	a:hover,
	a:active {
		text-decoration: underline;
		color: black;
	}
	.poster {
		max-width: 480px;
		width: 100vw;
	}
</style>
