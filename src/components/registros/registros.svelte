<script lang="ts">
	import { onMount } from 'svelte'

	type User = {
		id: number
		email: string
		createdAt: string
	}

	let data: User[] = []
	let loading = true
	let error: string | null = null

	onMount(async () => {
		try {
			const res = await fetch('https://terapia-back.blancarte.workers.dev/users')
			if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`)
			data = (await res.json()) as User[]
		} catch (err) {
			error = err instanceof Error ? err.message : String(err)
		} finally {
			loading = false
		}
	})

	function formatDate(ts: string) {
		const n = Number(ts)
		if (Number.isNaN(n)) return ts
		return new Date(n * 1000).toLocaleDateString()
	}
</script>

{#if loading}
	<div class="py-8 text-center">Cargando registros…</div>
{:else if error}
	<div class="py-8 text-center text-red-600">Error: {error}</div>
{:else}
	<div class="overflow-x-auto">
		<table class="mt-10 w-full table-auto text-left">
			<thead>
				<tr>
					<th class="w-20 px-4 py-2">#</th>
					<th class="px-4 py-2">Email</th>
					<th class="w-40 px-4 py-2">Fecha</th>
				</tr>
			</thead>
			<tbody>
				{#each data as user, i}
					<tr class="text-center border-t">
						<td class="px-4 py-2">{i + 1}</td>
						<td class="px-8 py-2 text-left">{user?.email}</td>
						<td class="px-4 py-2">{formatDate(user.createdAt)}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
