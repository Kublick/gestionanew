<script lang="ts">
	const videos = [
		{
			title: 'Clase 1',
			url: 'https://www.youtube.com/live/s1eksJLkrXI?si=KzSlGau0Ec7X4xyt',
			number: 1
		},
		{
			title: 'Clase 2',
			url: 'https://www.youtube.com/live/qLdeDyheOQk?si=FxHPtVDfw4KTL6_H',
			number: 2
		},
		{
			title: 'Clase 3',
			url: 'https://youtu.be/s3MqfU6oy0Q?si=AeMnQhJBzWWlf4dw',
			number: 3
		},
		{
			title: 'Clase 4',
			url: 'https://www.youtube.com/live/eADVEovhpE4?si=OgoPV-7sj0GpjNg1',
			number: 4
		}
	]

	function getVideoId(url: string) {
		const match = url.match(
			/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|live\/))([\w-]+)/
		)
		return match ? match[1] : null
	}

	function getThumbnailUrl(url: string) {
		const videoId = getVideoId(url)
		return videoId
			? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
			: '/video-thumbnail.png'
	}

	const featuredVideoUrl = 'https://www.youtube.com/live/eADVEovhpE4?si=OgoPV-7sj0GpjNg1'
</script>

<main class="min-h-screen bg-slate-950">
	<div class="container mx-auto px-4 py-12 md:py-20">
		<!-- Header Section -->
		<div class="mb-12 text-center">
			<div
				class="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-600/20 px-4 py-2 text-sm font-medium text-purple-300 border border-purple-500/30"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<polygon points="5 3 19 12 5 21 5 3"></polygon>
				</svg>
				<span>Contenido VIP</span>
			</div>
			<h1 class="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl text-balance">
				Repeticiones de Clases
			</h1>
			<p class="mx-auto max-w-2xl text-lg text-slate-400 text-pretty">
				Accede a todas las grabaciones de las clases. Contenido exclusivo para miembros VIP.
			</p>
		</div>

		<!-- Live Recording Section -->
		<div class="mb-16">
			<div class="mb-6 flex items-center gap-3">
				<div class="flex h-2 w-2 items-center justify-center">
					<span class="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-red-500 opacity-75"
					></span>
					<span class="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
				</div>
				<h2 class="text-2xl font-semibold text-white">Grabaciónes</h2>
			</div>

			<div
				class="group overflow-hidden rounded-xl border border-purple-500/50 bg-slate-900/50 backdrop-blur-sm transition-all hover:shadow-2xl hover:shadow-purple-500/20"
			></div>
		</div>

		<!-- Class Archive Section -->
		<div>
			<h2 class="mb-6 text-2xl font-semibold text-white">Archivo de Clases</h2>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
				{#each videos as video}
					<div
						class="group overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-purple-500/10"
					>
						<div class="relative aspect-video overflow-hidden bg-slate-800">
							<img
								src={getThumbnailUrl(video.url)}
								alt={video.title}
								class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
							<!-- allow clicks to reach the overlay anchor -->
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"
							></div>

							<!-- Play Button Overlay now an anchor so clicks open the video -->
							<a
								href={video.url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Ver ${video.title}`}
								class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 z-10"
							>
								<div
									class="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/90 backdrop-blur-sm"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-8 w-8 fill-white text-white"
										viewBox="0 0 24 24"
										fill="currentColor"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<polygon points="5 3 19 12 5 21 5 3"></polygon>
									</svg>
								</div>
							</a>

							<!-- Number Badge -->
							<div
								class="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/90 backdrop-blur-sm border border-slate-700"
							>
								<span class="text-lg font-bold text-white">{video.number}</span>
							</div>
						</div>

						<div class="p-6">
							<h3 class="mb-4 text-xl font-semibold text-white">{video.title}</h3>
							<a
								href={video.url}
								target="_blank"
								rel="noopener noreferrer"
								class="flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-purple-700"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<polygon points="5 3 19 12 5 21 5 3"></polygon>
								</svg>
								Ver Clase
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
									<polyline points="15 3 21 3 21 9"></polyline>
									<line x1="10" y1="14" x2="21" y2="3"></line>
								</svg>
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</main>

<style>
	@keyframes ping {
		75%,
		100% {
			transform: scale(2);
			opacity: 0;
		}
	}

	.animate-ping {
		animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
	}
</style>
