<template>
	<section class="p-3">
		<h1 class="site-header">{{ title }}</h1>
		<div class="card-container">
			<article class="card" v-for="(item, index) in items" :key="index">
				<figure>
					<img class="card-image" :src="item.picture.source" :alt="item.picture.description" />
				</figure>
				<header class="card-header h-8">
					<a href="#" class="btn-vote">
						<div class="h4 thumbup mr-1 w-4">&nbsp;</div>
						{{ item.countLike }}
					</a>
					<a href="#" class="btn-vote">
						<div class="thumbdown mr-1 h-4 w-4">&nbsp;</div>
						{{ item.countDislike }}
					</a>
					<div class="w-100 grow text-right font-bold">84%</div>
				</header>

				<h2 class="card-title">{{ item.title }}</h2>
				<div class="card-description">
					<p v-for="(descriptionParagraph, index) in item.description" :key="index">
						{{ descriptionParagraph }}
					</p>
				</div>
				<footer class="card-labels">
					<div :class="'card-labels-item ' + property.propertyClass" v-for="(property, index) in item.properties" :key="index">
						{{ property.propertyText }}
					</div>
				</footer>
			</article>
		</div>
	</section>
</template>

<script>
import { ref } from 'vue';
import { data } from '@/data.js';

export default {
	name: 'Home',
	props: {
		title: { type: String, default: 'Planéta zvierat' },
	},
	setup() {
		const items = ref(data);

		return {
			items,
		};
	},
};
</script>
